const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: 'tsconfig.paths.json'
      }
    }
  ],
  babel: {
    presets: [
      [
        '@babel/perset-react',
        { runtime: 'automatic', importSource: '@emotion/react' }
      ]
    ],
    plugins: ['@emotion/babel-plugin']
  }
}