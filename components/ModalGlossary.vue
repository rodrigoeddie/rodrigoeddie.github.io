<script lang="ts" setup>
const { contents } = await queryContent('glossary').findOne();

console.log(contents);
</script>

<template>
  <div class="wrapper-glossary">
    <h2 class="title">Glossário</h2>

    <div
      :class="[`glossary-item-${index}`, 'glossary-item']"
      v-for="(item, index) in contents">

      <h3 class="subtitle">
        {{ item.title }}
      </h3>

      <p class="description">
        {{ item.description }}
      </p>

      <p class="content">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper-glossary {
    background: antiquewhite;
    height: 100vh;
    padding: 20px;
    position: absolute;
    box-shadow: 0 0 30px rgb(214, 197, 174);
    top: 0;
    bottom: 0;
    right: 0;
    left: 50%;
    overflow: auto;
    border-left: 1px solid white;

    .glossary-item {
      display: none;

      p {
        padding-top: 15px;
      }

      &.glossary-item-0 {
        display: block;
      }
    }
  }
</style>
