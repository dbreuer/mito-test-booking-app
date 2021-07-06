import React from 'react'
import Image from 'next/image'
import styles from './PageTitle.module.scss'

type PageTitleProps = {
  icon: string;
  title?: string;
}

export default function PageTitle({ icon, title }: PageTitleProps) {
  return (
    <div className={styles.PageTitle_icon}>
      <div className="icon">
        <Image
          src={icon}
          alt="Page title icon"
          width={40}
          height={40}
        />
      </div>
      {title && <h1 className={styles.PageTitle_text}>{title}</h1>}
    </div>
  )
}
