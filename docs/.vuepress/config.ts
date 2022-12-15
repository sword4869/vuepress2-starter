import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  title: "Hello sword4869/vuepress2-starter",
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