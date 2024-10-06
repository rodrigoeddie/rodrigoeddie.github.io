<script lang="ts" setup>
useHead({
  title: 'Home',
});

const posts = await queryContent('blog')
      .where({ active: true })
      .find()
</script>

<template>
  <NuxtLayout name="base">
    <div class="container">
      <div class="wrap-content" v-for="item in posts">
          <NuxtLink :to="item._path">
            {{ item.title }}
          </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
