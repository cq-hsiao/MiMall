module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        proxy: {
            '/api':{
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
};