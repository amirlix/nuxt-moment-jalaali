module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    defaultTimezone: 'Asia/Tehran'
  }
}
