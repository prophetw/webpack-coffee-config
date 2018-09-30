##### https://webpack.docschina.org/guides/asset-management/

* 上述所有内容中最出色之处是，以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 /assets 目录，而是将资源与代码组合在一起。例如，类似这样的结构会非常有用：
+ |– /components
+ |  |– /my-component
+ |  |  |– index.jsx
+ |  |  |– index.css
+ |  |  |– icon.svg
+ |  |  |– img.png

* 这种配置方式会使你的代码更具备可移植性，因为现有的统一放置的方式会造成所有资源紧密耦合在一起。假如你想在另一个项目中使用 /my-component，只需将其复制或移动到 /components 目录下。只要你已经安装了任何扩展依赖(external dependencies)，并且你已经在配置中定义过相同的 loader，那么项目应该能够良好运行。
  
*  但是，假如你无法使用新的开发方式，只能被固定于旧有开发方式，或者你有一些在多个组件（视图、模板、模块等）之间共享的资源。你仍然可以将这些资源存储在公共目录(base directory)中，甚至配合使用 alias 来使它们更方便 import 导入。

## 0.1.2
##### https://webpack.docschina.org/guides/output-management/


## 0.1.3
##### https://webpack.docschina.org/guides/development
* webpack "devtool": "source-map" 
* 配置项 https://webpack.docschina.org/configuration/devtool
### 关于开发两种模式
#### 1.单独服务器 
* npm start 
* 原理 webpack-dev-server 带有许多可配置的选项。转到相关文档以了解更多。
* 现在，服务器正在运行，你可能需要尝试模块热替换(Hot Module Replacement)！
#### 2.直接基于 dist/index.html
* npm watch  监听文件变化，重新生成 dist 文件

## 0.1.4 
### 模块热替换
##### https://webpack.docschina.org/guides/hot-module-replacement
* coffeescript import export 写法



