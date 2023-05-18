<template>
    <div>
        <header-vue class="marginB"/>
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
.marginB{
    padding-bottom: 59px !important;
}
</style>