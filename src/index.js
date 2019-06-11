import React from 'react';

import {
  renderToStaticMarkup
} from 'react-dom/server';

const isJSEnabled = true

export const withJavascriptToggler = storyFn => {
  if( isJSEnabled ) return storyFn()

  const headStyles = ''

  const staticallyRenderedStory = renderToStaticMarkup(storyFn())

  const staticPreviewSource = `<!DOCTYPE html><html><head><meta charset="utf-8">${headStyles}</head><body>${staticallyRenderedStory}</body></html>`

  return(
    <iframe
      style = {{
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        height: '100%', width: '100%',
        border: 0
      }}
      src = {
        `data:text/html,${staticPreviewSource}`
      } />
  )
}
