import React from 'react';
import { withXD } from 'storybook-addon-xd-designs'
import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/504d744a-25ca-4443-8e5f-b277bd784d6b-051e/screen/28de7149-0f4f-4336-94a5-69a25ed8e926/specs/',
    },
  },
  decorators: [withXD],
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
