module.exports = {
    presets: ['@babel/preset-react'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.jsx',
            '.json',
          ],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
            '@containers': './src/containers',
            '@utils': './src/utils',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@Route': './src/Route',
          },
        },
      ],
    ],
  };
  