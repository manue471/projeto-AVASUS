<template>
  <div class="single-module">
    <div class="banner">
      <img src="/assets/bannerImage.png" alt="" />
      <div class="header-text">
        <h1>{{ course?.titulo }}</h1>
        <h2>{{ course?.parceiros }}</h2>
      </div>
    </div>
    <div class="single-module-body">
      <h1>Informações Gerais do Curso</h1>
      <div class="module-icons">
        <span>
          <img src="/assets/clock.svg" alt="" />
          <p>{{ course?.duracao }}</p>
        </span>
        <span>
          <img src="/assets/calendar.svg" alt="" />
          <p>{{ course?.criado_em }}</p>
        </span>
        <span>
          <img src="/assets/clock.svg" alt="" />
          <p>{{ course?.matriculados }} alunos matriculados</p>
        </span>
        <span>
          <star-rating
            :rating="course?.avaliacao"
            :star-size="30"
            :active-color="'#F6303F'"
            :readonly="true"
            :increment="0.01"
            :fixed-points="2"
          />
          <p>({{ course?.numero_avaliacoes }} avaliações)</p>
        </span>
      </div>
      <div class="modules-info">
        <div>
          <h2>Sobre o curso</h2>
          <p>
            {{ course?.sobre }}
          </p>
        </div>
        <div class="goals">
          <h2>Objetivos</h2>
          <span>
            <h4>Objetivo Geral</h4>
            <p>
              {{ course?.objetivo_geral }}
            </p>
          </span>
          <span>
            <h4>Objetivos Específicos</h4>
            <p>
              {{ course?.objetivo_especifico }}
            </p>
          </span>
        </div>
        <div>
          <h2>Recursos educacionais</h2>
          <p>
            Serão utilizados textos no formato de PDF, vídeos, ilustrações,
            infográficos, dentre outros recursos.
          </p>
        </div>
        <div class="credits">
          <h2>Créditos</h2>
          <div>
            <img
              v-for="banner in creditsImage"
              :key="banner.titulo"
              :src="banner.capa"
              alt="Capa dos créditos"
            />
          </div>
        </div>
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
import StarRating from "vue-star-rating";

// Services
import CoursesService from "@/services/rest/CoursesService";
import { CoursesModel } from "@/models/CoursesModel";
import { CreditsModel } from "@/models/Credits";

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
    StarRating,
  },
})
export default class SingleModule extends Vue {
  public course: CoursesModel | undefined;

  constructor() {
    super();
    this.course = new CoursesModel();
  }

  // Computeds:
  public get courseId(): any {
    return this.$route.params.id;
  }

  public get creditsImage(): CreditsModel[] | undefined {
    const images = this.course?.creditos.filter((credits) => credits);
    return images;
  }

  // Methods
  public async handleGetCourses(): Promise<CoursesModel | undefined> {
    console.log(this.courseId);
    const { data } = await courseService.getOne(this.courseId);

    this.course = data;
    if (this.course) {
      this.course.avaliacao = parseFloat(`${this.course.avaliacao}`);
    }
    return this.course;
  }

  public async mounted(): Promise<CoursesModel | undefined> {
    return await this.handleGetCourses();
  }
}
</script>
<style lang="scss" scoped>
.single-module {
  width: 100vw;
  h1 {
    color: #F6303F;
  }
}
.banner {
  width: 100%;
  min-height: 17rem;
  height: 100%;
  display: flex;
  background: #F6303F;
  align-items: center;
  justify-content: center;
  position: relative;
  .header-text {
    z-index: 2;

    h1 {
      margin: 2rem 0;
      color: white;
      z-index: 3;
      font-size: 2.5rem;
      font-weight: bold;
    }
    h2 {
      color: white;
      font-weight: 400;
      font-size: 1.8rem;
    }
  }
  
  img {
    // filter: opacity(0.6);
    mix-blend-mode: multiply;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}

.single-module-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  h1 {
    margin: 1rem 0;
  }
}

.modules-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70rem;

  p {
    font-size: 1rem;
    line-height: 1.125rem;
  }

  h4 {
    margin: 1rem 0;
  }

  h2 {
    font-weight: 600;
    color: #F6303F;
    margin: 1rem 0;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .goals {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    justify-content: center;
    span {
      align-items: flex-start;
      width: 100%;
    }
    h4 {
      margin-bottom: 1rem;
    }
  }
}
.module-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  span {
    margin: 1rem 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }
}

.credits {
  display: grid;
  margin: 1rem 0;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    img {
      max-width: 13.875rem;
      width: 100%;
      height: auto;
    }
  }
}
</style>
