<template>
  <div class="courses-filter">
    <div class="categorie-filter">
      <span v-for="category in categorieArray.slice(0, 13)" :key="category" class="category-box" >
        <a :class="selectedCategory == category && 'border'" @click="filterByCategorie(category, cardArray)">{{ category }}</a>
      </span>
    </div>
    <div class="card-grid">
      <div
        class="card"
        v-for="course in paginatedArray"
        :key="course.id"
      >
        <div class="card-header">
          <img :src="course.capa" alt="capa do módulo" />
        </div>
        <p class="card-partners">{{ course.parceiros }}</p>
        <div class="card-body">
          <div class="icon-infos">
            <span>
              <img src="../../../public/assets/people.svg" alt="" />
              <p>{{ course.matriculados }}</p>
            </span>
            <span>
              <img src="../../../public/assets/clock.svg" alt="" />
              <p>{{ course.criado_em }}</p>
            </span>
            <span>
              <star-rating
                :rating="course?.avaliacao"
                :star-size="30"
                :active-color="'#F6303F'"
                :readonly="true"
                :increment="0.01"
              />
            </span>
          </div>
          <p>{{ course.resumo }}</p>
        </div>
        <router-link :to="{ path: `single-module/${course.id}` }"
          >Ver curso</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import { CoursesModel } from "@/models/CoursesModel";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import StarRating from "vue-star-rating";

// Icons:
@Component({
  components: {
    StarRating,
  },
})
export default class CoursesWIthFilter extends Vue {
  public selectedCategory: string;
  constructor() {
    super();
    this.selectedCategory = '';
  }

  // Props:
  @Prop({
    required: false,
  })
  readonly categorieArray!: string[];
  @Prop({
    required: true,
  })
  paginatedArray!: CoursesModel[];
  @Prop({
    required: true,
  })
  readonly cardArray!: CoursesModel[];

  // Computed:
  public get courseId(): any {
    return this.$route.params.id;
  }

  // Methods:
  public filterByCategorie(category: string, arrayToFilter: CoursesModel[]) {
    const response = arrayToFilter.filter((item) => item.cateroria == category)
    this.selectedCategory = category
    this.paginatedArray = response.slice(0, 6)
  }
}
</script>

<style lang="scss" scoped>
.courses-filter {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  gap: 2.5rem;
  margin: 1.5rem 0;
  li {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: black;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    &:active, &:hover {
      color: #d16fff;
      border-bottom: 3px solid #d16fff;
    }
  }
}

.card {
  display: flex;
  height: max-content;
  max-width: 20rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

.card-header {
  height: 50%;
  text-align: left;

  img {
    max-width: 21.875rem;
    max-height: 12.5rem;
    height: 100%;
    width: 100%;
    border-radius: 1.23rem;
  }
}

.card-partners {
  text-align: left;
  width: 100%;
  color: #F6303F;
  font-size: 13px;
}

.card-body {
  text-align: start;
}

.icon-infos {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
  span {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
    img {
      max-height: 1.1rem;
    }
  }
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6rem;
}

a {
  display: flex;
  align-self: flex-end;
  text-decoration: none;
  color: #2F2E41;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.border { 
  border-bottom: #707070 2px solid;
  color: #707070;
}
.categorie-filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2.5rem;
}
</style>
