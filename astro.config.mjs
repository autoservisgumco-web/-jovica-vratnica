import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://autoservisgumco-web.github.io',
  base: process.env.GITHUB_ACTIONS ? '/-jovica-vratnica' : '',
});