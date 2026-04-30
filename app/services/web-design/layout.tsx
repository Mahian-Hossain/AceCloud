import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Top Web Design Services in Toronto | Custom Websites for Businesses',
    description: "With 100+ websites designed for industries like healthcare, transport, education, and non-profits, AceCloud is the perfect agency to elevate your online presence.",
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
