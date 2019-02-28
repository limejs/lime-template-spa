
const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: 'usage'
    }
  ],
  '@vue/babel-preset-jsx'
]

module.exports = {
  // 因为babel.config.js配置是项目全局生效的(包括子包以及node_modules包)，这里防止它转译node_modules里模块
  // 如果转译 node_modules 里的模块，preset-env的useBuiltIns会自动根据目标文件注入 import或require。有些包代码有问题，就会导致注入错误，进而在 webpack打包时产生 无法给只读exports赋值的错误。
  // 目前发现 html-webpack-plugin 会爆出问题
  exclude: /node_modules/,
  presets,
  babelrcRoots: ['./frontend']
}
