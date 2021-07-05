import React from 'react'
import Image from 'next/image'
import styles from './PageTitle.module.scss'

type PageTitleProps = {
  icon: string;
  title: string;
}

export default class PageTitle extends React.Component<PageTitleProps> {
  constructor(props: PageTitleProps) {
    super(props)
  }
  render() {
    return <div className={styles.PageTitle_icon}>
    <div className="icon">
      <Image
        src={this.props.icon}
        alt="Page title icon"
        width={40}
        height={40}
      />
    </div>
    {this.props?.title && <h1 className={styles.PageTitle_text}>{this.props.title}</h1>}
  </div>
  }
}
