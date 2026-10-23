"""Derive evidence weights for EVIDENCE_REGISTER.md, and the Risk Model's effective weights.

Method (from EVIDENCE_REGISTER.md): weight = ln(OR or RR), scaled so the strongest effect in the set = 1.0.
Run with:  python research/notes/derive_weights.py
Prints markdown tables. Figures are typed from the sources noted; check them there before changing anything.
"""
from math import log

# ---------------------------------------------------------------------------
# Option A: one review, one outcome, consistent methods.
# Mikkelsen et al 2021, Eur J Epidemiol 36(5):479-496, Table 2. Outcome: depressive episodes.
# (estimate, low, high, precision rating from the paper)
MIKKELSEN = {
    'Bullying': (2.58, 1.13, 5.93, 'Low'),
    'Relational injustice': (1.60, 1.14, 2.24, 'Low'),
    'Effort-reward imbalance': (1.53, 1.21, 1.92, 'Low'),
    'Violence': (1.40, 1.28, 1.52, 'High'),
    'Low support, colleagues': (1.37, 1.07, 1.74, 'Low'),
    'Job insecurity': (1.35, 1.21, 1.50, 'High'),
    'Low support, supervisors': (1.33, 1.11, 1.60, 'Moderate'),
    'Work load': (1.24, 0.95, 1.61, 'Low'),
    'Procedural injustice': (1.23, 1.02, 1.47, 'Moderate'),
    'Emotional demands': (1.21, 1.08, 1.36, 'High'),
    'Night work': (1.15, 1.01, 1.30, 'High'),
    'Job strain': (1.14, 1.05, 1.25, 'High'),
    'Low support, unspecified': (1.14, 0.98, 1.32, 'Moderate'),
    'Low skill discretion': (1.12, 0.98, 1.29, 'Moderate'),
    'Demands': (1.08, 0.98, 1.19, 'High'),
    'Low control': (1.07, 1.01, 1.13, 'High'),
    'Long working hours': (1.07, 0.98, 1.18, 'High'),
    'Low decision authority': (0.93, 0.77, 1.13, 'Moderate'),
}

# Option B: best available estimate per exposure for depression or common mental disorders,
# from the reviews named in the starter register (Stansfeld & Candy 2006 Table 1, p448)
# and the reviews summarised in Niedhammer et al 2021 (supplementary table S1).
# (estimate, low, high, outcome, source)
BEST = {
    'Bullying': (2.82, 2.21, 3.59, 'Depressive symptoms', 'Theorell 2015 (low quality per Niedhammer)'),
    'Effort-reward imbalance': (1.84, 1.45, 2.35, 'Common mental disorders', 'Stansfeld & Candy 2006'),
    'Job strain': (1.82, 1.06, 3.10, 'Common mental disorders', 'Stansfeld & Candy 2006'),
    'Job insecurity': (1.61, 1.29, 2.00, 'Depressive symptoms', 'Ronnblad 2019 (high quality)'),
    'Violence': (1.42, 1.31, 1.54, 'Depression', 'Rudkjoebing 2020 (moderate quality)'),
    'High psychological demands': (1.39, 1.15, 1.69, 'Common mental disorders', 'Stansfeld & Candy 2006'),
    'Low decision latitude': (1.23, 1.08, 1.39, 'Common mental disorders', 'Stansfeld & Candy 2006'),
    'Low social support': (1.32, 1.21, 1.44, 'Common mental disorders', 'Stansfeld & Candy 2006'),
    'Long working hours': (1.14, 1.03, 1.25, 'Depressive symptoms', 'Virtanen 2018 (high quality)'),
}


def scaled(table):
    top = max(log(v[0]) for v in table.values())
    return {k: (v, log(v[0]), log(v[0]) / top) for k, v in table.items()}


def print_table(title, rows, cols):
    print(f'\n### {title}\n')
    print('| ' + ' | '.join(cols) + ' |')
    print('|' + '---|' * len(cols))
    for row in rows:
        print('| ' + ' | '.join(row) + ' |')


a = scaled(MIKKELSEN)
print_table('Option A: Mikkelsen 2021 (depressive episodes)', [
    [k, f'{v[0]:.2f} ({v[1]:.2f}-{v[2]:.2f})', v[3], f'{ln:.3f}',
     f'{w:.2f}' + ('' if v[1] > 1 else ' (CI includes 1)')]
    for k, (v, ln, w) in sorted(a.items(), key=lambda kv: -kv[1][2])
], ['Exposure', 'Estimate (95% CI)', 'Precision', 'ln', 'Weight'])

b = scaled(BEST)
print_table('Option B: best available per exposure', [
    [k, f'{v[0]:.2f} ({v[1]:.2f}-{v[2]:.2f})', v[3], v[4], f'{ln:.3f}', f'{w:.2f}']
    for k, (v, ln, w) in sorted(b.items(), key=lambda kv: -kv[1][2])
], ['Exposure', 'Estimate (95% CI)', 'Outcome', 'Source', 'ln', 'Weight'])

# ---------------------------------------------------------------------------
# Risk Model effective weights (reference/risk-model/index.html).
# Pillar raw = sum of factor steps / 12, so one step on one factor moves its pillar raw by 1/12.
# Cascade: job = 0.85 job + 0.15 org; individual = 0.80 ind + 0.15 job' + 0.05 org.
# Overall = 0.30 org + 0.35 job' + 0.35 ind' (each pillar on a 0-10 scale).
org = 0.30 + 0.35 * 0.15 + 0.35 * (0.15 * 0.15 + 0.05)
job = 0.35 * 0.85 + 0.35 * 0.15 * 0.85
ind = 0.35 * 0.80
total = org + job + ind
print('\n### Risk Model: share of the overall score driven by each pillar (after cascade)\n')
for name, share in (('Organisation', org), ('Job role', job), ('Individual', ind)):
    print(f'- {name}: {share / total:.1%} of the score; each of its 6 factors {share / total / 6:.1%}')
