<template>
<div class="" >
  <Landing/>
</div>
</template>

<script>
import Landing from '../components/landing.vue';
export default {
  components:{Landing},
  layout:'index',
  mounted(){
      if (this.$store.state.fromOtherPage == true) {
        this.scroll()
      }else{
        console.log('nosoy');
      }
    },
    methods:{
      scroll(){
        if(window){
          const element = document.getElementById('cardTech')
          setTimeout(function () {
            window.scrollTo({ behavior: "smooth", top: element.offsetHeight + 20});
          },2);
        }
      }
    }
}
</script>
<style scoped>

</style>
