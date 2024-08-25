import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const c=JSON.parse('{"title":"Node.js","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/node.md","filePath":"front-end/node.md"}'),h={name:"front-end/node.md"},t=n(`<h1 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h1><p>本文档将会介绍我们在开发Node.js应用时会用到的一些工具</p><h2 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h2><p>管理Node.js版本，通过<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a>我们可以同时安装/切换不同的Node.js版本</p><h3 id="安装nvm" tabindex="-1">安装nvm <a class="header-anchor" href="#安装nvm" aria-label="Permalink to &quot;安装nvm&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><h3 id="添加环境变量" tabindex="-1">添加环境变量 <a class="header-anchor" href="#添加环境变量" aria-label="Permalink to &quot;添加环境变量&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">在尾部添加以下配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.nvm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This loads nvm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bash_completion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bash_completion&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This loads nvm bash_completion</span></span></code></pre></div><h3 id="使用命令" tabindex="-1">使用命令 <a class="header-anchor" href="#使用命令" aria-label="Permalink to &quot;使用命令&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-remote</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 列出所有支持的Node.js版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 列出本地已安装的Node.js版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11.5.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装指定的Node.js版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alias</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置默认使用的版本</span></span></code></pre></div><h2 id="nrm" tabindex="-1">nrm <a class="header-anchor" href="#nrm" aria-label="Permalink to &quot;nrm&quot;">​</a></h2><p>使用<a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a>可以让我们来切换不同的npm源而不用单独安装cnpm之类的库</p><h3 id="安装nrm" tabindex="-1">安装nrm <a class="header-anchor" href="#安装nrm" aria-label="Permalink to &quot;安装nrm&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nrm</span></span></code></pre></div><h3 id="使用命令-1" tabindex="-1">使用命令 <a class="header-anchor" href="#使用命令-1" aria-label="Permalink to &quot;使用命令&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 列出当前支持切换的源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> taobao</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 使用taobao的源作为默认的npm源</span></span></code></pre></div><h2 id="实用模块" tabindex="-1">实用模块 <a class="header-anchor" href="#实用模块" aria-label="Permalink to &quot;实用模块&quot;">​</a></h2><p>下面来介绍一些实用的Node.js模块</p><h3 id="dclone" tabindex="-1">dclone <a class="header-anchor" href="#dclone" aria-label="Permalink to &quot;dclone&quot;">​</a></h3><p><a href="https://github.com/zhangyuang/dclone" target="_blank" rel="noreferrer">dclone</a>用来下载某个特定的github仓库的文件夹，而不是下载整个项目，可以缩短你的下载时间</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dclone</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dclone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ykfe/egg-react-ssr/tree/dev/example/ssr-with-loadable</span></span></code></pre></div><h3 id="http-server" tabindex="-1">http-server <a class="header-anchor" href="#http-server" aria-label="Permalink to &quot;http-server&quot;">​</a></h3><p>使用<a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noreferrer">http-server</a>我们可以快速的创建一个本地http server服务，并且托管我们当前目录作为静态资源文件夹而不用特地去用Node.js框架来搭建一个静态资源服务</p><h4 id="如何使用http-server" tabindex="-1">如何使用http-server <a class="header-anchor" href="#如何使用http-server" aria-label="Permalink to &quot;如何使用http-server&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装http-server模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8080</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 监听8080端口，以当前目录作为静态资源目录</span></span></code></pre></div><h3 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h3><p>使用npx来让我们可以方便的调用项目的依赖模块</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jest</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 直接调用node_modules中的jest而不需要手动编写npm script</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-react-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # npx 将create-react-app下载到一个临时目录，使用以后再删除。使得你不需要全局安装</span></span></code></pre></div><h3 id="optimist" tabindex="-1">optimist <a class="header-anchor" href="#optimist" aria-label="Permalink to &quot;optimist&quot;">​</a></h3><p>用于解析命令行参数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> argv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;optimist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).argv;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (argv.rif </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> argv.xup </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7.138</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Buy more riffiwobbles&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Sell the xupptumblers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="yargs" tabindex="-1">yargs <a class="header-anchor" href="#yargs" aria-label="Permalink to &quot;yargs&quot;">​</a></h3><p>用于开发命令行工具</p><p><img src="https://raw.githubusercontent.com/yargs/yargs/master/screen.png" alt=""></p><h3 id="cloc" tabindex="-1">cloc <a class="header-anchor" href="#cloc" aria-label="Permalink to &quot;cloc&quot;">​</a></h3><p>使用cloc 快速统计某文件夹下代码的数据, 更多参考资料查看<a href="https://www.hi-linux.com/posts/4004.html" target="_blank" rel="noreferrer">代码统计利器 Cloc</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cloc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cloc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --exclude-dir=node_modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --exclude-ext=json,html</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 统计文件类型，排除node_modules,排除json，html文件</span></span></code></pre></div><p><img src="https://img.alicdn.com/tfs/TB1kYu2qND1gK0jSZFsXXbldVXa-1136-950.jpg" alt="cloc"></p><h3 id="promisify" tabindex="-1">promisify <a class="header-anchor" href="#promisify" aria-label="Permalink to &quot;promisify&quot;">​</a></h3><p><a href="http://nodejs.cn/api/util.html#util_util_promisify_original" target="_blank" rel="noreferrer">util.promisify</a>是Node.js的官方API，使用该API我们可以将callback形式的Node.js API包装为Promise的形式,只要符合最后一个参数是callback，并且callback第一个参数是错误处理的API都可以通过promisify来包装</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">promisify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;util&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child_process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> execWithPromise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> promisify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(exec)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> installServer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stdout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execWithPromise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`npm i -g http-server\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="mdv" tabindex="-1">mdv <a class="header-anchor" href="#mdv" aria-label="Permalink to &quot;mdv&quot;">​</a></h3><p><a href="https://www.npmjs.com/package/mdv" target="_blank" rel="noreferrer">mdv</a>是一个用来校验markdown语法的npm模块，此模块检测的语法错误类型包括七项：插入图片时是否添加Alt标签，超链接是否包含链接名称，页面内跳转时是否缺失锚点，页面内跳转的地址是否包含#，锚点是否包含#，锚点是否重复定义，json、xml语法是否解析失败。</p><h4 id="安装使用" tabindex="-1">安装使用 <a class="header-anchor" href="#安装使用" aria-label="Permalink to &quot;安装使用&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mdv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mdv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.md</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 检测md文件语法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mdv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.md</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 根据md生成html</span></span></code></pre></div><h4 id="错误类型" tabindex="-1">错误类型 <a class="header-anchor" href="#错误类型" aria-label="Permalink to &quot;错误类型&quot;">​</a></h4><ul><li>重复链接 - <code>duplicatedAnchors[]</code></li><li>锚点地址错误 - <code>anchorsWithHash[]</code></li><li>空的链接 - <code>anchorsWithEmptyText[]</code></li><li>img标签缺少alt属性 tag - <code>imagesWithMissingAlt[]</code></li><li><code>yaml</code>, <code>json</code>, <code>xml</code> or <code>abnf</code> 语法解析错误 - <code>nonParsingExamples[]</code></li></ul><h2 id="使用-npm-link-调试模块" tabindex="-1">使用 npm link 调试模块 <a class="header-anchor" href="#使用-npm-link-调试模块" aria-label="Permalink to &quot;使用 npm link 调试模块&quot;">​</a></h2><p>熟练的使用npm link可以帮助我们本地调试任何开源项目，当我们的一个项目还没有发布到npmjs.com想在本地测试时，或者当我们想修改React/Vue的源码想在本地测试效果时，我们都需要使用npm link来进行测试。npm link 类似于Linux中的软链接，简单理解可以理解为一个快捷方式。使用方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ cd vue // 进入本地clone下来的vue文件夹</span></span>
<span class="line"><span>$ npm link // 如果没有全局安装过vue 此时会创建全局node_modules下的一个软链接vue指向本地clone的vue入口文件</span></span>
<span class="line"><span>$ npm link vue // 在需要用调试vue模块的应用执行该命令会将当前应用的node_modules/vue指向全局node_modules/vue软链接</span></span></code></pre></div><p><img src="https://gw.alicdn.com/tfs/TB1iEl0XKH2gK0jSZFEXXcqMpXa-1450-876.jpg" alt=""><img src="https://gw.alicdn.com/tfs/TB1QBh0XQY2gK0jSZFgXXc5OFXa-1450-860.jpg" alt=""></p>`,51),l=[t];function e(p,k,r,d,o,g){return a(),i("div",null,l)}const y=s(h,[["render",e]]);export{c as __pageData,y as default};