

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.qaRswYGZ.js","_app/immutable/chunks/scheduler.7uPeamYi.js","_app/immutable/chunks/index.zdgA4YkA.js"];
export const stylesheets = ["_app/immutable/assets/2.DoDqWJXC.css"];
export const fonts = [];