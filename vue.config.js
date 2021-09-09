module.exports = {
    indexPath: "index.html",
    publicPath: "/",

    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/assets/styles/theme/theme.scss";`
            }
        }
    },

    devServer: {
        port: "9900",
        open: true
    },
    lintOnSave: false
}