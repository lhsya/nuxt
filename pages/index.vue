<template>
  <div>
    hahahahaha
  </div>
</template>

<script>
export default {
  layout: 'index',
  name: 'IndexPage',
  components: {
  },
  data() {
    return {
      pageItem: '1'
    }
  },
  methods: {
    handleSelect(val) {
      console.log(val)
      this.pageItem = val;
    }
  }
}
</script>
<style lang="less">

</style>
