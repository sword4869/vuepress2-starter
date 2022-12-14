## bash
```bash
yarn init
yarn add -D vuepress@next vuepress-theme-hope@next
yarn upgrade

mkdir docs

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
        uses: sword4869/vuepress-deploy@main
        env:
          ACCESS_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          TARGET_BRANCH: gh-pages
          BUILD_SCRIPT: python3 translator-v2.py ${{github.repository}} && yarn install && yarn vuepress:build
          BUILD_DIR: docs/.vuepress/dist/
```