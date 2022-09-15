<template>
  <div class="modules">
    <h1>Módulos Educacionais</h1>
    <paginate v-slot="paginatedCourses" :value="paginatedCourses">
      <courses-with-filter
        :categorieArray="categorieArrayList"
        :paginatedArray="paginatedCourses"
        :cardArray="courses"
      ></courses-with-filter>
    </paginate>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

// Components
import CoursesWithFilter from "@/components/CoursesWithFilter/index.vue";
import Paginate from "@/components/Paginate/index.vue";

// Services
import CoursesService from "@/services/rest/CoursesService";
import { CoursesModel } from "@/models/CoursesModel";
import { CreditsModel } from "@/models/Credits";

// Services Instances
const courseService = new CoursesService();

@Component({
  components: {
    CoursesWithFilter,
    Paginate,
  },
})
export default class SingleModule extends Vue {
  public paginatedCourses: CoursesModel[];
  public categories: string[];
  public courses: CoursesModel[];

  constructor() {
    super();
    this.paginatedCourses = Array(new CoursesModel());
    this.categories = [];
    this.courses = [];
  }

  // Computeds:
  public get courseId(): any {
    return this.$route.params.id;
  }

  public get categorieArrayList(): string[] {
    return [...new Set(this.courses.map((course) => course.cateroria))];
  }

  // Methods
  public async handleGetCourses(): Promise<CoursesModel[] | undefined> {
    const { data } = await courseService.getAll();

    if (data) {
      (data as CoursesModel[]).map((course: any) => {
        course.avaliacao = Number(course.avaliacao);
      });
      this.paginatedCourses = data as CoursesModel[];
      return (this.courses = data as CoursesModel[]);
    }
  }

  public async mounted(): Promise<void> {
    await this.handleGetCourses();
  }

  @Watch("courses")
  public async handleCourses() {
    if (this.courses.length == 220) {
      return
    } else {
      this.paginatedCourses = this.courses
    }
  }
}
</script>
<style lang="scss" scoped>
.modules {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  h1 {
    margin: 1.2rem 0;
    color: #F6303F;
  }
}
</style>
