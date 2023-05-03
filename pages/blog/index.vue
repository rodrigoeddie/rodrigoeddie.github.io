<script lang="ts" setup>
  useHead({
    title: 'Blog',
  });

  const posts = await queryContent('blog')
      .where({ active: true })
      .find()

  let allPosts = ref(posts);

  const rawCategories = posts.map(post => {
    return post.category;
  });

  const categories = [...new Set(rawCategories)];

  const filter = async (event: Event, category: string) => {
    document.querySelectorAll('.item-filter')
      .forEach(item => item.classList.remove('active'));

    event.target.classList.add('active');

    const filteredPosts = await posts.filter(item => (item.category == category));
    allPosts.value = filteredPosts;
  };
</script>

<template>
  <NuxtLayout name="base">
    <div class="container">
      <h3>Posts:</h3>

      <div class="filter">
        <button
           class="item-filter"
           v-for="category in categories"
           @click.prevent="filter($event, category);">
          {{ category }}
        </button>
      </div>

      <div class="wrapper-contents">
        <div class="wrap-content" v-for="item in allPosts">
          <NuxtLink :to="item._path">
            -> {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.filter {
  button {
    border: solid 2px black;
    padding: 5px 10px;
    margin: 10px;
    &.active {
      background-color: black;
      color: white;
    }

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
