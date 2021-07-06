import React from 'react'
import Link from 'next/link'

import cn from "classnames";

import styles from './Button.module.scss'

type ButtonProps = {
  id?: string | null | undefined;
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


export default function Button({id, text, type, variant, disabled, block, onClick, href}: ButtonProps) {

  const computedClassName = cn(styles.Button, {
    [styles.Button_default]: variant === 'default',
    [styles.Button_primary]: variant === 'primary',
    [styles.Button_secondary]: variant === 'secondary',
    [styles.Button_outline]: variant === 'outline',
    [styles.Button_block]: block,
    [styles.Button_disabled]: disabled,
  });

  function buttonBlock(onClickFunction?: any) {
    return (
    <button
      id={id || undefined}
      type={type || 'button'}
      onClick={!disabled && onClickFunction || null}
      aria-disabled={disabled}
      className={computedClassName}>
        {text}
      </button>
    )
  }

    if (href) {
      return <Link href="/select-flight">
        {buttonBlock()}
      </Link>
    }

    return buttonBlock(onClick);
}
