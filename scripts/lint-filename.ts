import path from 'path';
import recursive from 'recursive-readdir';

const exceptions = ['.DS_Store', 'LICENSE', 'node_modules'];

function isException(file: string) {
  return path.extname(file) === '.md' || exceptions.includes(file);
}

(async () => {
  const srcPathFromRoot: string = path.resolve(
    path.join(process.cwd(), 'packages/design-system')
  );

  const filesPathFromRoot: string[] = await recursive(srcPathFromRoot);

  const errors: string[] = [];
  for (const filePathFromRoot of filesPathFromRoot) {
    // Start path from src
    const filePathFromSrc: string = filePathFromRoot.replace(
      `${srcPathFromRoot}/`,
      ''
    );

    const filePathParts = filePathFromSrc.split('/');

    for (const fileOrDirName of filePathParts) {
      const isValid = /^[a-z0-9]*(-?[a-z0-9])*(\.[a-z]+)*$/.test(fileOrDirName);
      if (isValid || isException(fileOrDirName)) continue;

      const fileOrDirectoryPathFromRoot = filePathFromRoot.substr(
        0,
        filePathFromRoot.indexOf(fileOrDirName)
      );

      const errorMessage = `${fileOrDirName} is not a valid file or directory name in ${fileOrDirectoryPathFromRoot}${fileOrDirName}`;
      if (errors.includes(errorMessage)) continue;

      errors.push(errorMessage);
    }
  }

  if (errors.length) {
    errors.forEach((error: string) => console.error(error));
    process.exit(1);
  }
})();
