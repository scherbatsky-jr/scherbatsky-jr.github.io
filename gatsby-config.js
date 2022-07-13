module.exports = {
  siteMetadata: {
    title: `scherbatsky`,
    siteUrl: `https://scherbatsky-jr.github.io`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};