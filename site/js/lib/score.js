// Works out the indicative rating from the answers. Rules and wording are in js/data/scoring.js.
// Only work-related answers are read; the individual circumstances notes are never used.

import { getAnswer } from './state.js';
import { bands, startingBand, controlsStep, severeFloor, combineCount, combineFrom } from '../data/scoring.js';

const order = bands.map(band => band.id);
const rank = id => order.indexOf(id);
const clamp = index => Math.max(0, Math.min(order.length - 1, index));

// One hazard's rating, or null if how often or how serious is missing.
export function rateHazard(frequency, severity, controls) {
  const start = startingBand[severity]?.[frequency];
  if (!start) return null;
  let index = clamp(rank(start) + (controlsStep[controls] || 0));
  if (severity === 'severe') index = Math.max(index, rank(severeFloor));
  return order[index];
}

// Ratings for the hazards picked under `hazardsKey`, plus the overall result.
// `hazards` is the list of hazard objects shown on the page (id and name), in display order.
export function scoreHazards(hazards, hazardsKey, defaultControlsKey) {
  const fallbackControls = getAnswer(defaultControlsKey);
  const rows = hazards.map(hazard => {
    const base = `${hazardsKey}.${hazard.id}`;
    const frequency = getAnswer(`${base}.frequency`);
    const severity = getAnswer(`${base}.severity`);
    const ownControls = getAnswer(`${base}.controls`);
    const controls = ownControls || fallbackControls;
    return { hazard, frequency, severity, controls, usedDefault: !ownControls && Boolean(fallbackControls), band: rateHazard(frequency, severity, controls) };
  });
  const rated = rows.filter(row => row.band);
  const top = rated.length ? order[Math.max(...rated.map(row => rank(row.band)))] : null;
  const atOrAbove = rated.filter(row => rank(row.band) >= rank(combineFrom));
  return {
    rows,
    overall: top,
    drivers: rated.filter(row => row.band === top).map(row => row.hazard),
    unrated: rows.length - rated.length,
    combineFlag: atOrAbove.length >= combineCount ? atOrAbove.length : 0,
  };
}
