import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { CustomActivityIndicator } from '../';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('CustomActivityIndicator', module).add('default view', () => (
  <CenteredView>
    <CustomActivityIndicator loading={true}/>
  </CenteredView>
));

