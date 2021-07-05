import React from 'react'
import Link from 'next/link'

import cn from "classnames";

import styles from './Button.module.scss'

type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  disabled?: boolean;
  block?: boolean;
  onClick?: any;
  href?: string;
}

type ButtonVariant =
| 'default'
| 'primary'
| 'secondary'
| 'outline';



export default class Button extends React.Component<ButtonProps> {

  constructor(props: ButtonProps) {
    super(props)
  }

  computedClassName = cn(styles.Button, {
    [styles.Button_default]: this.props.variant === 'default',
    [styles.Button_primary]: this.props.variant === 'primary',
    [styles.Button_secondary]: this.props.variant === 'secondary',
    [styles.Button_outline]: this.props.variant === 'outline',
    [styles.Button_block]: this.props.block,
    [styles.Button_disabled]: this.props.disabled,
  });

  buttonBlock(onClickFunction?: any) {
    return (
    <button
      type={this.props.type || 'button'}
      onClick={onClickFunction || null}
      aria-disabled={this.props.disabled}
      className={this.computedClassName}>
        {this.props?.text}
      </button>
    )
  }

  render() {
    if (this.props?.href) {
      return <Link href="/select-flight">
        {this.buttonBlock()}
      </Link>
    }

    return this.buttonBlock(this.props.onClick);
  }
}
