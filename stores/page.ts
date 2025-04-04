export const usePageStore = defineStore(
    'page',
    () => {
        const title = shallowRef<string>('');
        const breadcrumbs = shallowRef<Breadcrumb[]>([]);

        const setTitle = (value: string) => {
            title.value = value;
        };

        const setBreadcrumbs = (value: Breadcrumb[]) => {
            breadcrumbs.value = value;
        };

        return {
            title,
            breadcrumbs,
            setTitle,
            setBreadcrumbs,
        };
    },
);
