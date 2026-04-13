/** Small pixel icons (shape-rendering crisp) for card rails. */

const svgWrap = (inner: string, viewBox = '0 0 20 20') =>
  `<svg class="pixel-icon__svg" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" shape-rendering="crispEdges">${inner}</svg>`;

/** Volvo — side-view car */
export const iconVolvo = svgWrap(`
  <rect width="20" height="20" fill="#1b1816"/>
  <rect x="2" y="11" width="14" height="4" fill="#6b7f8f"/>
  <rect x="6" y="7" width="8" height="5" fill="#8a9eac"/>
  <rect x="8" y="8" width="2" height="2" fill="#c5d5e0"/>
  <rect x="11" y="8" width="2" height="2" fill="#c5d5e0"/>
  <rect x="3" y="15" width="3" height="2" fill="#2a2a2a"/>
  <rect x="10" y="15" width="3" height="2" fill="#2a2a2a"/>
  <rect x="15" y="12" width="3" height="2" fill="#c49a6c"/>
`);

/** Prompt — paper scroll */
export const iconScroll = svgWrap(`
  <rect width="20" height="20" fill="#1b1816"/>
  <rect x="4" y="3" width="10" height="14" fill="#d4c4a8"/>
  <rect x="3" y="4" width="2" height="12" fill="#9a8b72"/>
  <rect x="5" y="5" width="8" height="1" fill="#8a7a62"/>
  <rect x="5" y="7" width="7" height="1" fill="#8a7a62"/>
  <rect x="5" y="9" width="8" height="1" fill="#8a7a62"/>
  <rect x="13" y="5" width="4" height="2" fill="#c4b498"/>
  <rect x="14" y="7" width="3" height="8" fill="#b4a488"/>
`);

/** Battleship — top-down ship */
export const iconShip = svgWrap(`
  <rect width="20" height="20" fill="#1b4a5c"/>
  <rect x="6" y="8" width="10" height="5" fill="#5a6a72"/>
  <rect x="8" y="6" width="4" height="3" fill="#6a7a82"/>
  <rect x="9" y="4" width="2" height="3" fill="#8a9aa2"/>
  <rect x="4" y="10" width="3" height="2" fill="#4a5a62"/>
  <rect x="15" y="10" width="2" height="2" fill="#4a5a62"/>
  <rect x="10" y="13" width="2" height="2" fill="#3a3a42"/>
`);

/** Tower defense — tower */
export const iconTower = svgWrap(`
  <rect width="20" height="20" fill="#1a1528"/>
  <rect x="6" y="12" width="8" height="6" fill="#6a5a4a"/>
  <rect x="5" y="8" width="10" height="5" fill="#8a7a6a"/>
  <rect x="7" y="4" width="6" height="5" fill="#a09080"/>
  <rect x="6" y="3" width="8" height="2" fill="#c0a898"/>
  <rect x="9" y="1" width="2" height="3" fill="#e8d8c8"/>
  <rect x="4" y="14" width="3" height="4" fill="#5a4a3a"/>
  <rect x="13" y="14" width="3" height="4" fill="#5a4a3a"/>
`);

/** Hackathon — trophy */
export const iconTrophy = svgWrap(`
  <rect width="20" height="20" fill="#1b1816"/>
  <rect x="8" y="3" width="4" height="2" fill="#f0d060"/>
  <rect x="7" y="5" width="6" height="6" fill="#d4a020"/>
  <rect x="5" y="7" width="2" height="3" fill="#f0d060"/>
  <rect x="13" y="7" width="2" height="3" fill="#f0d060"/>
  <rect x="8" y="11" width="4" height="2" fill="#b08010"/>
  <rect x="6" y="13" width="8" height="2" fill="#d4a020"/>
  <rect x="8" y="15" width="4" height="3" fill="#8a6020"/>
`);

/** Netgear — yellow “N” on dark (evokes Netgear wordmark; personal portfolio use) */
export const iconNetgear = svgWrap(`
  <rect width="20" height="20" fill="#0a0a0a"/>
  <rect x="3" y="3" width="14" height="14" fill="#121212"/>
  <rect x="5" y="5" width="2" height="10" fill="#ffd200"/>
  <rect x="13" y="5" width="2" height="10" fill="#ffd200"/>
  <rect x="7" y="11" width="2" height="2" fill="#ffd200"/>
  <rect x="9" y="9" width="2" height="2" fill="#ffd200"/>
  <rect x="11" y="7" width="2" height="2" fill="#ffd200"/>
`);

/** Microsoft — four-square mark */
export const iconMicrosoft = svgWrap(`
  <rect width="20" height="20" fill="#1b1816"/>
  <rect x="4" y="4" width="5" height="5" fill="#f65314"/>
  <rect x="11" y="4" width="5" height="5" fill="#7cbb00"/>
  <rect x="4" y="11" width="5" height="5" fill="#00a4ef"/>
  <rect x="11" y="11" width="5" height="5" fill="#ffba08"/>
`);
