// Cross-site canonical and alternate links configuration
export const MAIN_SITE = 'https://swiftyjourney.com';
export const BLOG_SITE = 'https://blog.swiftyjourney.com';

export const getCrossSiteCanonical = (currentPath: string, site: 'main' | 'blog') => {
  const baseUrl = site === 'main' ? MAIN_SITE : BLOG_SITE;
  return new URL(currentPath, baseUrl).toString();
};

export const getCrossSiteAlternates = (currentPath: string) => {
  return {
    main: getCrossSiteCanonical(currentPath, 'main'),
    blog: getCrossSiteCanonical(currentPath, 'blog')
  };
};

// Link between main site and blog
export const CROSS_SITE_LINKS = {
  '/en/': `${BLOG_SITE}/en/`,
  '/es/': `${BLOG_SITE}/es/`,
  '/en/blog': `${BLOG_SITE}/en/blog/`,
  '/es/blog': `${BLOG_SITE}/es/blog/`,
} as const;