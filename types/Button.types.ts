export type ButtonProps = {
  id?: string | null | undefined;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  disabled?: boolean;
  block?: boolean;
  onClick?: any;
  href?: string;
}

export type ButtonVariant =
| 'default'
| 'primary'
| 'secondary'
| 'outline';
