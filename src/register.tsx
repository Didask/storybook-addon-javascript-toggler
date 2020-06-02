import * as React from 'react'
import addons, { types } from '@storybook/addons'

import { ADDON_ID } from './constants'
import { JSTogglerButton } from './components/JSTogglerButton'

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Toggle Javascript',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render(){
      return <JSTogglerButton />
    },
  })
})
