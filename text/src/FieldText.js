// @flow
import React, { Component } from 'react';
import keyCode from 'keycode';
import styled from 'styled-components';

const common = `
  appearance: none;
  color: inherit;
  font-size: 12;
  font-family: inherit;
  letter-spacing: inherit;
`;

const ReadView = styled.div`
  ${common} overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EditView = styled.input`
  ${common}
  background: transparent;
  border: 1;
  box-sizing: border-box;
  cursor: inherit;
  line-height: inherit;
  margin: 1;
  outline: none;
  padding: 1;
  width: 100%;
  :invalid: {
    boxshadow: none;
  },
`;

type Props = {
  value?: string | number,
  style?: Object,
  isInitiallySelected?: boolean,
  isEditing: boolean,
  onConfirm?: (e: KeyboardEvent) => mixed,
  onKeyDown?: (e: KeyboardEvent) => mixed,
};

export default class SingleLineTextInput extends Component<Props, {}> {
  static defaultProps = {
    style: {},
    isInitiallySelected: false,
    onConfirm: () => {},
    onKeyDown: () => {},
  };
  inputRef: ?HTMLInputElement;

  componentDidMount() {
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isEditing) {
      this.selectInputIfNecessary();
    }
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
    if (event.keyCode === keyCode('enter')) {
      if (this.props.onConfirm) this.props.onConfirm(event);
    }
  };

  getInputProps = () => {
    const inputProps = {
      ...this.props,
      type: 'text',
      onKeyDown: this.onKeyDown,
    };

    return inputProps;
  };


  renderReadView() {
    return <ReadView style={this.props.style}>{this.props.value}</ReadView>;
  }

  render() {
    return <input {...this.getInputProps()} />
  }
}