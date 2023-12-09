import Texts from '@assets/jsons/texts.json';
import Link from 'next/link';
import SearchBar from './search-bar';
import styles from './styles.module.css';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={styles['header']}>
			<div>
				<Link href={'/'}>
					<h1>{Texts['app-name']}</h1>
				</Link>
				<SearchBar />
			</div>
			<ul>
				<li>
					<Link href={'/notifications'}></Link>
				</li>
				<li>
					<Link href={'/favorites'}></Link>
				</li>
				<li>
					<Link href={'/shopping-bag'}></Link>
				</li>
				<li>
					<Link href={'/account'}></Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
