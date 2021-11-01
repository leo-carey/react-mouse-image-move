module.exports = function (api) {
    api.cache(true);
    
    const presets = [ '@babel/preset-env', '@babel/preset-react', '@babel/react' ];
    const plugins = [ 'macros', 'react' ];

    return {
      presets,
      plugins
    };
}