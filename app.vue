<script lang="ts" setup>
useHead({
  title: '',
  titleTemplate: (title: string) => (title ? `${title} - Rodrigo Eddie` : `Rodrigo Eddie`),
  meta: [
    {
      name: 'description',
      content: ``,
    }
  ],
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
