import yaml from 'js-yaml';

const translations = import.meta.glob(
    '../locales/*.yaml',
    {
        query: 'raw',
        eager: true,
        import: 'default',
    },
);

const messages = Object
    .entries(translations)
    .reduce((acc, [path, content]) => {
        const locale = path
            .split('/')
            .pop()
            ?.replace('.yaml', '') || '';
        acc[locale] = yaml
            .load(String(content)) as Record<string, string>;
        return acc;
    }, {} as Record<string, Record<string, string>>);

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'id',
    fallbackLocale: 'id',
    messages,
}));
