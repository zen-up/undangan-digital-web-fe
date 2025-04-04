<script lang="ts" setup>
const { $schema } = useNuxtApp();

const {
    state,
    handleSubmit,
} = useFormWithDto({
    dtoFactory: () => new PostCreateRequestDto(),
    schema: toTypedSchema(
        $schema.object({
            userId: $schema
                .string()
                .required('userId is required'),
            title: $schema
                .string()
                .required('title is required'),
        }),
    ),
});

const {
    mutate: createPost,
    isPending,
} = useMutationCreatePost();

const handleCreatePost = handleSubmit(() => {
    createPost(state);
});
</script>

<template>
    <VContainer>
        <form
            class="space-y-6"
            @submit.prevent="handleCreatePost"
        >
            <VInput
                id="title"
                v-model="state.title"
                label="Title"
                name="title"
            />
            <VInput
                id="userId"
                v-model="state.userId"
                label="User ID"
                name="userId"
            />
            <VButton
                type="submit"
                :disabled="isPending"
            >
                Submit
            </VButton>
        </form>
    </VContainer>
</template>
