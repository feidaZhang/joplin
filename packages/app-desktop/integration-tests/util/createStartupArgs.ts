
const createStartupArgs = (profileDirectory: string) => {
	// We need to run with --env dev to disable the single instance check.
	return [
		'main.js', '--env', 'dev', '--profile', profileDirectory,
	];
};

export default createStartupArgs;
