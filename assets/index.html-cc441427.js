import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as p,a as n,b as s,d as e,f as t}from"./app-2976e40e.js";const r={},c=n("h1",{id:"vue3管理系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3管理系统","aria-hidden":"true"},"#"),s(" Vue3管理系统")],-1),d={href:"https://www.vue3js.cn/",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),v=n("strong",null,"vue3.3.4 + ant design vue 4.0.0",-1),k=n("br",null,null,-1),m=n("br",null,null,-1),h={href:"http://101.132.73.35",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>项目基于 <strong>vue3.3.4</strong> 进行开发</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pinia&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.1.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.2&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><h3 id="安装vue3" tabindex="-1"><a class="header-anchor" href="#安装vue3" aria-hidden="true">#</a> 安装VUE3</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm init vue@latest

✔ Project name: … &lt;your-project-name&gt;
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

&gt; cd &lt;your-project-name&gt;
&gt; npm install
&gt; npm run dev

打包命令
&gt; npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装ui框架" tabindex="-1"><a class="header-anchor" href="#安装ui框架" aria-hidden="true">#</a> 安装UI框架</h3><h4 id="ui框架的选择" tabindex="-1"><a class="header-anchor" href="#ui框架的选择" aria-hidden="true">#</a> UI框架的选择</h4><h5 id="ant-design-vue" tabindex="-1"><a class="header-anchor" href="#ant-design-vue" aria-hidden="true">#</a> Ant design Vue</h5>`,9),b={href:"https://www.antdv.com/docs/vue/introduce-cn",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),_=n("code",null,'"ant-design-vue": "^4.0.0"',-1),f=n("strong",null,"安装",-1),y=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install ant-design-vue@4.x --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>引入文件</strong> 在<code>main.js</code>中引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/reset.css&#39;</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装内置图标</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save @ant-design/icons-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后可以通过按需引入使用了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>star<span class="token operator">-</span>outlined <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>star<span class="token operator">-</span>filled <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>star<span class="token operator">-</span>two<span class="token operator">-</span>tone two<span class="token operator">-</span>tone<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;#eb2f96&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eement-plus" tabindex="-1"><a class="header-anchor" href="#eement-plus" aria-hidden="true">#</a> Eement Plus</h4>`,8),q=n("br",null,null,-1),j={href:"https://element-plus.org/zh-CN/guide/installation.html#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),E=n("strong",null,"当前版本：",-1),A=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="全局引入" tabindex="-1"><a class="header-anchor" href="#全局引入" aria-hidden="true">#</a> 全局引入</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass安装-可选" tabindex="-1"><a class="header-anchor" href="#sass安装-可选" aria-hidden="true">#</a> Sass安装（可选）</h3><p><strong>当前版本：</strong> &quot;sass&quot;: &quot;^1.63.6&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm isntall sass --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="目录结构整理" tabindex="-1"><a class="header-anchor" href="#目录结构整理" aria-hidden="true">#</a> 目录结构整理</h3><ol><li>删除 <strong>components</strong> 下的所有文件 <br></li><li>删除 <strong>view</strong> 下的所有文件 <br></li><li>删除 <strong>app.vue</strong> 中的内容 <br></li><li>注释掉 router/index.js 中原先引用的组件代码 <br></li><li>删除 <code>assets/base.css</code> 和 <code>assets/main.css</code> 中多余的样式代码 <br></li><li>在 <code>base.css</code> 中添加 css reset 样式</li></ol><h4 id="修改初始的-app-vue" tabindex="-1"><a class="header-anchor" href="#修改初始的-app-vue" aria-hidden="true">#</a> 修改初始的 App.vue</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kolento<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    kolento
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h2>`,11),N={href:"https://www.axios-http.cn/docs/intro",target:"_blank",rel:"noopener noreferrer"},S=n("br",null,null,-1),V=n("br",null,null,-1),P=t(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>我的版本：<strong>&quot;axios&quot;: &quot;^1.4.0&quot;</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm install axios --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="一般使用" tabindex="-1"><a class="header-anchor" href="#一般使用" aria-hidden="true">#</a> 一般使用</h3><h4 id="post使用" tabindex="-1"><a class="header-anchor" href="#post使用" aria-hidden="true">#</a> POST使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flintstone&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get使用" tabindex="-1"><a class="header-anchor" href="#get使用" aria-hidden="true">#</a> GET使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://bit.ly/2mTM3nY&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;stream&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;ada_lovelace.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图标icon" tabindex="-1"><a class="header-anchor" href="#图标icon" aria-hidden="true">#</a> 图标ICON</h2>`,9),T={href:"https://remixicon.cn/",target:"_blank",rel:"noopener noreferrer"},Y=n("br",null,null,-1),I=n("strong",null,"remix icon",-1),B=n("br",null,null,-1),C=t(`<blockquote><p>我的版本 &quot;remixicon&quot;: &quot;^3.4.0&quot; <br></p></blockquote><h3 id="安装与引入" tabindex="-1"><a class="header-anchor" href="#安装与引入" aria-hidden="true">#</a> 安装与引入</h3><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install remixicon --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h4><p>在 <strong>main.js</strong> 中引入即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;remixicon/fonts/remixicon.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function U(F,L){const a=o("ExternalLinkIcon");return l(),p("div",null,[c,n("p",null,[n("a",d,[s("Vue3文档项目集合"),e(a)]),u]),n("blockquote",null,[n("p",null,[s("项目基于 "),v,s(" 开发。"),k,s(" 从零开始创建一个基于Vue3.x的后台管理系统，文章记录开发过程和步骤。"),m,n("a",h,[s("Vue3后台系统模板"),e(a)])])]),g,n("p",null,[n("a",b,[s("Ant Design Vue官方文档"),e(a)]),x,s(" 这里我用的是 ant design vue 作为ui框架。当前版本："),_,f]),y,n("p",null,[s("Eement Plus 只能使用ts进行开发。"),q,n("a",j,[s("ElementUI plus"),e(a)]),w,E,s(' "element-plus": "^2.3.8"')]),A,n("p",null,[n("a",N,[s("axios官网"),e(a)]),S,s(" 用于接口调用"),V]),P,n("p",null,[n("a",T,[s("Remix Icon 官网"),e(a)]),Y,s(" 我这里使用的是 "),I,s(" 图标库，目前觉得挺好用的。"),B]),C])}const R=i(r,[["render",U],["__file","index.html.vue"]]);export{R as default};
