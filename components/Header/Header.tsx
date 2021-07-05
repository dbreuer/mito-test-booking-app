import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'


type HeaderProps = {
  title?: string;
  departure?: {
    shortName: string;
    iata: string;
  };
  destination?: {
    shortName: string;
    iata: string;
  };
}

export default class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props)
  }
  render() {
    return <div className={styles.header}>
    <div className="icon">
      <Link href="/">
        <a>
        <Image
          src="/plus-icon.svg"
          alt="Picture of the author"
          width={28}
          height={28}
        />
        </a>
      </Link>
    </div>
    {this.props?.title && <div className="title">{this.props.title}</div>}
    {this.props?.destination && this.props?.departure && <div className={styles.flightHeader}>
        <div className={styles.flightHeader__from}>
          <small className={styles.flightHeader__note}>Leaving from</small>
          <h3 className={styles.flightHeader__place}>{this.props.departure?.shortName}</h3>
          <h3 className={styles.flightHeader__place__mobile}>{this.props.departure?.iata}</h3>
        </div>
        <div className={styles.flightHeader__divider}>
        <Image
          src="/Arrow.svg"
          alt="Picture of the author"
          width={31}
          height={8}
        />
         <Image
          src="/Arrow-1.svg"
          alt="Picture of the author"
          width={31}
          height={8}
        />
        </div>
        <div className={styles.flightHeader__to}>
          <small className={styles.flightHeader__note}>&nbsp;</small>
          <h3 className={styles.flightHeader__place}>{this.props.destination?.shortName}</h3>
          <h3 className={styles.flightHeader__place__mobile}>{this.props.destination?.iata}</h3>
        </div>
      </div>}
  </div>
  }
}
