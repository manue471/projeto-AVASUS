<template>
  <div class="paginate">
    <router-view></router-view>
    <div class="marbles" v-for="marbles in currentPage" :key="marbles.id">
      <a class="link-to-page"></a>
    </div>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import { CoursesModel } from "@/models/CoursesModel";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type PaginateItem = {
  name: string,
  value: number
}

@Component({
  components: {
  },
})
export default class Paginate extends Vue {
  public page: number;
  public pageLenght: number;
  public paginateItems: PaginateItem[];

  constructor() {
    super();
    this.page = 0
    this.pageLenght = 6
    this.paginateItems = []
  }

  // Props
  @Prop()
  readonly arrayToPaginate!: CoursesModel[];

  //Computed: 
  public get currentPage() {
    return this.arrayToPaginate.splice(this.page * this.pageLenght, this.pageLenght)
  }
}
</script>

<style lang="scss" scoped>
.paginate {
  display: flex;
  height: 100vh;
  width: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.marbles {
  display: flex;
  flex-direction: row;
  gap: .4rem;

  a {
    text-decoration: none;
    background: #C4C4C4BF;
    height: 1rem;
    width: auto;
    border-radius: 50%;

    &:active {
      width: 3rem;
      color: #D16FFF;
    }
  }
}
</style>
