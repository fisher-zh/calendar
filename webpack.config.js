const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: path.resolve(__dirname, 'dist')
}