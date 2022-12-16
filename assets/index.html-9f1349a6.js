import{_ as n,V as s,W as a,X as e}from"./framework-d15c4005.js";const t={},i=e(`<h2 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> bash</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next
<span class="token function">yarn</span> upgrade
<span class="token function">mkdir</span> docs
<span class="token function">touch</span> docs/README.md

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> docs/.vuepress
<span class="token function">touch</span> docs/.vuepress/config.ts

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> .github/workflows
<span class="token function">touch</span> .github/workflows/ci.yml

<span class="token function">touch</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yarn.lock的问题: 有时候<code>yarn upgrade</code>后还是<code>vuepress-vite@2.0.0-beta.50</code>, 只能手动修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vuepress-vite@2.0.0-beta.59:
  version &quot;2.0.0-beta.59&quot;
  resolved &quot;https://registry.npmmirror.com/vuepress-vite/-/vuepress-vite-2.0.0-beta.59.tgz#8f25504cc0679d816b762c35ffbbb4079b5fffdf&quot;
  integrity sha512-DyUsTkixrvUQjfxUdRv/uNotrQeOxVQisk6Szo0ukvZQGpet9/aMqAmYFwJy8Xd1od30f+h4M9KNhBM8N9sm1g==
  dependencies:
    &quot;@vuepress/bundler-vite&quot; &quot;2.0.0-beta.59&quot;
    &quot;@vuepress/cli&quot; &quot;2.0.0-beta.59&quot;
    &quot;@vuepress/core&quot; &quot;2.0.0-beta.59&quot;
    &quot;@vuepress/theme-default&quot; &quot;2.0.0-beta.59&quot;

vuepress@^2.0.0-beta.59:
  version &quot;2.0.0-beta.59&quot;
  resolved &quot;https://registry.npmmirror.com/vuepress/-/vuepress-2.0.0-beta.59.tgz#ed1b8a61a9ec0c6de198ea75168c26f428b51912&quot;
  integrity sha512-ggFuq1jKVwF1f0PK5SR3mAi34PHDLvNDiNbC1Qw5XZR7qs9ryutsbFUkfpa9R4rnGnw0uoohiyE4itANWVcvtw==
  dependencies:
    vuepress-vite &quot;2.0.0-beta.59&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;vuepress:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vuepress:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs/.vuepress/*
!docs/.vuepress/config.ts
node_modules
yarn-error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Hello vuepress2-starter&quot;</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">&quot;/vuepress2-starter/&quot;</span><span class="token punctuation">,</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&quot;README&quot;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&quot;简单版本&quot;</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    text<span class="token operator">:</span> <span class="token string">&quot;简单版本&quot;</span><span class="token punctuation">,</span>
                    link<span class="token operator">:</span> <span class="token string">&quot;/简单版本&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> github action</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[i];function o(l,c){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","index.html.vue"]]);export{r as default};
