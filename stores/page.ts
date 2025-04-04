export const usePageStore = defineStore(
    'page',
    () => {
        const title = shallowRef<string>('');

        const setTitle = (value: string) => {
            title.value = value;
        };

        return {
            title,
            setTitle,
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.cookies(),
        },
    },
);
