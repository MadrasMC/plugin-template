import { Plugin } from "@telecraft/types";

const pkg = require("../package.json") as { name: string; version: string };

const auth: Plugin<{ enable: boolean }> = opts => {
	/* Initialise anything you need during the plugin runtime or to export */

	return {
		name: pkg.name,
		version: pkg.version,
		dependencies: [] /* Request dependencies */,
		exports: null /* Have something to export? */,
		start: (
			{ events, store, server, console },
			[ /* dependencies requested will be passed here */ ],
		) => {
			if (opts.enable) {
				/* do something cool */
			}
		},
	};
};

export default auth;
