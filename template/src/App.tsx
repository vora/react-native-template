import React from 'react';
import { Navigator } from '~/navigation';
import { ReduxWrapper } from '~/redux/ReduxWrapper';

export const App: React.FC = () => {
  return (
    <ReduxWrapper>
      <Navigator />
    </ReduxWrapper>
  );
};
