import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import defaultTheme from '../theme';
import setupIcons from '../icons/setupIcons';

class OtUiThemeProvider extends React.Component {
  componentDidMount() {
    setupIcons();
  }
  render() {
    const { children, theme = defaultTheme } = this.props;
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  }
}

export default OtUiThemeProvider;
