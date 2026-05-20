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

// Productos category cards (6) — fotos institucionales provistas (en public/)
export const cropHibridos = "/prod_hibridos.png";       // Híbridos DEKALB Maíz
export const cropHerbicidas = "/prod_herbicidas.png";   // Herbicidas
export const cropFungicidas = "/prod_fungicidas.png";   // Fungicidas
export const cropInsecticidas = "/prod_insecticidas.png"; // Insecticidas
export const cropTerapicos = "/prod_terapicos.png";     // Terápicos de Semilla
export const cropCoadyuvante = "/prod_coadyuvante.png"; // Coadyuvante

// Novedades — fotos institucionales provistas (en public/)
export const newsGarantiaCripton = "/new1.png"; // Garantía Cripton Xpro
export const newsCampanaFina = "/new2.png"; // Lanzamiento Campaña Fina 2026
export const newsCapacitacionBayer = "/new3.png"; // Capacitación Técnica Bayer
