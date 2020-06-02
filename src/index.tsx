import * as React from 'react'
import addons, { makeDecorator } from '@storybook/addons'
// import { STORY_RENDERED } from '@storybook/core-events';

import { PARAM_KEY, ADDON_ID } from './constants'
import { useState } from 'react'
import { SandBoxedIFrame } from './components/SandBoxedIFrame'

export const withJSToggler = makeDecorator({
  name: ADDON_ID,
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  wrapper: function JSToggler_StoryWrapper(getStory, context) {
    const [hasJS, setJSEnability] = useState(true)

    const channel = addons.getChannel()
    // TODO: get back to activated whenever the story change. Or at least, rerender.
    // channel.addListener( STORY_RENDERED, () => setJSEnability( true ))
    channel.addListener( `${ADDON_ID}/setJS`, hasJS => setJSEnability( hasJS ))

    const renderedStory = getStory(context)
    return hasJS ? renderedStory : <SandBoxedIFrame>{renderedStory}</SandBoxedIFrame>
  }
})
