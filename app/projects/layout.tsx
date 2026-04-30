import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Design & Branding Portfolio | AceCloud – Stunning Digital Projects',
    description: "Explore AceCloud’s portfolio - expert web design, SEO & branding for healthcare, education, government, and major industries. See our proven results!",
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
