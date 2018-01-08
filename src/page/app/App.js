import React from 'react';
import { List, Divider, Reboot, Typography } from 'material-ui';
import AppBar from 'src/component/AppBar';
import SideBar from 'src/component/SideBar';
import Content from 'src/component/Content';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import logo from './logo.svg';

const sideBar = {
  width: 225
};
const appBar = {
  paddingLeft: sideBar.width
};
const content = {
  marginLeft: sideBar.width
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Reboot />

        <AppBar style={appBar}>
          Permanent drawer
        </AppBar>

        <SideBar style={sideBar}>
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </SideBar>

        <Content style={content}>
          <Typography>
          You think water moves fast? You should see ice.
            <img src={logo} alt="logo" />
          </Typography>
        </Content>
      </div>
    );
  }
}
