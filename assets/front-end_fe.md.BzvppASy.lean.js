import{_ as i,c as a,a6 as n,o as h}from"./chunks/framework.CruGiiTl.js";const g=JSON.parse('{"title":"前端开发","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/fe.md","filePath":"front-end/fe.md"}'),t={name:"front-end/fe.md"};function l(k,s,p,e,r,d){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="前端开发" tabindex="-1">前端开发 <a class="header-anchor" href="#前端开发" aria-label="Permalink to &quot;前端开发&quot;">​</a></h1><p>本章节介绍前端开发中常见的问题以及解决方案，欢迎补充</p><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2><p>本章简单介绍一下什么是跨域以及如何解决跨域</p><h3 id="什么是跨域" tabindex="-1">什么是跨域 <a class="header-anchor" href="#什么是跨域" aria-label="Permalink to &quot;什么是跨域&quot;">​</a></h3><p>跨域基本是每一个前端工程师开发中都会遇到的问题，跨域的基本概念和原因这里简单概括下，协议域名端口三者任一不一致都会导致跨域。需要清楚的是跨域限制是浏览器给我们的安全策略的限制，在服务端是没有该限制的。</p><h3 id="如何解决跨域" tabindex="-1">如何解决跨域 <a class="header-anchor" href="#如何解决跨域" aria-label="Permalink to &quot;如何解决跨域&quot;">​</a></h3><p>大部分网络上的答案都是让后端协助来修改设置<code>Access-Control-Allow-Origin</code>,这里我们不介绍这种方式，只介绍在几乎没有后端帮助的情况下如何解决跨域</p><h4 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h4><p>使用JSONP是前端解决跨域最快的方式，但是这种方式仍然需要后端小小支持下，这里我们给一个最简单的JSONP实现方式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`https://api.test.com?jsoncallback=jsonpCb\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementsByTagName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;body&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jsonpCb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`接口数据\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="chrome插件" tabindex="-1">Chrome插件 <a class="header-anchor" href="#chrome插件" aria-label="Permalink to &quot;Chrome插件&quot;">​</a></h4><p><a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=zh-CN" target="_blank" rel="noreferrer">Access-Control-Allow-Origin</a> 本质是给接口的response header中添加<code>Access-Control-Allow-Origin: *</code>, 底层原理是通过Chrome提供的Api来实现</p><h4 id="node代理" tabindex="-1">Node代理 <a class="header-anchor" href="#node代理" aria-label="Permalink to &quot;Node代理&quot;">​</a></h4><p>大部分前端框架提供给你的proxy功能本质上都是使用了<code>webpack-dev-server</code>的proxy功能，而<code>webpack-dev-server</code>的proxy功能本质上是本地启动了一个Node服务来实现请求的转发 我们也可以自己用<code>egg|koa</code>框架来创建一个简单的本地Node服务</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// koa.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Koa</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;koa&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> router</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;koa-router&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Koa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">router.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/getInfo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://api.test.com/getInfo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ctx.body </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(router.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">routes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(router.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allowedMethods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fe.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://api.test.com/getInfo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 替换为 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`http://localhost:3000/api/getInfo\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="纯前端下载excel" tabindex="-1">纯前端下载excel <a class="header-anchor" href="#纯前端下载excel" aria-label="Permalink to &quot;纯前端下载excel&quot;">​</a></h2><p>本节介绍在没有后端服务的情况下如何将数据下载为excel 使用<a href="https://github.com/SheetJS/sheetjs" target="_blank" rel="noreferrer">sheetJs</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ npm install xlxs </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;script lang=&quot;javascript&quot; src=&quot;dist/xlsx.full.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;file.xlsx&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此时数据为一般接口返回的数据格式，不符合sheetJs要求，需要转换为二维数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataArr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dataArr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;a数据&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;b数据&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;c数据&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第一行表头名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item[i])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dataArr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wsName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Sheet1&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Excel第一个sheet的名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> XLSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.utils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">book_new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ws</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> XLSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.utils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aoa_to_sheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataArr)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XLSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.utils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">book_append_sheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wb, ws, wsName) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将数据添加到工作薄</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XLSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wb, filename) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导出Excel</span></span></code></pre></div><h2 id="代码风格" tabindex="-1">代码风格 <a class="header-anchor" href="#代码风格" aria-label="Permalink to &quot;代码风格&quot;">​</a></h2><p>代码风格一直是程序员届争论不休的话题，这里根据本人多年开发经验以及数百个项目的开发体验，强烈建议抛弃eslint,prettier，不要让你的项目充斥着代码风格配置文件, 这里建议大家不要盲目模仿著名开源项目，这里以<a href="https://github.com/facebook/react" target="_blank" rel="noreferrer">React</a>为例,根目录下的独立文件有十几个与代码风格有关的文件就高达5个，实在是让人看了就头大 <img src="https://img.alicdn.com/tfs/TB1uw5WmKH2gK0jSZJnXXaT1FXa-590-1500.jpg" style="height:256px;"></p><h3 id="standardjs" tabindex="-1">Standardjs <a class="header-anchor" href="#standardjs" aria-label="Permalink to &quot;Standardjs&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> standard@13.0.0</span></span></code></pre></div><p>这里我们着重介绍一下<a href="https://standardjs.com/readme-zhcn.html" target="_blank" rel="noreferrer">Standardjs@13.0.0</a>这个代码规范工具，为什么我们使用它而不是eslint呢，这里我引用standardjs官方的介绍</p><ul><li>无须配置。 史上最便捷的统一代码风格的方式，轻松拥有。</li><li>自动代码格式化。 只需运行 standard --fix 从此和脏乱差的代码说再见。</li><li>提前发现风格及程序问题。 减少代码审查过程中反反复复的修改过程，节约时间。</li></ul><p>如果我不同意某条规则，可以改吗？</p><p><span style="color:red;">不行。制定这套 standard 规范的目的就是让大家都不必再花时间浪费在无谓的代码风格之争上面了。关于缩进该用制表符还是空格这个问题已经争论了很久了，永远也没有答案。争论这个都可以把需求提前写完了。遵循 standard 规范，你就不用再犹豫了，毕竟不管怎样争论总归会选择一种风格的。希望大家也能在个人语义和普适价值上做一个权衡。</span></p><p>如果你非要自己去配置成百上千项的 ESLint 规则，那你可以直接使用 eslint-config-standard 来将个人配置包装在上层。</p><p>小贴士：<span style="color:red;">选择 standard 然后保持吧。把时间留下来解决其他有意义的问题！(^____^)/</span></p><h3 id="使用版本" tabindex="-1">使用版本 <a class="header-anchor" href="#使用版本" aria-label="Permalink to &quot;使用版本&quot;">​</a></h3><p>这里建议使用standardjs@13.0.0而不是@14.0.0, 其中14.0.0中新增的几个React的开发规则个人觉得十分不合理，影响开发体验。Ref <a href="https://github.com/standard/standard/issues/1447" target="_blank" rel="noreferrer">#1447</a></p><h4 id="更好的使用standardjs" tabindex="-1">更好的使用Standardjs <a class="header-anchor" href="#更好的使用standardjs" aria-label="Permalink to &quot;更好的使用Standardjs&quot;">​</a></h4><p>在VS Code安装standardjs插件后，我们还需要进行一些配置来启用standardjs，首先要保证你在全局或者当前目录安装了standard模块，然后 <code>cmd + ,</code> 打开配置，添加 <code>&quot;standard.autoFixOnSave&quot;: true, &quot;standard.enable&quot;: true,</code> 来让VS Code启用standard，此时在你不符合规范的地方会给你高亮提示，并且开启保存自动格式化功能，在你保存文件时自动格式化你的文件。</p>`,33)]))}const o=i(t,[["render",l]]);export{g as __pageData,o as default};
