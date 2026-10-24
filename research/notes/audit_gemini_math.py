"""Recompute the arithmetic in the Gemini report (see gemini-report-audit.md, section 4).

Run with:  python research/notes/audit_gemini_math.py
"""
from math import log, exp, sqrt, pi

def r_to_or(r):
    r = abs(r)
    d = 2 * r / sqrt(1 - r * r)          # r -> Cohen's d
    return d, exp(d * pi / sqrt(3))      # d -> OR (Chinn 2000 logistic conversion)

claims = [
    ('Role ambiguity', 0.279, 2.87), ('Role conflict', 0.318, 3.38),
    ('Role stress (Soucek)', 0.23, 2.30), ('Sexual mistreatment (Soucek)', 0.20, 2.05),
    ('Sexual harassment (Willness)', 0.28, 2.88), ('Gender harassment (Sojo)', 0.28, 2.88),
    ('Sexual coercion (Sojo)', 0.24, 2.42), ('STS-burnout (Cieslak)', 0.55, 7.03),
    ('Trauma severity (Brewin)', 0.23, 2.30), ('Social support post-trauma (Brewin)', 0.40, 4.25),
    ('Life threat (Ozer)', 0.26, 2.62), ('Conflict, wellbeing', 0.25, 2.50),
    ('Conflict, depressive', 0.31, 3.25), ('Incivility, wellbeing', 0.36, 4.04),
    ('Incivility, depressive', 0.35, 3.86),
]
print('| Exposure | r | report OR | recomputed d | recomputed OR | diff |')
for name, r, rep in claims:
    d, o = r_to_or(r)
    print(f'| {name} | {r} | {rep} | {d:.3f} | {o:.2f} | {"OK" if abs(o-rep)/rep < 0.03 else "WRONG"} |')

print('\nWeights if converted ORs were used, anchored to bullying 2.82 (Theorell) and 2.58 (Mikkelsen):')
for name, r, rep in claims:
    print(f'  {name}: {log(rep)/log(2.82):.2f} / {log(rep)/log(2.58):.2f}')

print('\nOrg change 1.51 weight:', round(log(1.51)/log(2.82), 3), round(log(1.51)/log(2.58), 3))

print('\nRudkjoebing N components sum:', 72226 + 1198 + 15246 + 9884, 'vs claimed 74,688')

print('\nvan Lunen 2023 (report calls it Bertrais 2023): ln(OR) by number of exposures')
prev = 0
for n, o in [(1, 2.98), (2, 3.14), (3, 6.44), (4, 9.62)]:
    print(f'  {n} exposures: ln={log(o):.2f}, step from previous={log(o)-prev:.2f}, if log-odds simply added: {n*log(2.98):.2f} (OR {exp(n*log(2.98)):.1f})')
    prev = log(o)
