export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/user/'],
      },
    ],
    sitemap: 'https://varnam.vexatech.in/sitemap.xml',
    host: 'https://varnam.vexatech.in',
  };
}

