import React from 'react';
import { withStyles, Drawer, Divider } from 'material-ui';

export default withStyles(theme => ({
  paper: {
    width: 'inherit'
  },
  header: theme.mixins.toolbar
}))(class extends React.Component {
  render() {
    const { children, style } = this.props;
    const { paper, header } = this.props.classes;

    return (
      <Drawer type="permanent" classes={{ paper }} style={style}>
        <div>
          <div className={header} />
          <Divider />
          {children}
        </div>
      </Drawer>
    );
  }
});
