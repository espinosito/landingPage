<template>
    <div>
        <header-vue></header-vue>
        <Nuxt/>
    </div>
</template>

<script>
import headerVue from '../components/layouts/index/header.vue';
export default{
    components:{headerVue},
    name:'index'
}
</script>

<style scoped>

</style>