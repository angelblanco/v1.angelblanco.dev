
import packageJson from '../../../package.json';

export async function get(req, res, next) {
    const devDependencies = Object.keys(packageJson.devDependencies);
    const dependencies = Object.keys(packageJson.dependencies);

    return res.end(JSON.stringify({ devDependencies, dependencies} ));
};
