var plugins = [{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"YOUR_GOOGLE_TAGMANAGER_ID","includeInDevelopment":false},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://blog.withdesign.ca"},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"GatsbyJS","short_name":"GatsbyJS","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"minimal-ui","icon":"src/images/icon.png","icons":[{"src":"icons/icon-48x48.png","sizes":"48x48","type":"image/png"},{"src":"icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"icons/icon-256x256.png","sizes":"256x256","type":"image/png"},{"src":"icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Montserrat:300,400,600,700","Martel:300,400,600,700"]},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
