
<template>
    <div class="m-auto">
      <div class="cap m-auto mb-5">
        <div class=" justify-content-center">
          <p class="mb-0 text-center nameTitle">Espinosito</p>
          <p class="mb-0 text-center descPos">FRONT-END DEVELOPER</p>
          <div class=" m-auto justify-content-center box"></div>
          <about-me-vue/>
        </div>
      </div>
      <card-tec/>
      <div class="cap m-auto">
        <div class=" justify-content-center">
          <about-app/>
        </div>
      </div>
    </div>
</template>

<script>
import AboutApp from './aboutApp.vue'
import aboutMeVue from './aboutMe.vue'
import CardTec from './cardTec.vue'
export default {
  components:{aboutMeVue, AboutApp,CardTec,},
  data(){
        return{

    }
  },
}
</script>

<style scoped>

</style>
