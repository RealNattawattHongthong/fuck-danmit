

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CugjqBrV.js","_app/immutable/chunks/scheduler.7uPeamYi.js","_app/immutable/chunks/index.zdgA4YkA.js","_app/immutable/chunks/entry.D9xod2Iy.js"];
export const stylesheets = [];
export const fonts = [];
