<!-- Please remove this file from your project -->
<template>
    <div>
        <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
            <el-menu-item index="/">主页</el-menu-item>
            <el-menu-item index="active">动画</el-menu-item>
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
