<template>
  <div class="modules">
    <h1>Módulos Educacionais</h1>
    JwPagination
    <courses-with-filter :cardArray="courses"></courses-with-filter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// Components
import CoursesWithFilter from "@/components/CoursesWithFilter/index.vue";

// Services
import CoursesService from "@/services/rest/CoursesService";
import { CoursesModel } from "@/models/CoursesModel";
import { CreditsModel } from "@/models/Credits";

// Services Instances
const courseService = new CoursesService();

@Component({
  components: {
    CoursesWithFilter,
  },
})
export default class SingleModule extends Vue {
  public courses: CoursesModel[];
  public categories: string[];

  constructor() {
    super();
    this.courses = Array(new CoursesModel());
    this.categories = [];
  }

  // Computeds:
  public get courseId(): any {
    return this.$route.params.id;
  }

  public get categorieArrayList(): CoursesModel[] {
    return this.courses.filter((course) => course.cateroria);
  }

  // Methods
  public async handleGetCourses(): Promise<CoursesModel[] | undefined> {
    const { data } = await courseService.getAll();

    if (data) {
      data?.map((course: any) => {
        course.avaliacao = Number(course.avaliacao);
      });
      return (this.courses = data);
    }
  }

  public async mounted(): Promise<CoursesModel[] | undefined> {
    console.log(this.categorieArrayList);

    return await this.handleGetCourses();
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
    color: #7dc143;
  }
}
</style>
