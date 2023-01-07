module.exports = {
    inputDir: './public/images/font-icons', //шлях до іконок svg формату
    outputDir: './public/fonts/icons',   //шлях куди ставляться згенеровані шрифти
    assetTypes: ['scss'],
    fontsUrl: '../public/fonts/icons',
    fontTypes: ['ttf', 'woff', 'woff2', 'svg'],  // формати іконок
    pathOptions: {
      scss: './scss/icons.scss',  //шлях куди ставляться згенеровані іконки
    },
  };