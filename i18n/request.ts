import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'hu'];

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    if (!locale || !locales.includes(locale)) {
        throw new Error('Invalid locale');
    }

    return {
        locale,
        messages: (await import(`../locales/${locale}.json`)).default
    };
});
