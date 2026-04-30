import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Design & Branding Portfolio | AceCloud – Stunning Digital Projects',
    description: "Toronto’s top full-service digital agency, specializing in web design, SEO, and brand design. We help businesses enhance their online presence and drive results.",
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
