import axios from 'axios'
import React, { Component } from 'react'

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
      },
      {
        path: '/about',
      },
      {
        path: '/services',
      },
      {
        path: '/blog',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          getProps: () => ({
            post,
          }),
        })),
      },
    ]
  },
  Html: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children } = this.props
      return (
        <Html lang="en-US">
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#e50000" />
            <link rel="icon" sizes="192x192" href="/img/touch/homescreen192.png" />
            <link rel="apple-touch-icon" href="/img/touch/homescreen192.png" />
            <meta name="msapplication-square310x310logo" content="/img/touch/homescreen192.png" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link rel="stylesheet" href="/app.css" />
            <title>Cody Reeves | Digital Design & Development</title>
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Cody Reeves Design & Development" />
          </Head>
          <Body>
            {children}
            <noscript>
              <h1>Please enable Javascript to view <i>codyreeves.com</i></h1>
              <p>Site designed by: Cody Reeves Digital Design & Development<br/><small>© 2017 by Cody Reeves. All rights reserved.</small></p>
            </noscript>
            {/* <script defer>
               if ('serviceWorker' in navigator) {
                 window.addEventListener('load', function() {
                   navigator.serviceWorker.register('service-worker.js').then(function(registration) {
                     // Registration was successful
                     console.log('ServiceWorker registration successful with scope: ', registration.scope);
                   }, function(err) {
                     // registration failed :(
                     console.log('ServiceWorker registration failed: ', err);
                   }).catch(function(err) {
                     console.log(err)
                   });
                 });
               } else {
                 console.log('service worker is not supported');
               }
             </script> */}
          </Body>
        </Html>
      )
    }
  },
}
