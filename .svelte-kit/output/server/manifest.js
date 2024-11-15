export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["02.jpg","data/profile.json","favicon.png","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".json":"application/json",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DnLLWorH.js","app":"_app/immutable/entry/app.DTzUo8bk.js","imports":["_app/immutable/entry/start.DnLLWorH.js","_app/immutable/chunks/entry.D9xod2Iy.js","_app/immutable/chunks/scheduler.7uPeamYi.js","_app/immutable/entry/app.DTzUo8bk.js","_app/immutable/chunks/scheduler.7uPeamYi.js","_app/immutable/chunks/index.zdgA4YkA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
