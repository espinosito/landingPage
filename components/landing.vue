
<template>
    <div class="m-auto">
      <div class="cap m-auto">
        <div class=" justify-content-center">
          <p class="mb-0 text-center nameTitle">Espinosito</p>
          <p class="mb-0 text-center descPos">FRONT-END DEVELOPER</p>
          <div class=" m-auto justify-content-center box"></div>
          
          <div class="row mt-5">
            <div class="col-6 text-center">
              <div class="card cardBorder m-auto" style="width: 550px; height:628px">
                
                  <div class="card-body bg-black">
                    <h5 class="card-title text-light">Me and my frog</h5>
                    <p class="card-text text-light">if u relly wanna see me? click bellow</p>
                    <a href="#" class="btn btn-primary">sapo</a>
                  </div>
              </div>
            </div>
            <div class="col-6 align-self-center">
              <p class="mb-0 text-center subTitle">About the app</p>
              <p class="titleName m-auto">David de Jesus Perez Diaz</p>
              <p class="description m-auto">As a junior developer, I have a strong foundation in Javascript, Nuxt, Vue, CSS, and HTML. With one year of experience, I have acquired skills that allow me to be creative and proactive in problem-solving. <br> 
              I am always seeking new challenges and opportunities to grow and improve my technical skills. <br>
              Additionally, I have the ability to learn in a self-taught manner and I am always willing to embrace technological and industry changes. I am excited to continue learning and growing in my career as a developer and contribute to the success of any project I am involved in.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
}
</script>

<style scoped>
.nameTitle{
  margin-top: 40px;
  font-family: 'Caveat bold';
  font-size: 200px;
  line-height: 130px;
}
.descPos{
  font-size: 25px;
  font-family: 'Mukta regular';
}
.box {
  width: 80%; 
  height: 100px;  
  border: solid 5px #000;
  border-color: #000 transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
}
.titleName{
    margin-top: 40px;
    font-family: 'Caveat bold';
    font-size: 60px;
    text-align: center;
}
.subTitle{
    font-family: 'Caveat bold';
    font-size: 60px;
    text-align: center;
}
.cap{
  max-width: 1400px;
}
.imgCard{
  min-width: 100%;
  height:450px;
  object-fit: contain;
  border: 18px solid #000;
  border-radius: unset;
}
.cardBorder{
  border: 18px solid #000;
}
.description{
  font-family: 'Mukta regular';
  font-size: 20px;
  text-align:justify;
}
</style>
