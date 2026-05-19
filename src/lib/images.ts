/**
 * Centralized image registry.
 *
 * NOTE: The Figma asset URLs returned by the MCP server are session-scoped
 * and expire as soon as the session ends, so they can't be hot-linked from
 * the deployed site. Until the original Bayer / Dekalb photography is dropped
 * into `/public/figma/`, we use carefully curated Unsplash photos that match
 * each Figma image description (corn field, tractor, wheat seeds, ladybug,
 * sprout, rice at sunset, etc.).
 *
 * To swap to the real Figma photos: drop the files into `public/figma/<name>.jpg`
 * and replace the URLs below with `/figma/<name>.jpg`.
 */

const u = (id: string, w = 1800, q = 80) =>
  `https://images.unsplash.com/photo-${id}?q=${q}&w=${w}&auto=format&fit=crop`;

// Hero / dark section backgrounds — local files from /public
export const bgHomeFarm = "/hero.png";          // Hero (grayscale corn leaves)
export const bgRendimiento = "/Rendimiento.png"; // Rendimiento (green tinted leaves)
export const bgFooter = "/footer.png";           // Footer CTA (corn path)

// Kept for backwards compatibility; alias to footer art
export const bgCornField = bgFooter;

// Section imagery
export const videoInstitucional = u("1500382017468-9049fed747ef", 1600); // wheat field at golden hour — Quienes Somos
export const ricePlantSunset = u("1500382017468-9049fed747ef", 1600); // wheat at sunset — Operá

// Productos category cards (6) — each tries to evoke its category
export const cropHibridos = u("1574943320219-553eb213f72d", 1200); // hand with seeds / wheat
export const cropHerbicidas = u("1605000797499-95a51c5269ae", 1200); // tractor in field
export const cropFungicidas = u("1530836369250-ef72a3f5cda8", 1200); // green sprouts / leaves
export const cropInsecticidas = u("1500382017468-9049fed747ef", 1200); // wheat field — fallback for insecticidas card
export const cropTerapicos = u("1574943320219-553eb213f72d", 1200); // golden wheat
export const cropCoadyuvante = u("1464454709131-ffd692591ee5", 1200); // berries / vineyard

// Novedades — fotos institucionales provistas (en public/)
export const newsGarantiaCripton = "/new1.png"; // Garantía Cripton Xpro
export const newsCampanaFina = "/new2.png"; // Lanzamiento Campaña Fina 2026
export const newsCapacitacionBayer = "/new3.png"; // Capacitación Técnica Bayer
