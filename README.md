<article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-图片画廊web单页app" class="anchor" href="#图片画廊web单页app" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>图片画廊web单页APP</h1>
<blockquote>
<p><strong>功能</strong>：图片特效展示与动画切换。<br>
(<a href="http://www.imooc.com/learn/507">MaterLiu老师慕课上的react实战课程</a>)<br>
视频实在太久远，我尽量总结在课程中遇到的问题，希望可以有所帮助！</p>
</blockquote>
<h2><a id="user-content-项目说明" class="anchor" href="#项目说明" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>项目说明</h2>
<ul>
<li>构建工具 <a href="http://yeoman.io/">Yeoman</a></li>
<li>脚手架 <a href="https://github.com/react-webpack-generators/generator-react-webpack">generator-react-webpack</a></li>
<li>SCSS编译 <a href="https://github.com/postcss/autoprefixer">autoprefixer</a></li>
<li>技术栈 React + Webpack + SCSS</li>
</ul>
<h2><a id="user-content-踩坑总结" class="anchor" href="#踩坑总结" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>踩坑总结</h2>
<ul>
<li>新版generator-react-webpack生成的工程环境移除了grunt，运行命令<code>npm run start</code></li>
<li>以往webpack.config.js的配置内容在cfg/default.js中配置</li>
<li>生成dist目录内容 <code>npm run clean</code> <code>npm run copy</code> <code>npm run start</code></li>
<li>构建出的工作环境webpack默认版本为1.x，不包含json-loader.<br>
解析.json文件一种解决办法是安装json-loader，并在default.js中配置。<a href="https://github.com/webpack-contrib/json-loader">json-loader</a><br>
另一种解决办法是全局安装webpack2.x及以上版本，自带有json-loader <code>npm install -g webpack@2.x</code><br>
<strong>注：require时都必须加上json!前缀</strong></li>
<li>需自行安装sass-loader，安装参考<a href="https://github.com/webpack-contrib/sass-loader">sass-loader</a><br>
(<strong>注：不要安装最新版本的sass</strong>，会出现版本依赖错误，可以参考安装node-sass4.x和sass-loader3.x版本，我尝试过不会出现错误)</li>
<li>react需更新组件时是通过DOM与virtual DOM的对比来实现，如果有变化就重新渲染，因此在每次forEach循环添加节点都应给组件添加一个key，以优化对比</li>
<li>图标字体可以在<a href="http://www.iconfont.cn/">阿里开源图标库</a>下载代码，在文件中有对应图标的Unicode码</li>
<li>用styleObj对象为组件添加样式时注意一定要使用驼峰命名规则</li>
<li>关于inverse和center使用闭包函数的原因，这两个函数都调用到了图片数组下标index，跟随对象的初始化保存，避免被JavaScript的垃圾回收机制回收。</li>
</ul>
</article>
