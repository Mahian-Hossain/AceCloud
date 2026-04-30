import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About AceCloud | Expert Web Design, SEO, and Branding Services in Toronto',
    description: "Based in Toronto, AceCloud has crafted 100+ stunning websites since 2023. We design, optimize, and brand businesses for success. Let’s build your online presence!",
};

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>{children}</div>
    );
};

export default Layout;