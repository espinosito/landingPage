<template>
    <div class="row">
        <div class="col-6 align-self-center">
            <p class="mb-0 text-center subTitle">About me</p>
            <p class="titleName m-auto">David de Jesus Perez Diaz</p>
            <p class="description m-auto">As a junior developer, I have a strong foundation in Javascript, Nuxt, Vue, CSS, and HTML. With one year of experience, I have acquired skills that allow me to be creative and proactive in problem-solving. <br> 
            I am always seeking new challenges and opportunities to grow and improve my technical skills. <br>
            Additionally, I have the ability to learn in a self-taught manner and I am always willing to embrace technological and industry changes. I am excited to continue learning and growing in my career as a developer and contribute to the success of any project I am involved in.</p>
        </div>
        <div class="col-6 text-center">
            <div class="card cardBorder m-auto" style="width: 500px; height:auto">
            <img class="card-img-top imgCard" src="images/me.png" alt="not real me">
                <div class="card-body bg-black">
                <h5 class="card-title text-light imageText">Me and my frog</h5>
                <p class="card-text text-light imageTextSm">if u relly wanna see me? click bellow</p>
                <!-- <button @click="$store.state.dialogImage=true" class="btn btn-success active description">Image</button> -->
                <dialog-image-vue/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dialogImageVue from './dialogImage.vue'
export default {
    components:{dialogImageVue,}
}
</script>

<style scoped>

</style>