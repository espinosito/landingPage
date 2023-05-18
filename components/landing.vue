
<template>
    <div class="cap m-auto">
      <div class=" justify-content-center">
        <p class="mb-0 text-center nameTitle">Espinosito</p>
        <p class="mb-0 text-center descPos">FRONT-END DEVELOPER</p>
        <div class=" m-auto justify-content-center box"></div>
        <div class="row">
          <div class="col-6">
            <p class="titleName m-auto">David de Jesus Perez Diaz</p>
          </div>
          <div class="col-6 text-center">
            <div class="card m-auto" style="width: 650px;">
              <img class="card-img-top" src="images/me.png" alt="not real me">
              <div class="card-body">
                <h5 class="card-title">Me and my frog</h5>
                <p class="card-text">if u relly wanna see me click bellow</p>
                <a href="#" class="btn btn-primary">sapo</a>
              </div>
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
    line-height: 130px;
}
.cap{
  max-width: 1400px;
}
</style>
