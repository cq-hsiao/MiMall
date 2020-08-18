module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        proxy: {
            "/apis": {
                target: "http://www.tanwan.com",
                changeOrigin: true, // 跨域 修改域名原点
                pathRewrite: {
                    "/apis": "" // 替换target中的请求地址
                }
            }
        }
    }
};