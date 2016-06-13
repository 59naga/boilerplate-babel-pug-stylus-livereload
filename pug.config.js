const isDevelopment = process.env.NODE_ENV !== 'production'

// pug-cli esModule unsuported
module.exports = {
  pretty: isDevelopment,
  basedir: 'src'
}
