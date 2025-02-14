import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'hu'],
    defaultLocale: 'en'
});

export const config = {
    matcher: ['/',
        '/(en|hu)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)']
};
