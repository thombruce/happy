<template lang='pug'>
div
  TntContent(:article='article')
</template>

<script>
// TODO: Extending, rather than overwriting components, would save us some amount of code duplication.
export default {
  props: [
    'article'
  ],
  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.article.title} | Happy` },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.article.description ? this.article.description : 'My happiness and well-being blog.'}`
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `https://happy.thombruce.com${this.$route.fullPath}/` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://happy.thombruce.com${this.article.image ? this.$img(this.article.image, { width: '1200px', height: '627px' }) : '/happy.jpg'}`
        }
      ]
    }
  }
}
</script>
