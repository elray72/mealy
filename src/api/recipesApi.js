import recipesJson from './recipes.json';

const TIMEOUT = 100;

export default {
	getRecipes: (cb, timeout) => setTimeout(() => cb(recipesJson), timeout || TIMEOUT),
};
