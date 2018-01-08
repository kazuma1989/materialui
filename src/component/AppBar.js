import React from 'react';
import { withStyles, AppBar, Toolbar, Typography } from 'material-ui';

export default withStyles(theme => ({
}))(class extends React.Component {
  render() {
    const { children, style } = this.props;

    return (
      <AppBar style={style}>
        <Toolbar>
          <Typography type="title" color="inherit" noWrap>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
});
