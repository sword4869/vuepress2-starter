import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: "Hello sword4869/vuepress-starter2",
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