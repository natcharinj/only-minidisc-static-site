module.exports = {
  siteMetadata: {
    siteTitle: 'Only MiniDisc',
    defaultTitle: 'Only MiniDisc',
    siteTitleShort: 'Only MiniDisc',
    siteDescription: 'Write your mini disc online',
    siteUrl: 'https://onlyminidisc.com',
    siteAuthor: 'Only MiniDisc',
    siteImage: '/banner.png',
    siteLanguage: 'en',
    themeColor: '#8257E6',
    basePath: '/',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        repositoryUrl: 'https://github.com/rocketseat/gatsby-themes',
        baseDir: 'examples/gatsby-theme-docs',
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
  ],
};
