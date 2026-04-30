import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Insights on Web Design, SEO & Brand Strategy',
    description: "Discover tips and tricks that most agencies won’t share. At AceCloud, we provide exclusive insights on web design, SEO, and brand strategy to help you succeed.",
}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>{children}</div>
    )
}

export default layout;
