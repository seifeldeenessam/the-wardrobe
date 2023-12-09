import Texts from '@assets/jsons/texts.json';
import { Bag, Bell, Heart, User } from '@phosphor-icons/react/dist/ssr';
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
					<Link href={'/notifications'}>
						<Bell size={'24'} />
					</Link>
				</li>
				<li>
					<Link href={'/favorites'}>
						<Heart size={'24'} />
					</Link>
				</li>
				<li>
					<Link href={'/shopping-bag'}>
						<Bag size={'24'} />
					</Link>
				</li>
				<li>
					<Link href={'/account'}>
						<User size={'24'} />
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
