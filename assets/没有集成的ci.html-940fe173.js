import{_ as n,V as s,W as a,X as e}from"./framework-d15c4005.js";const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA3CAIAAAAqpzVWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACV0lEQVRYhe2Xv6riQBSH5y6rYAr/xEInGMYqiIIogtgIgm1S+AamiuAbWPkYKggWPoCgYCGCYGejgljYmQTtRBsLg7hFIIT14p6rce8t5quO5neOH2ScTD5utxv6Yfz6boFPoE4wqBMM6gSDOsGgTjCoEwzqBIM6waBOMH47OMswjN1up2kaQojneY7jXC7XtznNZrPJZKJp2uVysb50u908zxcKhWw2+6VpH6+/tzQajfl8/iCQTqcrlcr/c1IUBZhsNpvA5EtrfDgcIoQYhhFFMRgM3geCwaAoigzDWGEIz6+n9Xrd6/XMH5YkSZKkzWbj8/n8fj9C6Hg8nk4nQRAQQsvl8nw+93o9Qkg8Hn+j02AwMAuPx2MWpoFJKBQKhUJ/BQaDAcTpyXtnGIaqqmZNCHkctgKqqhqG8S4nXdet6blc7nHYChiGoev6u5zMjdEkEok8DtsD9kaHna7Xq1UfDofHYXvA3uiwUzgcfs7J3uiwk/WfQoCNxx6wNzrsxLJsIpEIBAKZTGa1WnW73e12ex/bbrfdbne1WpkfE4kEy7L/HP78/pTL5drtNsuy5XK50+lMp9NoNCrLsnl39vt9vV6/b4FMfv7Zks1mCSGj0cjr9YqimEwmY7GYtVwwxvl83p4nhAAPCC8972RZxhh3Oh2O46rVaqlUsl/1+XxWjTGWZRk49iUnjLGiKIFAoNVqKYrS7/c/jRFCFEXBGAPHvnqmwxjXarXFYjEej++vCoJQLBZTqdSXZjpwpnOcn/iOQJ1gUCcY1AkGdYJBnWBQJxjUCcYfdHjCkw3g4aAAAAAASUVORK5CYII=",p={},i=e(`<h2 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> bash</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next vuepress-theme-hope@next
<span class="token function">yarn</span> upgrade

<span class="token function">mkdir</span> docs
<span class="token function">touch</span> docs/README.md

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> docs/.vuepress
<span class="token function">touch</span> docs/.vuepress/config.ts

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> .github/workflows
<span class="token function">touch</span> .github/workflows/ci.yml

<span class="token function">touch</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用主题<code>vuepress-theme-hope</code>:</p><ul><li><p>带复制功能</p></li><li><p>统计阅读时长</p></li><li><p>右侧标题展示(自动的，屏幕大就放在右边，屏幕小就融合进sidebar里)。</p><details><summary>具体设置</summary><p>注意：文档必须只有一级标题，其他都是该一级标题下的子标题才能正确显示。显示顶多到三级标题，四级标题就不显示了。</p><p>toc关闭：默认是true</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  toc<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以设置headerDepth</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  headerDepth<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>0关闭，1，只显示二级标题，2只显示三级标题，其他数字无效。</p></details></li></ul><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;vuepress:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vuepress:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs/.vuepress/*
!docs/.vuepress/config.ts
node_modules
yarn-error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Hello vuepress2-starter&quot;</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">&quot;/vuepress2-starter/&quot;</span><span class="token punctuation">,</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    repo<span class="token operator">:</span> <span class="token string">&quot;sword4869/vuepress2-starter&quot;</span><span class="token punctuation">,</span>
    docsDir<span class="token operator">:</span> <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&quot;README&quot;</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&quot;精美版本&quot;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              text<span class="token operator">:</span> <span class="token string">&quot;精美版本&quot;</span><span class="token punctuation">,</span>
              link<span class="token operator">:</span> <span class="token string">&quot;/精美版本/没有集成的ci.md&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>仓库链接 repo, 右上角就有去github仓库链接的图标. <img src="`+t+`" alt="picture 1"></p></li><li><p>页面编辑</p><p>docsRepo默认同repo, 所以不写</p><p>docsBranch默认是main, 所以不写</p><p>docsDir默认是&#39;&#39;, 所以要写&#39;docs&#39;</p></li></ul><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> github action</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy
<span class="token key atrule">on</span><span class="token punctuation">:</span> 
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> sword4869/vuepress<span class="token punctuation">-</span>deploy@main
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">TARGET_BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">BUILD_SCRIPT</span><span class="token punctuation">:</span> yarn install <span class="token important">&amp;&amp;</span> yarn vuepress<span class="token punctuation">:</span>build
          <span class="token key atrule">BUILD_DIR</span><span class="token punctuation">:</span> docs/.vuepress/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy
<span class="token key atrule">on</span><span class="token punctuation">:</span> 
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> jenkey2011/vuepress<span class="token punctuation">-</span>deploy@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">TARGET_BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">BUILD_SCRIPT</span><span class="token punctuation">:</span> yarn install <span class="token important">&amp;&amp;</span> yarn vuepress<span class="token punctuation">:</span>build
          <span class="token key atrule">BUILD_DIR</span><span class="token punctuation">:</span> docs/.vuepress/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[i];function l(o,u){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","没有集成的ci.html.vue"]]);export{d as default};
