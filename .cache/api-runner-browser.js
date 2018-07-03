var plugins = [{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-nprogress/gatsby-browser'),
      options: {"plugins":[],"color":"tomato","showSpinner":true},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-canonical-urls/gatsby-browser'),
      options: {"plugins":[],"siteUrl":"https://blog.withdesign.ca"},
    },{
      plugin: require('/Users/codyreeves/Documents/Personal/projects/withdesign-blog/node_modules/gatsby-plugin-offline/gatsby-browser'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks
// basically like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-browser.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-browser.js"),
//     options: { ... },
//   },
// ]

export function apiRunner(api, args, defaultReturn) {
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
  } else if (defaultReturn) {
    return [defaultReturn]
  } else {
    return []
  }
}

export function apiRunnerAsync(api, args, defaultReturn) {
  return plugins.reduce(
    (previous, next) =>
      next.plugin[api]
        ? previous.then(() => next.plugin[api](args, next.options))
        : previous,
    Promise.resolve()
  )
}