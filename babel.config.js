const presets = [
    '@babel/react',
    [
        '@babel/preset-env',
        // {
        //     targets: {
        //         ie: '10'
        //     },
        //     useBuiltIns: 'usage',
        //     modules: false
        // }
    ]
];

const plugins = [
    //styled-components 插件
    'styled-components',
    //动态引入
    '@babel/syntax-dynamic-import',
    // 类属性
    [
        '@babel/proposal-class-properties',
        {
            loose: true
        }
    ],
    // 装饰器
    [
        '@babel/proposal-decorators',
        {
            legacy: true
        }
    ],
    // export default form '' 语法
    '@babel/proposal-export-default-from',
    // 参数异常语法
    '@babel/proposal-throw-expressions',
    // export * as name from '' 语法
    '@babel/proposal-export-namespace-from',
    // const a = obj ?? 'link'
    // var a = obj !== null && obj !== void 0 ？ obj:'link'
    '@babel/proposal-nullish-coalescing-operator',
    // polyfill
    [
        '@babel/plugin-transform-runtime',
        {
            corejs: 2
        }
    ]
];

module.exports = {
    presets,
    plugins
};
