import Link from 'next/link';
import { ButtonHTMLAttributes, Fragment, ReactNode } from 'react';
import styles from './styles.module.css';

type Variant = 'default' | 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
	element: 'button';
	type: ButtonHTMLAttributes<'button'>['type'];
};

type AnchorProps = {
	element: 'anchor';
	href: string;
};

type Props = { variant: Variant; content: { label?: string; startIcon?: ReactNode; endIcon?: ReactNode } } & (ButtonProps | AnchorProps);

const Button = (props: Props) => {
	const getClassNames = () => {
		return [styles['button'], styles[`button-${props.variant}`], props.content.label ? undefined : styles['button-rounded']].join(' ');
	};

	const Content = () => {
		return (
			<Fragment>
				{props.content.startIcon && props.content.startIcon}
				{props.content.label && props.content.label}
				{props.content.endIcon && props.content.endIcon}
			</Fragment>
		);
	};

	if (props.element === 'button') {
		return (
			<button type={props.type} className={getClassNames()}>
				<Content />
			</button>
		);
	} else if (props.element === 'anchor') {
		return (
			<Link href={props.href} className={getClassNames()}>
				<Content />
			</Link>
		);
	} else {
		return null;
	}
};

export default Button;
