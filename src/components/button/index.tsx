import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';
type Contents = {
	label?: string;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
};

type Variant = 'default' | 'primary' | 'secondary' | 'tertiary';

type Props = ButtonHTMLAttributes<'button'> & {
	contents: Contents;
	variant: Variant;
};

const Button = ({ type, contents, variant }: Props) => {
	return (
		<button type={type} className={[styles['button'], styles[`button-${variant}`]].join(' ')}>
			{contents.startIcon && contents.startIcon}
			{contents.label && contents.label}
			{contents.endIcon && contents.endIcon}
		</button>
	);
};

export default Button;
