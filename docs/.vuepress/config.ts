import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: "Hello sword4869/vuepress2-starter",
  base: "/vuepress2-starter/",
  theme: defaultTheme({
    repo: 'sword4869/vuepress2-starter',
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
        }, 
        {
            text: "精美版本",
            children: [
                {
                    text: "精美版本",
                    link: "/精美版本/没有集成的ci.md"
                }
            ]
        }
    ],
    }
  }),
})