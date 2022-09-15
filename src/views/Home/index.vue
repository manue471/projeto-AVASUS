<template>
  <div class="home">
    <div class="top-content">
      <carousel :carouselItems="carouselImages" />
    </div>

    <div class="modules-preview">
      <h2>Módulos Educacionais</h2>

      <div class="modules-preview-cards">
        <module-card-preview
          :moduleArray="courses"
        >
          <div class="modules-preview-nav">
            <ul>
              <li>
                <a :class="active == 1 ? 'border' : ''" @click="filterByPopular(1)">Mais populares</a>
              </li>
              <li>
                <a :class="active == 2 ? 'border' : ''" @click="filterByRating(2)">Mais bem avaliados</a>
              </li>
              <li>
                <a :class="active == 3 ? 'border' : ''" @click="filterByRecent(3)">Mais recentes</a>
              </li>
            </ul>
          </div>
        </module-card-preview>
      </div>
      <div class="see-more">
        <button class="normal" @click="$router.push({ name: 'modules' })">
          Ver mais
        </button>
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
  public active: number = 1 | 2 | 3

  constructor() {
    super();
    this.courses = Array(new CoursesModel());
    this.carouselImages = [
      "/assets/dashboardImage.png",
      "https://lais.huol.ufrn.br/wp-content/uploads/2020/04/thumb-default.jpg",
      "https://lais.huol.ufrn.br/wp-content/uploads/2022/04/salus.png",
    ];
  }

  // Methods
  public async handleGetCourses(): Promise<void> {
    const { data } = await courseService.getAll();
    (data as CoursesModel[]).map((course: any) => {
      course.avaliacao = Number(course.avaliacao);
    });

    this.courses = data as CoursesModel[];
  }
  public filterByRecent(active: number) {
    this.courses?.sort((a, b) => {
      const dateA = new Date(a.criado_em?.split("/").reverse().join("-"));
      const dateB = new Date(b.criado_em?.split("/").reverse().join("-"));
      if (dateA > dateB) {
        return -1;
      }
      return +1;
    });
    this.active = active
  }

  public filterByRating(active: number) {
    this.courses?.sort((a, b) => {
      const ratingA = a.avaliacao;
      const ratingB = b.avaliacao;
      if (ratingA > ratingB) {
        return -1;
      }
      return +1;
    });
    this.active = active

  }

  public filterByPopular(active: number) {
    this.courses?.sort((a, b) => {
      const ratingA = a.matriculados;
      const ratingB = b.matriculados;
      if (ratingA > ratingB) {
        return -1;
      }
      return +1;
    });
    this.active = active
  }

  public async mounted(): Promise<void> {
    await this.handleGetCourses();
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
    background: #ececec;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3.75rem;
      color: #F6303F;
    }
    p {
      font-size: 1.875rem;
      line-height: 2rem;
    }
  }
  h2 {
    color: #F6303F;
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
          height: 1.7rem;
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
      gap: 1rem;
      overflow-wrap: break-word;
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
}

.border {
  border-bottom: #707070 2px solid;
  color: #707070;
}
</style>
