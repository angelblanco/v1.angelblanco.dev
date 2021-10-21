import packageJson from '../../../package.json';

export async function get() {
  const devDependencies = Object.keys(packageJson.devDependencies);
  const dependencies = Object.keys(packageJson.dependencies);

  return { body: { devDependencies, dependencies } };
}
