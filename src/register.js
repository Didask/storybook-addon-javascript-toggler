import React from 'react';
import addons, { types } from '@storybook/addons';

import JSTogglerButton from './jstogglerbutton';

const ADDON_ID = "javascript-toggler"

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    title: 'Javascript on/off',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <JSTogglerButton api={api} />,
  });
});
