import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Book a call with us | AceCloud | Toronto’s Best Full Service Agency',
    description: "Schedule a meeting with AceCloud to discuss your web design, SEO, or branding needs. Get expert advice and solutions tailored to your business goals.",
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
