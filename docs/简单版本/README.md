Errors resolution: https://github.com/sword4869/vuepress-deploy/blob/main/docs/why_build_failure.md

## bash
```bash
yarn init
yarn add -D vuepress@next
yarn upgrade
mkdir docs
touch docs/README.md

mkdir -p docs/.vuepress
touch docs/.vuepress/config.ts

mkdir -p .github/workflows
touch .github/workflows/ci.yml

touch .gitignore
```
## package.json

```js
"scripts": {
    "vuepress:dev": "vuepress dev docs",
    "vuepress:build": "vuepress build docs"
}
```
## .gitignore
```
docs/.vuepress/*
!docs/.vuepress/config.ts
node_modules
yarn-error.log
```

## config.ts

```ts
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: "Hello vuepress2-starter",
  base: "/vuepress2-starter/",
  theme: defaultTheme({
    sidebar: {
        "/": [
        {
            text: "README",
            link: "/"
        }, 
        {
            text: "简单版本",
            children: [
                {
                    text: "简单版本",
                    link: "/简单版本"
                }
            ]
        }
    ],
    }
  }),
})
```

## github action

```yml
name: Build and Deploy
on: 
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: vuepress-deploy
        uses: jenkey2011/vuepress-deploy@master
        env:
          ACCESS_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          TARGET_BRANCH: gh-pages
          BUILD_SCRIPT: yarn install && yarn vuepress:build
          BUILD_DIR: docs/.vuepress/dist/
```