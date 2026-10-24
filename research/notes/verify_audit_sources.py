"""Read-only public source checks for the audit arbitration; writes metadata, not papers.

Run from this directory: python verify_audit_sources.py
Full-text XML, when available, is cached only in the system temporary directory.
"""
import concurrent.futures
import json
import re
import tempfile
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
article = (ROOT / 'psychosocial_risk_literature_review.md').read_text(encoding='utf-8')
references = article.rsplit('\n## 9.', 1)[1]
original = list(dict.fromkeys(re.findall(r'\[(10\.[^\]]+)\]\(https://doi.org/', references)))
corrections = [
    '10.1136/oemed-2011-100381', '10.1037/0022-006X.68.5.748',
    '10.1037/a0033798', '10.1348/096317909X470690',
    '10.1016/j.aap.2011.09.042', '10.1037/a0038166',
    '10.1001/jamapsychiatry.2020.0322', '10.3390/ijerph16214134',
    '10.5271/sjweh.3777', '10.1179/oeh.2007.13.3.268',
    '10.1017/S003329171600355X', '10.5271/sjweh.1050',
    '10.1371/journal.pone.0135225',
]

def get(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'ResearchCitationVerification/1.0'})
    with urllib.request.urlopen(request, timeout=40) as response:
        return response.read()

def metadata(doi):
    url = 'https://api.crossref.org/works/' + urllib.parse.quote(doi, safe='')
    try:
        for attempt in range(3):
            try:
                m = json.loads(get(url))['message']
                break
            except urllib.error.HTTPError as error:
                if error.code != 429 or attempt == 2:
                    raise
                time.sleep(3 * (attempt + 1))
        return dict(queried_doi=doi, status='resolved', doi=m.get('DOI'),
                    title=m.get('title'), authors=[(a.get('given','')+' '+a.get('family','')).strip() for a in m.get('author',[])],
                    journal=m.get('container-title'), volume=m.get('volume'), issue=m.get('issue'),
                    page=m.get('page'), article_number=m.get('article-number'),
                    published=m.get('published'), license=m.get('license'), url=m.get('URL'))
    except Exception as error:
        return dict(queried_doi=doi, status='unresolved', error=str(error))

if __name__ == '__main__':
    target = ROOT / 'arbitration_citation_metadata.json'
    prior = json.loads(target.read_text(encoding='utf-8'))['records'] if target.exists() else []
    cached = {r['queried_doi']: r for r in prior if r['status'] == 'resolved'}
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        records = list(pool.map(lambda doi: cached.get(doi) or metadata(doi), list(dict.fromkeys(original+corrections))))
    target.write_text(json.dumps({'checked_date':'2026-10-24','records':records}, ensure_ascii=False, indent=2), encoding='utf-8')
    for record in records:
        print(json.dumps({k:record.get(k) for k in ('queried_doi','status','title','authors','journal','volume','issue','page','article_number','error')}, ensure_ascii=True))
    cache = Path(tempfile.gettempdir()) / 'psychosocial-arbitration-sources'
    cache.mkdir(exist_ok=True)
    for doi in ['10.1186/s12889-021-10894-7','10.1007/s10654-021-00725-9','10.1017/S003329171600355X','10.1136/bmjopen-2019-034849','10.1093/eurpub/ckad118','10.1186/s12889-024-19304-0']:
        try:
            query=urllib.parse.quote('DOI:'+doi)
            result=json.loads(get('https://www.ebi.ac.uk/europepmc/webservices/rest/search?query='+query+'&format=json'))
            pmcid=result['resultList']['result'][0].get('pmcid')
            if pmcid:
                xml=get('https://www.ebi.ac.uk/europepmc/webservices/rest/'+pmcid+'/fullTextXML')
                (cache/(pmcid+'.xml')).write_bytes(xml)
                print('XML', doi, pmcid, str(cache/(pmcid+'.xml')))
        except Exception as error:
            print('XML unavailable',doi,str(error))
