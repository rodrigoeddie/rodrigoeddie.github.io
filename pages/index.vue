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
            <h1>{{ item.title }}</h1><br>
            <p>{{ item.description }}</p>
            <br>
            &#128197; {{ item.date }}

          </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
