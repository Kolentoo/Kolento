import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,d as c,f as i}from"./app-bd19c109.js";const l={},r=n("h1",{id:"路由",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#路由","aria-hidden":"true"},"#"),s(" 路由")],-1),u=n("blockquote",null,[n("p",null,"此文档对应的版本为 v4.x")],-1),d={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h4 id="通过npm下载安装" tabindex="-1"><a class="header-anchor" href="#通过npm下载安装" aria-hidden="true">#</a> 通过npm下载安装</h4><p>一般会在项目初始化的时候一起安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><h3 id="router-link" tabindex="-1"><a class="header-anchor" href="#router-link" aria-hidden="true">#</a> router-link</h3><p>通过这个标签，添加<code>to</code>属性和对应的值，可以直接进行路由跳转。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="router-view" tabindex="-1"><a class="header-anchor" href="#router-view" aria-hidden="true">#</a> router-view</h3><p><code>router-view</code>用于显示你的内容，通过路由更改路径后，内容会展示在这个标签下。</p><h3 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h3><p>以下内容应该单独写在一个控制路由的js文件中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 定义路由组件.</span>
<span class="token comment">// 也可以从其他文件导入</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;Home&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;About&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// 2. 定义一些路由</span>
<span class="token comment">// 每个路由都需要映射到一个组件。</span>
<span class="token comment">// 我们后面再讨论嵌套路由。</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 3. 创建路由实例并传递 \`routes\` 配置</span>
<span class="token comment">// 你可以在这里输入更多的配置，但我们在这里</span>
<span class="token comment">// 暂时保持简单</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// \`routes: routes\` 的缩写</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 5. 创建并挂载根实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//确保 _use_ 路由实例使</span>
<span class="token comment">//整个应用支持路由。</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 现在，应用已经启动了！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h2><p>使用<code>:id</code>的写法，来匹配不同id的路径<br> 现在像 <code>/users/111</code> 和 <code>/users/222</code> 这样的 URL 都会映射到同一个路由</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这些都会传递给 \`createRouter\`</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 动态字段以冒号开始</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在同一个路由中设置有多个 路径参数，它们会映射到<code> $route.params</code> 上的相应字段</p>`,17);function v(m,h){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,u,n("p",null,[n("a",d,[s("官方路由文档"),c(a)])]),k])}const y=e(l,[["render",v],["__file","five.html.vue"]]);export{y as default};
