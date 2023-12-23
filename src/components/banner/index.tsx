import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Banner = () => {
	return (
		<section className={styles['banner']}>
			<Link href={'/'}>
				<Image src="/assets/images/banner-image.jpg" alt="Hero Banner" fill priority />
			</Link>
		</section>
	);
};

export default Banner;
