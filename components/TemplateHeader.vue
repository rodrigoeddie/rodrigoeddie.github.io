<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1>
      <NuxtLink class="logo" to="/">Rodrigo Eddie</NuxtLink>
    </h1>

    <!-- <nav class="menu">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </nav> -->
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed black;
    margin-bottom: 20px;
    align-items: center;
  }

  .logo {
    color: black;
    text-transform: uppercase;
  }

  .menu {
    display: flex;
    gap: 10px;
    line-height: 1em;

    a {
      padding: 4px 8px;
    }

    a:hover {
      background: antiquewhite;
    }
  }
</style>
