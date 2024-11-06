const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/Portforio_Next-js/' : '',
  trailingSlash: true,
};