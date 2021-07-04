import React from 'react'
import Image from 'next/image'


type PageTitleProps = {
  icon: string;
  title: string;
}

export default class PageTitle extends React.Component<PageTitleProps> {
  constructor(props: PageTitleProps) {
    super(props)
  }
  render() {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
    }}>
    <div className="icon">
      <Image
        src={this.props.icon}
        alt="Page title icon"
        width={40}
        height={40}
      />
    </div>
    {this.props?.title && <h1 style={{
      fontSize: 40,
      fontWeight: 300,
      textTransform: 'uppercase',
      color: 'var(--primary-header-color)',
    }}>{this.props.title}</h1>}
  </div>
  }
}
