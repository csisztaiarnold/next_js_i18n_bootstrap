import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('global');
    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
}
