const path = require('path');
let VueLoaderPlugin = require('vue-loader/lib/plugin.js'); // webpack4.X版本需要这么写

module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {//用来配置第三方loader模块的
    //rules中配置: 什么后缀的文件使用什么加载器
    rules: [
      //文件的匹配规则
      //loader的加载顺序是从右往左
      { //处理css文件的loader
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      }, 
      { //处理图片文件的loader
        test: /\.(jpg|png|gif|bmp|jpeg)$/,  
        loader: 'url-loader',
        options: {
          limit:3000,
          name: '[name]-[hash].[ext]'
        }
      }, 
      { //处理字体的loader
        test: /\.(ttf|eot|svg|woff|woff2)$/,
	      use: ['url-loader']
      },
      {
        test: /\.js$/,
 	      use: ['babel-loader'],
        //排除node_modules文件夹中所有的js文件不进行转化处理,否则打包很慢
        exclude: /node_modules/	 
      },
      { test: /\.vue$/, use:['vue-loader'] },
      //处理.scss文件的loader
      {test: /\.scss$/,  use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  resolve:{
    //修正导入vue路径时候的问题
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  },
  plugins:[
    new VueLoaderPlugin()  //实例vue-loader的实例对象，为了加载.vue组件
  ]
};