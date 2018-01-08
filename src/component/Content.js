import React from 'react';
import { withStyles } from 'material-ui';

export default withStyles(theme => ({
  content: {
    padding: theme.spacing.unit * 3
  },
  spacer: theme.mixins.toolbar
}))(class extends React.Component {
  render() {
    const { children, style } = this.props;
    const { content, spacer } = this.props.classes;

    return (
      <React.Fragment>
        <div className={spacer} />
        <main className={content} style={style}>
          {children}
        </main>
      </React.Fragment>
    );
  }
});
