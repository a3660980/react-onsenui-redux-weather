import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import SearchList from '../containers/iplaySearchList';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='場館搜尋' navigator={navigator} />}>
    <SearchList />
  </Page>
);

export default MainPage;
