export const useFormWithDto = <TDto extends object, TSchema extends object>({
    dtoFactory,
    schema,
}: {
    dtoFactory: () => TDto;
    schema: TSchema;
}) => {
    const state = reactive(dtoFactory());

    const form = useForm({
        validationSchema: schema,
    });

    return {
        state,
        ...form,
    };
};
