#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Создаем package.json для CommonJS директории
const cjsPackage = {
  type: 'commonjs'
};

// Создаем package.json для ESM директории
const esmPackage = {
  type: 'module'
};

// Путь до директории сборки
const buildDir = path.resolve('./build');

// Создаем директории, если они не существуют
if (!fs.existsSync(path.join(buildDir, 'cjs'))) {
  fs.mkdirSync(path.join(buildDir, 'cjs'), { recursive: true });
}
if (!fs.existsSync(path.join(buildDir, 'esm'))) {
  fs.mkdirSync(path.join(buildDir, 'esm'), { recursive: true });
}

// Записываем package.json файлы
fs.writeFileSync(
  path.join(buildDir, 'cjs/package.json'),
  JSON.stringify(cjsPackage, null, 2)
);
fs.writeFileSync(
  path.join(buildDir, 'esm/package.json'),
  JSON.stringify(esmPackage, null, 2)
);

console.log('✅ Generated package.json files for CJS and ESM formats');