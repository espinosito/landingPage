<template>
  <div class="card bg-dark border-0 rounded-0" style="width: 100%; height: 100vh" id="cardTech">
    <p class="mb-0 text-center subTitle text-light">About my techs</p>
    <div class="row">
      <ul class="mb-0 px-0 text-center descPos text-light col-6">
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
      </ul>
      <div class="mb-0 px-0 text-center descPos text-light col-6">
        <div class="bar-graph-horizontal mx-0">
            <div class="bar" v-for="(item, index) in bars" :key="index">
                <span class="year">{{item.title}}</span>
                <div class="bar-height" :class="item.class"></div>
            </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bars: [
        { title: 'Javascript', class: 'bar-one' },
        { title: 'Vue', class: 'bar-two' },
        { title: 'HTML', class: 'bar-three' },
        { title: 'Bootstrap', class: 'bar-four' },
        { title: 'CSS', class: 'bar-five' }],
    };
  }
};
</script>

<style scoped>
div {
  margin: 0;
}

.bar-graph-horizontal {
  max-width: 80%;
}

.bar-graph-horizontal .bar {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 8px;
}

.bar-graph-horizontal .bar .year {
  float: left;
  margin-top: 18px;
  width: 100%;
  text-align: start;
  color: #fff;
  font-weight: 700;
}

.bar-height {
  height: 55px;
}

.bar-one {
  background-color: #6CB26F !important;
  animation: show-bar-one 1s forwards;
}

.bar-two {
  background-color: #5C9E63 !important;
  animation: show-bar-two 1s forwards;
}

.bar-three {
  background-color: #4D8B57 !important;
  animation: show-bar-three 1s forwards;
}

.bar-four {
  background-color: #3D774B !important;
  animation: show-bar-four 1s forwards;
}

.bar-five {
  background-color: #2D633F !important;
  animation: show-bar-five 1s forwards;
}
.bar-one {
  
}

.bar-two {
  
}

.bar-three {
  
}

.bar-four {
  
}

.bar-five {
  
}


@keyframes show-bar-one {
  0% {
    width: 0;
  }
  100% {
    width: 59%;
  }
}
@keyframes show-bar-two {
  0% {
    width: 0;
  }
  100% {
    width: 80%;
  }
}
@keyframes show-bar-three {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes show-bar-four {
  0% {
    width: 0;
  }
  100% {
    width: 30%;
  }
}
@keyframes show-bar-five {
  0% {
    width: 0;
  }
  100% {
    width: 10%;
  }
}

ul {
  list-style-position: inside;
}
</style>
