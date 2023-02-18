import{_ as n,V as s,W as a,X as e}from"./framework-d15c4005.js";const t={},i=e(`<h2 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> bash</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next vuepress-theme-hope@next
<span class="token function">yarn</span> upgrade

<span class="token function">mkdir</span> docs
<span class="token function">touch</span> docs/README.md

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> .github/workflows
<span class="token function">touch</span> .github/workflows/ci.yml

<span class="token function">touch</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用主题<code>vuepress-theme-hope</code>:</p><ul><li>带复制功能</li><li>统计阅读时长</li><li>右侧标题展示</li></ul><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;vuepress:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vuepress:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs/.vuepress/*
!docs/.vuepress/config.ts
node_modules
yarn-error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> github action</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy
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
          <span class="token key atrule">BUILD_SCRIPT</span><span class="token punctuation">:</span> python3 translator<span class="token punctuation">-</span>v2.py $<span class="token punctuation">{</span><span class="token punctuation">{</span>github.repository<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token important">&amp;&amp;</span> yarn install <span class="token important">&amp;&amp;</span> yarn vuepress<span class="token punctuation">:</span>build
          <span class="token key atrule">BUILD_DIR</span><span class="token punctuation">:</span> docs/.vuepress/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","集成的ci.html.vue"]]);export{r as default};
