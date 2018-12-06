const {DevUtil} = require('./utils');
const {resolve} = require('path');



exports.globalConfig ={
    host: DevUtil.getLocalHost() ,
    publicPath: DevUtil.getPublicPath() ,
    port: 8888,
    outputPath: resolve('dist')
};


