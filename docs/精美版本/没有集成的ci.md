## bash
```bash
yarn init
yarn add -D vuepress@next vuepress-theme-hope@next
yarn upgrade

mkdir docs
touch docs/README.md

mkdir -p docs/.vuepress
touch docs/.vuepress/config.ts

touch .gitignore
```

使用主题`vuepress-theme-hope`: 
- 带复制功能
- 统计阅读时长
- 右侧标题展示

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
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  title: "Hello vuepress2-starter",
  base: "/vuepress2-starter/",
  theme: hopeTheme({
    repo: "sword4869/vuepress2-starter",
    docsDir: "docs",
    sidebar: {
      "/": [
        {
          text: "README",
          link: "/",
        },
        {
          text: "精美版本",
          children: [
            {
              text: "精美版本",
              link: "/精美版本/没有集成的ci.md",
            },
          ],
        },
      ],
    },
  }),
});
```
- 仓库链接
  repo, 右上角就有去github仓库链接的图标.
  ![picture 1](../../images/70e70df858365006da4ca30350c71dcd1fe9bff92ade22821ab8eafb12233cfb.png)  


- 页面编辑
  
  docsRepo默认同repo, 所以不写

  docsBranch默认是main, 所以不写

  docsDir默认是'', 所以要写'docs'
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