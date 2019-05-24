import _options from './recipes.json';

const TIMEOUT = 100;

export default {
	get: (cb, timeout) => setTimeout(() => cb(_options), timeout || TIMEOUT),
};
