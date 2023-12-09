import { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type Props = {
	variant: Variant;
	content: ReactNode;
};

const Text = ({ variant, content }: Props) => {
	if (variant === 'h1') return <h1>{content}</h1>;
	if (variant === 'h2') return <h2>{content}</h2>;
	if (variant === 'h3') return <h3>{content}</h3>;
	if (variant === 'h4') return <h4>{content}</h4>;
	if (variant === 'h5') return <h5>{content}</h5>;
	if (variant === 'h6') return <h6>{content}</h6>;
	if (variant === 'p') return <p>{content}</p>;

	return null;
};

export default Text;
