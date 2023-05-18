<template>
  <div>
    <nav class="navbar navbar-expand-lg align-self-center fixed-top" :class="$store.state.theme == 'light' ? 'bg-dark bg-opacity-75':'bg-light bg-opacity-75'">
        <div class="collapse container-fluid navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <h1 class="nav-link active mb-0 p-0" aria-current="page" href="#">About me</h1>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
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
    components:{darkLightModeVue}

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