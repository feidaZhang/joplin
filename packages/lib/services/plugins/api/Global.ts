/* eslint-disable multiline-comment-style */

import Plugin from '../Plugin';
import Joplin from './Joplin';

/**
 * @ignore
 */
// const builtinModules = require('builtin-modules');

/**
 * @ignore
 */
export default class Global {

	private joplin_: Joplin;

	public constructor(implementation: any, plugin: Plugin, store: any) {
		this.joplin_ = new Joplin(implementation, plugin, store);
	}

	public get joplin(): Joplin {
		return this.joplin_;
	}

	// To get webpack to work with Node module we need to set the parameter `target: "node"`, however
	// when setting this, the code generated by webpack will try to access the `process` global variable,
	// which won't be defined in the sandbox. So here we simply forward the variable, which makes it all work.
	public get process(): any {
		return process;
	}

}
