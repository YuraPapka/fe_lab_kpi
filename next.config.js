module.exports = {
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
