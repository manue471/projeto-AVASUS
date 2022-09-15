<template>
  <div class="application">
    <div class="header">
      <custom-header></custom-header>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
      <custom-footer></custom-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// Components
import CustomHeader from "@/components/Header/index.vue";
import Carousel from "@/components/Carousel/index.vue";
import ModuleCard from "@/components/ModuleCard/index.vue";
import ModuleCardPreview from "@/components/ModuleCardPreview/index.vue";
import CustomFooter from "@/components/Footer/index.vue";

// Services
import CoursesService from "@/services/rest/CoursesService";
import { CoursesModel } from "@/models/CoursesModel";

// Services Instances
const courseService = new CoursesService();

@Component({
  components: {
    HelloWorld,
    CustomHeader,
    Carousel,
    ModuleCard,
    ModuleCardPreview,
    CustomFooter,
  },
})
export default class DashBoardTemplate extends Vue {
}
</script>
<style lang="scss" scoped>
.application {
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 6.25rem 1fr 35rem;
}

.main {
  display: flex;
  height: auto;
  width: 100vw;
  justify-content: center;
  align-items: center;
  
}
</style>
