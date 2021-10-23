# react-from-0
### 安装npm和node
### 创建package
#### 方法1：
在文件夹内创建一个package.json文件。文件内输入,然后保存
```
{
  "name": "XXX",
  "version": "1.0.0",
  "description": "XXXXX",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lixiang",
  "license": "ISC",
}
```
#### 方法2：
输入
```
npm init
```
后按提示进行
### 安装webpack
```
npm install --save-dev webpack
# 或指定版本
npm install --save-dev webpack@<version>
```
--save-dev的作用是将webpack加入到package.json的devDependence中。
在4或更新版本的webpack中还需要安装webpack-cli
```
npm install --save-dev webpack-cli
```
如果没有手动安装webpack-cli,在使用命令打包的时候也会提示你没有安装webpack-cli,并引导你安装。
>想要运行本地安装的 webpack，你可以通过 node_modules/.bin/webpack 来访问它的二进制版本。另外，如果你使用的是 npm v5.2.0 或更高版本，则可以运行 npx webpack 来执行。

可以将webpack --config webpack.dev.config.js写入到package.json的"scripts"中，这样就可以简单的使用npm run来调用。

> resolve需要设置，否则如果在import的时候没有带后缀会提示找不到module.

```js
resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
```
### 安装babel
> babel@7+改动很大。babel-XX都改为了@babel/XXX
> 需要babel-loader@8+才依赖@babel/core,低版本依赖的是babel-core
> .babelrc中不再需要指定多个语言，只需要
```
presets:["@babel/preset-env"]
```
### 安装react
>npm install react
>npm install react-dom
>两个都要装，不然在打包时会报错

如果使用ts的话，还需要
>npm i --save-dev @types/react
>npm i --save-dev @types/react-dom

否则会报错
### eslint
>npm install eslint -D后，eslint会被添加到devDependencies中。
>npx eslint --init可在项目中添加.eslintrc.js文件。

为了可以在import的时候省略.tsx和.js等后缀，需要在eslint中添加配置
```javascript
rules: {
  'import/extensions': [
    ERROR,
    'ignorePackages',
    {
      ts: 'never',
      tsx: 'never',
      json: 'never',
      js: 'never',
    },
  ],
}
```
>一些插件：
>eslint-plugin-promise ：让你把 Promise 语法写成最佳实践。
>eslint-plugin-unicorn ：提供了更多有用的配置项，比如我会用来规范关于文件命名的方式。
### React-dev-server
> 新版指令不再使用react-dev-server,改为使用react dev
安装后需要在webpack中配置
```JavaScript
devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
  },
```
但是配置后还是不能进行路由跳转，还需要配置historyApiFallback,配置host可以让外部访问
```JavaScript
devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
}
```
