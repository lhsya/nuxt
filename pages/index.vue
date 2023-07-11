<template>
  <div class="a">
  <Tutorial/>
    <p class="b">{{ a }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      a: 'hahahahah'
    }
  }
}
</script>
<style lang="less">
.a {
  .b {
    color: red;
  }
}
</style>
