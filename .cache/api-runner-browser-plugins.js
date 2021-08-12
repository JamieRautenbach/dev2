module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-anchor-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"http://www.subdomain.digibru.com/graphql","excludeFieldNames":["blocksJSON","saveContent"],"presets":[{"presetName":"DEVELOP","options":{"type":{"__all":{"limit":null},"RootQuery":"{ excludeFieldNames: ['viewer', 'node', 'schemaMd5'], },"},"verbose":true}}],"verbose":true},
    },{
      plugin: require('../node_modules/@gatsbywpthemes/gatsby-theme-blog-data/gatsby-browser.js'),
      options: {"plugins":[],"animation":true,"layoutWidth":{"page":"lg","post":"lg","archive":"lg"},"wordPressUrl":"http://www.subdomain.digibru.com/"},
    },{
      plugin: require('../node_modules/@gatsbywpthemes/gatsby-plugin-wordpress-lightbox/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/@gatsbywpthemes/gatsby-plugin-gwpt-packages/gatsby-browser.js'),
      options: {"plugins":[],"wordPressUrl":"http://www.subdomain.digibru.com/","pathPrefix":"","paginationPrefix":"page","addWordPressComments":true,"addWordPressSearch":false,"gaTrackingId":null,"gaOptions":{},"googleTagManagerId":null,"googleTagManagerOptions":{},"addSiteMap":false,"siteMapOptions":{},"widgetAreas":{"slideMenuWidgets":["Categories","RecentPosts","Tags","SocialFollow"],"sidebarWidgets":["Categories","RecentPosts","Tags","SocialFollow"]},"archiveSidebarPosition":"right","pageCreateDebugOutput":false,"logo":null,"darkModeLogo":null,"socialFollowLinks":[],"overrideWPColors":false,"developLimit":null,"addColorModes":true,"webfontsOptions":{},"animation":true,"layoutWidth":{"page":"lg","post":"lg","archive":"lg"},"fonts":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":0.1,"once":true,"rootMargin":"0% 50%","animateClassName":"sal-animate","selector":"[data-sal]"},
    },{
      plugin: require('../node_modules/@gatsbywpthemes/gatsby-theme-base-dev/gatsby-browser.js'),
      options: {"plugins":[],"layoutWidth":{"page":"lg","post":"lg","archive":"lg"},"wordPressUrl":"http://www.subdomain.digibru.com/"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
