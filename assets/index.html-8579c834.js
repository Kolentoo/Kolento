import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,a as n,b as a,d as t,e as c,f as s}from"./app-bd19c109.js";const o={},u=n("h1",{id:"markdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),a(" MarkDown")],-1),p=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),v={href:"http://markdown.p2hp.com/basic-syntax/",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),b=s(`<blockquote><p>Markdown 是一种轻量级标记语言，创始人是约翰・格鲁伯（John Gruber）。<br> 它允许人们 “使用易读易写的纯文本格式编写文档，然后转换成有效的 HTML 文档”。<br></p></blockquote><ul><li>本文记录一些常用的markdown语法用于查阅<br></li></ul><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><table><thead><tr><th>标题</th><th>写法</th></tr></thead><tbody><tr><td>一级标题</td><td># 这是一个标题</td></tr><tr><td>二级标题</td><td>## 这是一个标题</td></tr><tr><td>三级标题</td><td>### 这是一个标题</td></tr><tr><td>四级标题</td><td>#### 这是一个标题</td></tr><tr><td>五级标题</td><td>##### 这是一个标题</td></tr><tr><td>六级标题</td><td>###### 这是一个标题</td></tr></tbody></table><h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h2><ul><li>我们可以通过输入三个或更多的「减号 -」、「星号 *」、「下划线 -」的方式创建一条相当于 HTML 语法中 <code>&lt;hr/&gt;</code> 一样的分隔线。 当然也可以直接使用 <code>&lt;hr/&gt;</code>。</li><li>分割线的样式可以通过css来进行控制。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//三种分割线的写法
---
***
___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><p>无序列表可以通过使用<code>*</code> <code>-</code> <code>+</code>来定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//使用星号生成无序列表

* 项目1
* 项目2
* 项目3

//使用加号生成无序列表

+ 项目1
+ 项目2
+ 项目3

//使用减号生成无序列表

- 项目1
- 项目2
- 项目3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><ul><li>直接手写数字实现<br> 其他的写法基本不会使用。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//使用数字实现有序列表

1. 项目1
2. 项目2
3. 项目3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>使用<code>&gt;</code>可以定义引用样式<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; 我是练习时长两年半的练习生
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下：<br> 至于背景色等样式，同样是使用css去控制<br></p><blockquote><p>我是练习时长两年半的练习生</p></blockquote><h2 id="强调" tabindex="-1"><a class="header-anchor" href="#强调" aria-hidden="true">#</a> 强调</h2><p>使用<code>*</code>和<code>_</code>可以定义强调的样式<br> 使用这种定义后，显示文字会变成斜体<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 用法
*前端测试*
_周末快乐_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字体字号" tabindex="-1"><a class="header-anchor" href="#字体字号" aria-hidden="true">#</a> 字体字号</h2><p>可以使用 <code>&lt;font&gt;</code> 标签的 <code>face</code> 属性修改文字字体。<br> 在<code>style</code>标签里可以直接写样式控制<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;font face=&quot;HEI&quot;&gt;这里是黑体&lt;/font&gt;
&lt;font face=&quot;KAI&quot;&gt;这里是楷体&lt;/font&gt;
&lt;font face=&quot;Microsoft YaHei&quot;&gt;这里是微软雅黑&lt;/font&gt;
&lt;style&gt;p {font-size: 2rem;}&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前景色-背景色" tabindex="-1"><a class="header-anchor" href="#前景色-背景色" aria-hidden="true">#</a> 前景色 背景色</h2><p>可以使用<code> &lt;font&gt;</code> 标签的 <code>color</code> 属性修改文字颜色。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgb(200, 100, 100)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>使用 rgb 颜色值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#FF00BB<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>使用十六进制颜色值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行内代码" tabindex="-1"><a class="header-anchor" href="#行内代码" aria-hidden="true">#</a> 行内代码</h2><p>行内代码可以使用反引号进行定义: \` , 就是英文输入法下，键盘1左边的按键。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;p&gt;hello world&lt;p/&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下： <code>&lt;p&gt;hello world&lt;p/&gt;</code></p><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><p>1.在行首添加 4 个连续的空格，可将行内容定义为代码块。<br> 2.在代码块的开始和结束处连续使用3个反引号<br><strong>注意：方法1需要输入4个空格后换行开始写代码</strong><br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 实际写的时候引号要去除
&quot; \`\`\` &quot;
// 你的代码
&quot; \`\`\` &quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h2><p>通过中括弧和圆括弧的形式定义<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// [显示文字](文字的链接地址)
[百度](https://www.baidu.com/)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,38),g=n("br",null,null,-1),m={href:"https://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"},x=s(`<h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p>1.使用 <code>![替换文字](图片路径 &quot;标题(可选)&quot;)</code> 的形式定义图片<br> 2.使用 <code>img</code> 标签进行图片引入 <br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 两种写法
![](&#39;image1.png&#39;)
&lt;img src=&quot;images.png&quot; class=&quot;big&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码高亮" tabindex="-1"><a class="header-anchor" href="#代码高亮" aria-hidden="true">#</a> 代码高亮</h2><p>Markdown 的代码高亮是对代码块语法的扩展。即通过对代码块进行语法标注，对其在渲染输出时匹配不同的样式。<br></p><p>代码高亮模块是 Markdown 的一种扩展语法，通常通过第三方的高亮插件完成支持。常见的高亮插件实现如 Typora 使用的 「codemirror」，还有在网页中应用较多的 「highlightjs」等。大部分的 Markdown 编辑器或者编辑环境都已经集成好，只要按照其语法规范，在文档完成渲染后即可得到带有高亮样式的代码块了。</p><p><strong>使用方法</strong><br> 在代码开始的反引号后面添加语言的描述即可<br> 例如：<strong>\`\`\`html</strong></p><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><p>Markdown 表格由 「竖线 |」、「减号 -」、「冒号 :」三种符号组成。<br></p><ul><li><strong>竖线</strong> 用来定义列，每两个竖线之间为一个单元格元素；<br></li><li><strong>减号</strong> 用来定义分割线，也就是分割表头和数据体；<br></li><li><strong>冒号</strong> 配合减号使用，用于定义列数据的对齐属性。<br></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|学号|姓名|
|----|----|
|1|张三|
|2|李四|
|3|王五|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：<br></p><table><thead><tr><th>学号</th><th>姓名</th></tr></thead><tbody><tr><td>1</td><td>张三</td></tr><tr><td>2</td><td>李四</td></tr><tr><td>3</td><td>王五</td></tr></tbody></table><h4 id="修改表格的对齐方式" tabindex="-1"><a class="header-anchor" href="#修改表格的对齐方式" aria-hidden="true">#</a> 修改表格的对齐方式</h4><p>通过「冒号 :」配合「减号 -」使用<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|左对齐|居中对齐|右对齐|
|:--|:--:|--:|
|1|张三|17岁|
|2|李四|18岁|
|3|王五|19岁|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：<br></p><table><thead><tr><th style="text-align:left;">左对齐</th><th style="text-align:center;">居中对齐</th><th style="text-align:right;">右对齐</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:center;">张三</td><td style="text-align:right;">17岁</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:center;">李四</td><td style="text-align:right;">18岁</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:center;">王五</td><td style="text-align:right;">19岁</td></tr></tbody></table>`,18);function k(f,_){const e=i("ExternalLinkIcon");return l(),r("div",null,[u,p,n("p",null,[n("a",v,[a("markdown中文网"),t(e)]),h]),b,n("p",null,[a("效果如下："),g,n("a",m,[a("百度"),t(e)])]),x,c(" <CommentService /> ")])}const w=d(o,[["render",k],["__file","index.html.vue"]]);export{w as default};
