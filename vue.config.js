module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? "./" : "/",
    devServer:{
        port:5000,
        open: true
    }
}