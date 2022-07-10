<template>
  <div class="home">
    <div class="top-content">
      <h1>Especialização PEPSUS</h1>
      <p>Conheça o curso de Especialização em Saúde da Família</p>
      <button class="normal" @click="$router.push({ path: `single-module/${2}` })">Acesse</button>
      <carousel :carouselItems="carouselImages" />
    </div>

    <div class="modules-preview">
      <h2>Módulos Educacionais</h2>
      <div class="modules-preview-nav">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Mais populares</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">Mais bem avaliados</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">Mais recentes</router-link>
          </li>
        </ul>
      </div>
      <div class="modules-preview-cards">
        <module-card-preview
          v-for="course in courses?.slice(0, 3)"
          :key="course.id"
          :cardImage="course.capa"
          :cardTitle="course.titulo"
          :cardPartners="course.parceiros"
          :cardPeople="course.matriculados"
          :cardRate="course.avaliacao"
          :cardId="course.id"
        />
      </div>
      <div class="see-more">
        <button class="normal" @click="$router.push({ name: 'modules' })">Ver mais</button>
      </div>
    </div>

    <div class="home-partners">
      <h2>Parceiros</h2>
      <div class="partners-card">
        <span>
          <h3>Governo do RN</h3>
          <p>Governo do Estado do Rio Grande do Norte.</p>
        </span>
        <span>
          <h3>SESAP</h3>
          <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
        </span>
        <span>
          <h3>UFRN</h3>
          <p>Universidade Federal do Rio Grande do Norte.</p>
        </span>
        <span>
          <h3>HUOL</h3>
          <p>
            Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade
            Federal do Rio Grande do Norte).
          </p>
        </span>
      </div>
    </div>
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
export default class HomeView extends Vue {
  public courses: CoursesModel[] | undefined;
  public carouselImages: string[];

  constructor() {
    super();
    this.courses = Array(new CoursesModel());
    this.carouselImages = [
      "/assets/dashboardImage.png",
      "/assets/dashboardImage.png",
      "/assets/dashboardImage.png",
    ];
  }

  // Methods
  public async handleGetCourses(): Promise<CoursesModel[] | undefined> {
    const { data } = await courseService.getAll();
    data?.map((course: any) => {
      course.avaliacao = Number(course.avaliacao);
    });

    return (this.courses = data);
  }

  public async mounted(): Promise<CoursesModel[] | undefined> {
    return await this.handleGetCourses();
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .top-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: #ececec;
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3.75rem;
      color: #7dc143;
    }
    p {
      font-size: 1.875rem;
      line-height: 2rem;
    }
  }
  h2 {
    color: #7dc143;
    margin: 1.5rem 0;
    font-size: 1.875rem;
  }

  .modules-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .modules-preview-nav ul {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      list-style: none;
      gap: 3rem;
      margin-bottom: 1rem;
      text-align: left;

      li {
        font-size: 1.125rem;
        font-weight: 600;
        text-decoration: none;
        color: black;
        height: 2rem;

        a {
          text-decoration: none;
          color: black;
        }

        &:first-child {
          border-bottom: 2px solid #d16fff;
        }
      }
    }
    .modules-preview-cards {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .see-more {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 3rem 0;
  }
  .home-partners {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .partners-card {
    display: flex;
    flex-direction: row;
    background: #f5f5f7;
    align-items: center;
    justify-content: space-around;
    height: 13.125rem;
    max-width: 70rem;
    margin: 2rem 0;

    span {
      display: flex;
      flex-direction: column;
      gap: 1rem;overflow-wrap: break-word;
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
}
</style>
