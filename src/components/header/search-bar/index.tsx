import Button from '@/components/button';
import { getText } from '@/utilities/texts';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import styles from './styles.module.css';

type Props = {};

const SearchBar = (props: Props) => {
	return (
		<form className={styles['search-bar']}>
			<input type="text" name="search" id="search-bar" placeholder={getText('search_bar_placeholder')} />
			<Button variant="tertiary" element="button" type="submit" content={{ endIcon: <MagnifyingGlass /> }} />
		</form>
	);
};

export default SearchBar;
