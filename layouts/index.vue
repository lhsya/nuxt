<template>
    <div>
        <NavMenu @handleSelect="handleSelect" :defaultActive="pageItem" class=""/>
        <nuxt  class="index-root"/>
    </div>
</template>

<script>
export default {
    name: 'Index',
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
    },
    created() {
        this.pageItem = this.$route.path
    }
}
</script>
<style lang="less">
.index-root {
    padding: 0 20px;
    margin-top: 61px;
}
</style>
