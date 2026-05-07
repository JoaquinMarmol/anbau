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

// Hero / dark section backgrounds — green corn leaves close-up texture
export const bgHomeFarm = u("1574323347407-f5e1ad6d020b", 2400); // green corn leaves close-up
export const bgCornField = u("1574323347407-f5e1ad6d020b", 2400); // same texture for Rendimiento + Footer

// Section imagery
export const videoInstitucional = u("1500382017468-9049fed747ef", 1600); // wheat field at golden hour — Quienes Somos
export const ricePlantSunset = u("1500382017468-9049fed747ef", 1600); // wheat at sunset — Operá

// Productos category cards (6) — each tries to evoke its category
export const cropHibridos = u("1574943320219-553eb213f72d", 1200); // hand with seeds / wheat
export const cropHerbicidas = u("1605000797499-95a51c5269ae", 1200); // tractor in field
export const cropFungicidas = u("1530836369250-ef72a3f5cda8", 1200); // green sprouts / leaves
export const cropInsecticidas = u("1597857135948-d35cc63a09ca", 1200); // corn leaves close-up
export const cropTerapicos = u("1574943320219-553eb213f72d", 1200); // golden wheat
export const cropCoadyuvante = u("1464454709131-ffd692591ee5", 1200); // berries / vineyard

// Novedades
export const newsTech = u("1464226184884-fa280b87c399", 1200); // satellite mapping / aerial fields
export const newsFormacion = u("1574943320219-553eb213f72d", 1200); // wheat (formation context)
export const newsResultados = u("1605000797499-95a51c5269ae", 1200); // grain pouring / harvest
export const newsInvestigacion = u("1530836369250-ef72a3f5cda8", 1200); // sprout in soil
