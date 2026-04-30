import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Unsubscribe | AceCloud',
    description: "Unsubscribe from our newsletter and opt out of receiving web design, SEO, and branding updates. If you ever want to hear from us again, we’d love to have you back!",
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