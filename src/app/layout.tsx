import Header from '@/components/header';
import Texts from '@assets/jsons/texts.json';
import '@styles/app.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
	title: Texts.app_name,
	description: Texts.app_description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" dir="ltr">
			<body className={DMSans.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
