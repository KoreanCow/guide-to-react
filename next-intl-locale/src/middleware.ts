import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ko', 'ja'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|ko|ja)/:path*']
};