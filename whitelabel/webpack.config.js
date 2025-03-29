const path = require('path');
const frappe = require('frappejs/webpack.config');

module.exports = {
    ...frappe,
    entry: {
        'whitelabel.bundle': [
            './whitelabel/public/js/whitelabel.js',
            './whitelabel/public/css/whitelabel.css'
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: ['file-loader']
            }
        ]
    }
};