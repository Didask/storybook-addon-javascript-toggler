import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { correctURLs, removeCSSComment } from '../utils/replacers'

const sandBoxedIFrameStyle = {
  position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
  height: '100%', width: '100%', border: 0
}

export const SandBoxedIFrame: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {

  const frameRef = React.useRef<HTMLIFrameElement>(null)

  const frameInnerHTML = btoa(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <script>window.onmessage = function(e){document.body.innerHTML = e.data}</script>
    </head>
    <body style="overflow: auto;">
      <center><h4>Wait until I generated the static preview.</center></h4>
    </body>
  </html>`)

  const baseURL = window.location.origin
  const onFrameLoaded = () => {
    const newContent = [
      Array.from(document.querySelectorAll('style, link')).map(el =>
        el.outerHTML.replace(...removeCSSComment).replace( ...correctURLs(baseURL) )
      ).join(''),
      `<style>body{${
        document.body.getAttribute('style')?.replace(';', '!important;')// 😏
      }}</style>`,
      renderToStaticMarkup(children).replace( ...correctURLs(baseURL) )
    ]
    // TODO: use postMessage to get more than content;
    // {
    //   newContent: [newContent],
    //   inlineStyles: {[selector]: [styles]}}
    // }
    if (frameRef.current)
      frameRef.current.contentWindow?.postMessage(newContent.join(''), '*')
  }

  return (
    <iframe ref={frameRef} title="Sandboxed IFrame"
      onLoad={onFrameLoaded} style={sandBoxedIFrameStyle as React.CSSProperties} src={`data:text/html;base64,${ frameInnerHTML }`} />
  )

}
