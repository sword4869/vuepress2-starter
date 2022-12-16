## bash
```bash
yarn init
yarn add -D vuepress@next vuepress-theme-hope@next
yarn upgrade

mkdir docs
touch docs/README.md

mkdir -p docs/.vuepress
touch docs/.vuepress/config.ts

mkdir -p .github/workflows
touch .github/workflows/ci.yml

touch .gitignore
```

使用主题`vuepress-theme-hope`: 

- 带复制功能

- 统计阅读时长

- 右侧标题展示(自动的，屏幕大就放在右边，屏幕小就融合进sidebar里)。
  
  <details>
  <summary>具体设置</summary>

  注意：文档必须只有一级标题，其他都是该一级标题下的子标题才能正确显示。显示顶多到三级标题，四级标题就不显示了。

  toc关闭：默认是true
  ```ts
  hopeTheme({
    toc: false
  })
  ```
  也可以设置headerDepth
  ```ts
  hopeTheme({
    headerDepth: 0
  })
  ```
  0关闭，1，只显示二级标题，2只显示三级标题，其他数字无效。

  </details>


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

```yaml
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
        uses: sword4869/vuepress-deploy@main
        env:
          ACCESS_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          TARGET_BRANCH: gh-pages
          BUILD_SCRIPT: yarn install && yarn vuepress:build
          BUILD_DIR: docs/.vuepress/dist/
```
或者
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