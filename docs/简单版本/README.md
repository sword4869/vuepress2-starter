## bash
```bash
yarn init
yarn add -D vuepress@next
yarn upgrade
mkdir docs
touch docs/README.md

mkdir -p docs/.vuepress
touch docs/.vuepress/config.ts

touch .gitignore
```


yarn.lock的问题: 有时候`yarn upgrade`后还是`vuepress-vite@2.0.0-beta.50`, 只能手动修改
```
vuepress-vite@2.0.0-beta.59:
  version "2.0.0-beta.59"
  resolved "https://registry.npmmirror.com/vuepress-vite/-/vuepress-vite-2.0.0-beta.59.tgz#8f25504cc0679d816b762c35ffbbb4079b5fffdf"
  integrity sha512-DyUsTkixrvUQjfxUdRv/uNotrQeOxVQisk6Szo0ukvZQGpet9/aMqAmYFwJy8Xd1od30f+h4M9KNhBM8N9sm1g==
  dependencies:
    "@vuepress/bundler-vite" "2.0.0-beta.59"
    "@vuepress/cli" "2.0.0-beta.59"
    "@vuepress/core" "2.0.0-beta.59"
    "@vuepress/theme-default" "2.0.0-beta.59"

vuepress@^2.0.0-beta.59:
  version "2.0.0-beta.59"
  resolved "https://registry.npmmirror.com/vuepress/-/vuepress-2.0.0-beta.59.tgz#ed1b8a61a9ec0c6de198ea75168c26f428b51912"
  integrity sha512-ggFuq1jKVwF1f0PK5SR3mAi34PHDLvNDiNbC1Qw5XZR7qs9ryutsbFUkfpa9R4rnGnw0uoohiyE4itANWVcvtw==
  dependencies:
    vuepress-vite "2.0.0-beta.59"
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