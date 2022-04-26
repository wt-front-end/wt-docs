import{o as n,c as s,b as a}from"./app.d5b2ad57.js";const t='{"title":"Github 工作流","description":"","frontmatter":{},"headers":[{"level":2,"title":"CI","slug":"ci"},{"level":3,"title":"Github Actions","slug":"github-actions"}],"relativePath":"front-end/github.md","lastUpdated":1650941644740}',p={},o=a('<h1 id="github-工作流"><a class="header-anchor" href="#github-工作流" aria-hidden="true">#</a> Github 工作流</h1><p>微软大大在这两年内动作很大，前后收购了 <a href="http://github.com/" target="_blank" rel="noopener noreferrer">Github</a> 和 <a href="http://npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a> 两大与技术人员生活息息相关的应用。并且在收购后做了很多调整，就如同大家<br> 可以很明显看到的 Github 在视觉设计上的改版，以及 新开辟了 Actions Packages 等新功能。来将之前散落在各个三方服务提供的功能统一收敛到官方实现当中。使得 Github Workflow + NPM Publish 的使用更加的丝滑。</p><h2 id="ci"><a class="header-anchor" href="#ci" aria-hidden="true">#</a> CI</h2><p>在 Github Actions 出来之前，比较流行的开源 CI 服务分别是 <a href="https://circleci.com/" target="_blank" rel="noopener noreferrer">CircleCI</a> 以及 <a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer">TravisCI</a>。之前也有一些项目使用过这些第三方服务，但给人的体验都不是很好例如构建缓慢。特别是对于国内用户来说访问它们的资源实在是太慢了, 并且它们自身的功能也存在一点缺失。</p><h3 id="github-actions"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> Github Actions</h3><p>接下来让我们看看应用要如何接入 <a href="https://docs.github.com/cn/free-pro-team@latest/actions" target="_blank" rel="noopener noreferrer">Github Actions</a> 以 <a href="https://github.com/zhangyuang/create-ssr-app" target="_blank" rel="noopener noreferrer">create-ssr-app</a> 为例</p><h4 id="创建配置文件"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h4><div class="language-bash"><pre><code>$ <span class="token function">mkdir</span> -p .github/workflows\n$ <span class="token function">touch</span> .github/workflows/CI.yaml\n</code></pre></div><h4 id="监听-git-命令"><a class="header-anchor" href="#监听-git-命令" aria-hidden="true">#</a> 监听 Git 命令</h4><p>在 push 代码 以及 合并 PR 的时候触发 CI 工作</p><div class="language-yml"><pre><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI\n\n<span class="token comment"># Controls when the action will run. Triggers the workflow on push or pull request</span>\n<span class="token comment"># events but only for the dev branch</span>\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dev<span class="token punctuation">,</span> master<span class="token punctuation">]</span>\n  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dev<span class="token punctuation">,</span> master<span class="token punctuation">]</span>\n\n</code></pre></div><h4 id="添加构建环境"><a class="header-anchor" href="#添加构建环境" aria-hidden="true">#</a> 添加构建环境</h4><p>这里推荐使用 build matix 来确保我们的应用可以在多个操作系统，多个语言版本中成功构建</p><div class="language-yml"><pre><code><span class="token key atrule">strategy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">matrix</span><span class="token punctuation">:</span>\n      <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> macos<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> windows<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>\n      <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">]</span>\n<span class="token key atrule">name</span><span class="token punctuation">:</span> install <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre></div><h4 id="定义job"><a class="header-anchor" href="#定义job" aria-hidden="true">#</a> 定义job</h4><p>我们的构建一般都包含多个任务，github 可以并行的执行这些任务来提升构建速度，并且可以指定任务之间的依赖关系</p><div class="language-yml"><pre><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">install</span><span class="token punctuation">:</span> <span class="token comment"># 定义安装依赖的任务</span>\n    <span class="token key atrule">if</span><span class="token punctuation">:</span> <span class="token string">&quot;!contains(github.event.head_commit.message, &#39;skip ci&#39;) &amp;&amp; !contains(github.event.head_commit.message, &#39;.md&#39;)&quot;</span> <span class="token comment"># 如果 commit 信息包含以下关键字则跳过该任务</span>\n    <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token comment"># 分别在三个操作系统的三种 Node.js 环境中运行任务</span>\n        <span class="token key atrule">matrix</span><span class="token punctuation">:</span>\n          <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> macos<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> windows<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>\n          <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">]</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> install <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restore <span class="token comment"># 恢复之前缓存的依赖</span>\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            node_modules\n            */*/node_modules</span>\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 依赖缓存的 key 当 package.json 内容变动时丢弃缓存 也可以使用 package-lock.json or yarn.lock</span>\n          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            ${{ runner.os }}-${{ matrix.node-version }}-nodemodules-</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies <span class="token comment"># 安装依赖</span>\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n          yarn</span>\n</code></pre></div><p>测试 和 lint 任务需要依赖 install 任务执行完毕后才可以执行。但这两个任务之间没有依赖关系，可以并行的运行</p><div class="language-yml"><pre><code><span class="token key atrule">test</span><span class="token punctuation">:</span>\n    <span class="token key atrule">needs</span><span class="token punctuation">:</span> install\n    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>\n        <span class="token key atrule">matrix</span><span class="token punctuation">:</span>\n          <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> macos<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> windows<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>\n          <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">]</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> test <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Load node_modules\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            node_modules\n            */*/node_modules</span>\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn test <span class="token comment"># 执行测试并生成覆盖率，这里一般都是接入 codecov 服务，需要配置 CODECOV_TOKEN 环境变量才能够上传</span>\n  <span class="token key atrule">lint</span><span class="token punctuation">:</span>\n    <span class="token key atrule">needs</span><span class="token punctuation">:</span> install\n    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>\n        <span class="token key atrule">matrix</span><span class="token punctuation">:</span>\n          <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> macos<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> windows<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>\n          <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">]</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> lint <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Load node_modules\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            node_modules\n            */*/node_modules</span>\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn lint\n</code></pre></div><h4 id="构建产物并上传"><a class="header-anchor" href="#构建产物并上传" aria-hidden="true">#</a> 构建产物并上传</h4><p>我们的应用的运行代码通常是用构建工具 如 tsc|babel|webpack 来生成的。但是我们提交到 github 的只有源代码。在这里我们在 CI 中进行构建任务后，需要将构建的产物上传。否则下一个发布任务将无法获得构建任务生成后的目录文件</p><div class="language-yml"><pre><code>  <span class="token key atrule">build</span><span class="token punctuation">:</span>\n    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>lint<span class="token punctuation">,</span> test<span class="token punctuation">]</span>\n    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>\n        <span class="token key atrule">matrix</span><span class="token punctuation">:</span>\n          <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> macos<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> windows<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>\n          <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">]</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> build <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Load node_modules\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            node_modules\n            */*/node_modules</span>\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn build <span class="token comment"># 执行构建</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload artifact <span class="token comment"># 上传构建产物，这里我们的源码目录是 src，而实际运行的代码是构建后的 bin 目录</span>\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">name</span><span class="token punctuation">:</span> build_output\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> bin <span class="token comment"># 上传 bin 目录</span>\n</code></pre></div><h4 id="发布到-npm"><a class="header-anchor" href="#发布到-npm" aria-hidden="true">#</a> 发布到 NPM</h4><p>这里不需要使用到 matrix, 我们只需要在一个环境发布即可。发布功能依赖一些环境变量，我们需要创建 NPM_TOKEN 环境变量</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> token create\n</code></pre></div><p>在 github 项目主页添加环境变量</p><p><img src="https://res.wx.qq.com/op_res/fIHeA-ZVJ229K_xpIR2QiyVyH3ZTwtKqmQzM_e6AVZHXAxRw2q1qlWHrmqJ20xhP" alt=""></p><div class="language-yml"><pre><code><span class="token key atrule">publish</span><span class="token punctuation">:</span>\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish\n  <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n  <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>build<span class="token punctuation">]</span>\n  <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup node\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">12</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download artifacts <span class="token comment"># 下载之前上传的构建产物</span>\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v2\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">name</span><span class="token punctuation">:</span> build_output\n        <span class="token key atrule">path</span><span class="token punctuation">:</span> bin\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span> <span class="token comment"># 只有 commit 信息包含版本号的提交才进行发布，否则不需要发布。这里我们可以使用 lerna publish/version 或者 npm version 来进行发布</span>\n        if git log <span class="token punctuation">-</span>1 <span class="token punctuation">-</span><span class="token punctuation">-</span>pretty=%B <span class="token punctuation">|</span> grep &quot;^<span class="token punctuation">[</span>0<span class="token punctuation">-</span><span class="token number">9</span><span class="token punctuation">]</span>\\+\\.<span class="token punctuation">[</span>0<span class="token punctuation">-</span><span class="token number">9</span><span class="token punctuation">]</span>\\+\\.<span class="token punctuation">[</span>0<span class="token punctuation">-</span><span class="token number">9</span><span class="token punctuation">]</span>\\+$&quot;;\n        then\n          echo &quot;//registry.npmjs.org/<span class="token punctuation">:</span>_authToken=$NPM_TOKEN&quot; <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> ~/.npmrc\n          npm publish\n        else\n          echo &quot;Not a release<span class="token punctuation">,</span> skipping publish&quot;\n        fi\n      <span class="token key atrule">env</span><span class="token punctuation">:</span>\n        <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token key atrule">NPM_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.NPM_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre></div><p>以上的步骤都做完后，当执行 <code>npm version patch</code> 命令来生成版本后推送到仓库便会自动帮你执行构建发布流程</p><p><img src="https://res.wx.qq.com/op_res/A2UVQnCR7s9y5uggqAWM2NK-V6PJOMpSKY7wA7aGKZ2GZUD123KVykc7yk8UGbmo" alt=""></p>',30);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};