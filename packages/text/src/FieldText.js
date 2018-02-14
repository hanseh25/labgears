// @flow
import React, { Component } from 'react';
import Input from './styled/Input';
import type { FieldTextProps } from './types';

export default class FieldText extends Component<
  FieldTextProps,
  void,
> {
  static defaultProps = {
    compact: false,
    disabled: false,
    isInvalid: false,
    isReadOnly: false,
    isSpellCheckEnabled: true,
    onChange: () => {},
    required: false,
    type: 'text'
  };

  input: ?HTMLInputElement;

  focus() {
    if (this.input) {
      this.input.focus();
    }
  }

  handleInputRef = (input: HTMLInputElement) => {
    this.input = input;
  };

  render() {
    return (
      <div>
          <Input
            className={this.props.className}
            autoComplete={this.props.autoComplete}
            autoFocus={this.props.autoFocus}
            disabled={this.props.disabled}
            form={this.props.form}
            id={this.props.id}
            innerRef={this.handleInputRef}
            maxLength={this.props.maxLength}
            min={this.props.min}
            max={this.props.max}
            name={this.props.name}
            onBlur={this.props.onBlur}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onKeyDown={this.props.onKeyDown}
            onKeyPress={this.props.onKeyPress}
            onKeyUp={this.props.onKeyUp}
            pattern={this.props.pattern}
            placeholder={this.props.placeholder}
            readOnly={this.props.isReadOnly}
            required={this.props.required}
            spellCheck={this.props.isSpellCheckEnabled}
            type={this.props.type}
            value={this.props.value}
          />
      </div>
    );
  }
}