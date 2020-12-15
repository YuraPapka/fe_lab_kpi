console.log(process.env, process.env.PORT || process.env.port);

module.exports = {
  port: process.env.PORT || process.env.port,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product/list',
        permanent: true,
      },
    ]
  },
}
