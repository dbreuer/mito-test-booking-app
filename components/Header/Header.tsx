import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'


type HeaderProps = {
  title: string;
}

export default class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props)
  }
  render() {
    return <div className={styles.header}>
    <div className="icon">
      <Image
        src="/plus-icon.svg"
        alt="Picture of the author"
        width={28}
        height={28}
      />
    </div>
    {this.props?.title && <div className="title">{this.props.title}</div>}
  </div>
  }
}
