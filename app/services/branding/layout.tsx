import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Professional Brand Design Services | Logos, Websites & Marketing Strategies for Businesses',
    description: "AceCloud offers complete brand design services, from logo and website design to researching effective marketing angles. We create cohesive brands that drive results.",
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
