import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { InboxScreen } from '.';
import { defaultTasksData } from '../TaskList/TaskList.stories';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>]
};

const store: any = {
  getState: () => {
    return {
      tasks: defaultTasksData
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};

export const Default = () => <InboxScreen />;
export const Error = () => <InboxScreen error="Something" />;
