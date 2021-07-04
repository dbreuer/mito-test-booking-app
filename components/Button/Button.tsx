import React from 'react'
import Link from 'next/link'

import cn from "classnames";

import styles from './Button.module.scss'

type ButtonProps = {
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: any;
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
    [styles.Button_disabled]: this.props.disabled,
  });

  render() {
    return <Link href="/select-flight"><a aria-disabled={this.props.disabled} className={this.computedClassName}>{this.props?.text}</a>
    </Link>
  }
}
