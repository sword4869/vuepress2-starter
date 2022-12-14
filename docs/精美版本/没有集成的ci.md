## bash
```bash
yarn init
yarn add -D vuepress@next vuepress-theme-hope@next
mkdir docs

mkdir -p docs/.vuepress
touch docs/.vuepress/config.ts

touch .gitignore
```

使用主题`vuepress-theme-hope`

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
```

## config.ts

```ts
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: "Hello sword4869/vuepress2-starter",
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
                    text: "没有集成的ci",
                    link: ""
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