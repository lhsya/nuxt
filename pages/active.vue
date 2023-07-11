<template>
    <div class="a">
        <NavMenu @handleSelect="handleSelect" defaultActive="active"/>
        <div>
            dasdashdo
        </div>
    </div>
</template>

<script>
export default {
    name: 'Active',
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
.a {
    .b {
        color: red;
    }
}
</style>
