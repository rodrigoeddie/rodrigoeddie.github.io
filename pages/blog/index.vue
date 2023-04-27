<script lang="ts" setup>
  useHead({
    title: 'Blog',
  });

  const posts = await queryContent('/').find();
</script>

<template>
  <NuxtLayout name="base">
    <h3>Posts:</h3>

    <nav v-for="item in posts">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
    </nav>
  </NuxtLayout>
</template>

<style scoped></style>
