<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top" :class="$store.state.theme == 'light' ? 'bg-dark':'bg-light'">
        <div class="collapse container-fluid navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><img :src="$store.state.theme=='light' ? 'icons/homeWhite.svg':'icons/homeBlack.svg'" height="24" min-width="24"><p class="align-text-top d-inline">Home</p></a>
                </li>
                <li class="nav-item">
                <button class="nav-link active" aria-current="page" @click="toMyTech()"><img :src="$store.state.theme=='light' ? 'icons/monitorWhite.svg':'icons/monitorBlack.svg'" height="24" min-width="24"><p class="align-text-top d-inline">My thecnologyes</p></button>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><img :src="$store.state.theme=='light' ? 'icons/paperWhite.svg':'icons/paperBlack.svg'" height="24" min-width="24"><p class="align-text-top d-inline">About the app</p></a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/blog"><img :src="$store.state.theme=='light' ? 'icons/codeWhite.svg':'icons/codeBlack.svg'" height="22" min-width="22"> <p class="align-text-top d-inline">Espinosito</p></a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <dark-light-mode-vue class="nav-item"></dark-light-mode-vue>
        </div>
    </nav>
  </div>
</template>

<script>
import darkLightModeVue from '../../UI/darkLightMode.vue';
export default {
    components:{darkLightModeVue},
    data(){
        return{
        }
    },
    methods:{
        toMyTech(){
            if (window.location.origin == window.location.href.slice(0,-1)) {
                const element = document.getElementById('cardTech')
                window.scroll({ behavior: "smooth", top: 995  });
                /* element.scrollIntoView({ behavior: "smooth", block:'start'  }); */
            }else{
                this.$router.push({path:'/'});
                this.$store.state.fromOtherPage = true;
            }
            
        }
    },
    
}
</script>

<style scoped>
/* .colorBar{
    background: rgba(40, 38, 38, 0.8);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
}
.colorBarLight{
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
} */
</style>