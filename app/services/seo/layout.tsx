import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: ' Expert SEO Services in Toronto | Boost Your Website’s Rankings & Visibility',
    description: "Expert SEO services to help your website rank higher and generate free leads. Using proven strategies and cutting-edge technologies, we ensure measurable results - GURANTEED.",
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
