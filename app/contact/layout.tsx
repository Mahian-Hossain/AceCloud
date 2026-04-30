import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact AceCloud | Get in Touch with Toronto’s Leading Full-Service Experts',
    description: "Want to work with the best? Contact AceCloud today for expert web design, SEO, and brand design services that will elevate your business online.",
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
