const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/Portforio_Next-js/' : '',
  trailingSlash: true,
};