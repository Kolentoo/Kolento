import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as s,d as p,f as r}from"./app-2976e40e.js";const i={},l=n("h1",{id:"mock数据模拟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mock数据模拟","aria-hidden":"true"},"#"),s(" Mock数据模拟")],-1),d={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),k=n("br",null,null,-1),m=n("br",null,null,-1),v=r(`<h2 id="开始-安装" tabindex="-1"><a class="header-anchor" href="#开始-安装" aria-hidden="true">#</a> 开始&amp;安装</h2><p>我这里安装的版本 <code>&quot;mockjs&quot;: &quot;^1.1.0&quot;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm install mockjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><p>在项目目录的 <strong>src</strong> 目录下新建 <strong>mock</strong> 文件夹，并建<strong>index.js</strong>文件，进行数据模拟。</p><h3 id="编写接口" tabindex="-1"><a class="header-anchor" href="#编写接口" aria-hidden="true">#</a> 编写接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入mock</span>
<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 只要拦截到这个地址就会触发 /api/login</span>
<span class="token comment">// loginData作为返回的数据</span>
<span class="token keyword">let</span> loginData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&#39;Kolento&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authBox</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;article&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&quot;/api/login&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span>loginData
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Mock

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入mock" tabindex="-1"><a class="header-anchor" href="#引入mock" aria-hidden="true">#</a> 引入mock</h3><p>在<strong>main.js</strong>文件中引入mock，这样这个js文件就会执行，当我们在调用接口，匹配到相应地址后会返回数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;./mock&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function h(b,g){const a=t("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",d,[s("mockjs官网"),p(a)]),u,s(" mock.js : 是一款模拟数据生成器，可以生成随机数据"),k,s(" 前端可以通过mock.js 参考接口文档自己先模拟数据"),m]),v])}const x=e(i,[["render",h],["__file","three.html.vue"]]);export{x as default};
