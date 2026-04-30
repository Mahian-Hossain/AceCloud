import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/wp-admin/'],
      },
    ],
    sitemap: 'https://acecloud.ca/sitemap.xml',
    host: 'acecloud.ca',
  };
}
