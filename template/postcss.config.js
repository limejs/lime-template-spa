const autoprefixer = require('autoprefixer')
console.log('加载postcss')

module.exports = {
    plugins: [
        require('autoprefixer')()
    ]
}
