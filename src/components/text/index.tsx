import { getText } from '@/utilities/texts';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type Props = {
	variant: Variant;
	content: string;
};

const Text = ({ variant, content }: Props) => {
	if (!getText(content)) return null;

	if (variant === 'h1') return <h1>{getText(content)}</h1>;
	if (variant === 'h2') return <h2>{getText(content)}</h2>;
	if (variant === 'h3') return <h3>{getText(content)}</h3>;
	if (variant === 'h4') return <h4>{getText(content)}</h4>;
	if (variant === 'h5') return <h5>{getText(content)}</h5>;
	if (variant === 'h6') return <h6>{getText(content)}</h6>;
	if (variant === 'p') return <p>{getText(content)}</p>;

	return null;
};

export default Text;
