import React from "react"
import PropTypes from "prop-types"

import splashscreenIphone from "./images/decisionHart-splashscreen-iphone8.jpg";
import splashscreenIphonePlus from "./images/decisionHart-splashscreen-iphone8plus.jpg";
import splashscreenIphoneSE from "./images/decisionHart-splashscreen-iphonese.jpg";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/*<!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->*/}
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href={splashscreenIphone} data-wm="appshell" />
        {/*<!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px) -->*/}
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" href={splashscreenIphonePlus} data-wm="appshell" />
        {/*<!-- iPhone 5 (640px x 1136px) -->*/}
        <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href={splashscreenIphoneSE} data-wm="appshell" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
