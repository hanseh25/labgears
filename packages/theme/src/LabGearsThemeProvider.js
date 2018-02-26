// @flow
import React, { Component, type Node } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME_MODE } from './constants';

type Props = {
  children: Node,
  mode: string,
};

export default class LabGearsThemeProvider extends Component<Props> {
  static defaultProps = {
    mode: DEFAULT_THEME_MODE,
  };

  constructor(props: Props) {
    super(props);
    this.state = { theme: props.theme };
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;
    return (
      <ThemeProvider
        theme={{
          mode: theme,
        }}
      >
        {children}
      </ThemeProvider>
    );
  }
}
