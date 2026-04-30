import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://acecloud.ca';
  const currentDate = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/services/branding`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/seo`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/web-design`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Projects (static for now)
  const projectIds = ['nova-ukraine', 'skintonia', 'nutrimerchant', 'milanostore'];
  const projectRoutes = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Fetch blogs dynamically
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch('https://naturals-server.vercel.app/api/blogs');
    if (!res.ok) throw new Error('Failed to fetch blogs');

    const blogs = await res.json();

    blogRoutes = blogs.map((blog: any) => ({
      url: `${baseUrl}/blogs/${blog.title_id}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt || currentDate),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (err) {
    console.error('Error fetching blog data for sitemap:', err);
  }

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
