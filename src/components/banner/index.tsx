import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css';

const Banner = () => {
    return (
        <Image
            src='/assets/images/banner-image.jpg'
            className={styles["banner"]}
            width={100}
            height={50}
            alt='banner'
        />
    )
}

export default Banner