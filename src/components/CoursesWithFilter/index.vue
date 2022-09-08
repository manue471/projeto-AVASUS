<template>
  <div class="courses-filter">
    <div class="card-grid">
      <div
        class="card"
        v-for="course in cardArray"
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
                :active-color="'#7DC143'"
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
  public filter:
    | string
    | "Especialização"
    | "Módulo de extensão"
    | "Síflis e outras ist"
    | "Covid 19"
    | "Preceptoria";

  constructor() {
    super();
    this.filter = "";
  }

  // Computed:
  public get courseId(): any {
    return this.$route.params.id;
  }

  // Props:
  @Prop({
    required: false,
  })
  readonly categorieArray!: any[];
  @Prop({
    required: true,
  })
  readonly cardArray!: CoursesModel[];
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
  max-width: 21.875rem;
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
  color: #7dc143;
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
  gap: 4rem;
}

a {
  display: flex;
  align-self: flex-end;
  text-decoration: none;
  color: #d16fff;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
