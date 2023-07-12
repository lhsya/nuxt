<!-- Please remove this file from your project -->
<template>
    <div id="navMenu">
        <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item index="/">主页</el-menu-item>
            <el-menu-item index="/active">动画</el-menu-item>
            <el-menu-item index="3">帮助</el-menu-item>
            <el-menu-item index="4">还没想好</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'NuxtTutorial',
    props: {
        defaultActive: {
            type: String,
            defaultValue: 'index'
        }
    },
    methods: {
        handleSelect(val) {
            this.$emit('handleSelect', val);
        }
    }
}
</script>
<style>
#navMenu {
    position: fixed;
    top: 0;
    z-index: 1;
    left: 0;
    width: 100%;
}
</style>
