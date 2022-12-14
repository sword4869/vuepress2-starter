## bash
```bash
yarn init
yarn add -D vuepress@next
mkdir docs

mkdir -p docs/.vuepress
touch docs/.vuepress/config.ts

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
yarn.lock
package-lock.json
```

## config.ts

```ts
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: "Hello sword4869/vuepress-starter2",
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