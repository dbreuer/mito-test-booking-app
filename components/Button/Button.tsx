import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  text: string;
}

export default class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props)
  }
  render() {
    return <Link href="/select-flight"><a style={{
      padding: '15px 50px',
      display: 'flex',

      color: 'white',
      backgroundColor: 'var(--main-button-color)',
      textTransform: 'uppercase',
      borderRadius: 3,
      borderColor: 'var(--main-button-color)',
      outline: 'none',
    }}>{this.props?.text}</a>
    </Link>
  }
}
