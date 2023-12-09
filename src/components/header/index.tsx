import Texts from '@assets/jsons/texts.json';
import { Bag, Bell, Heart, User } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import Button from '../button';
import SearchBar from './search-bar';
import styles from './styles.module.css';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={styles['header']}>
			<Link href={'/'}>
				<h1>{Texts['app-name']}</h1>
			</Link>
			<SearchBar />
			<nav>
				<Button variant="tertiary" element="anchor" href="/notifications" content={{ startIcon: <Bell size={'24'} /> }} />
				<Button variant="tertiary" element="anchor" href="/favorites" content={{ startIcon: <Heart size={'24'} /> }} />
				<Button variant="tertiary" element="anchor" href="/shopping-bag" content={{ startIcon: <Bag size={'24'} /> }} />
				<Button variant="default" element="anchor" href="/account" content={{ startIcon: <User size={'24'} /> }} />
			</nav>
		</header>
	);
};

export default Header;
