<template lang='pug'>
.navbar
  nav
    NuxtLink.btn.btn-ghost(v-for='(item, i) in items' :key='i' :to='item.to')
      span {{ item.title }}
  TntUIThemeToggle
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Blog',
          to: '/blog'
        },
        {
          title: 'Credits',
          to: '/credits'
        }
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
div {
  @apply flex justify-center;
}
</style>
