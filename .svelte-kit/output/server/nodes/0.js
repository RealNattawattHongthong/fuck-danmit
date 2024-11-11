

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CKwJ-SbQ.js","_app/immutable/chunks/scheduler.7uPeamYi.js","_app/immutable/chunks/index.zdgA4YkA.js"];
export const stylesheets = ["_app/immutable/assets/0.Cd5qU2NK.css"];
export const fonts = [];
