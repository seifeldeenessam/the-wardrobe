import Header from '@/components/header';
import { getText } from '@/utilities/texts';
import '@styles/app.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
	title: getText('app_title'),
	description: getText('app_description'),
	themeColor: '#e0f33a',
	viewport: { width: 'device-width', initialScale: 1 },
	keywords: ['Wardrobe', 'clothing', 'fashion', 'style'],
	robots: { index: true, follow: true },
	icons: { icon: '/meta/favicon.ico', apple: '/meta/apple-touch-icon.png' },
	manifest: '/meta/manifest.json',
	openGraph: {
		title: getText('app_title'),
		description: getText('app_description'),
		images: [{ url: '/meta/icon-512.png' }],
		url: 'https://www.wardrobe.com/',
		type: 'website'
	}
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
