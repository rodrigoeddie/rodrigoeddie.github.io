
<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
      .where({ _path: path, active: true })
      .findOne()
    });

const [prev, next] = await queryContent()
      .only(['_path', 'title'])
      .where({ active: true })
      .findSurround(path);

console.log(prev);
console.log(next);

const { title, description } = data._value;

useHead({
  title: title,
  description: description,
});
</script>

<template>
  <NuxtLayout name="base">
    <div class="container">
        <h1 class="title">{{ data.title }}</h1>

        <ContentRenderer :value="data" />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
