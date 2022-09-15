<template>
  <div class="preview-filter">
    <slot></slot>
    <div v-for="course in moduleArray.slice(0, 3)" :key="course.id" class="card">
      <div class="card-header">
        <img :src="course.capa" alt="capa do módulo" />
      </div>
      <div>
        <div class="texts">
          <h3>{{ course.titulo }}</h3>
          <p class="card-partners">{{ course.parceiros }}</p>
        </div>
      </div>
      <div class="card-body">
        <div class="icon-infos">
          <span>
            <img src="/assets/people.svg" alt="" />
            <p>{{ course.matriculados }}</p>
          </span>
          <span>
            <img src="/assets/clock.svg" alt="" />
            <p>{{ course.duracao }}</p>
          </span>
          <span>
            <star-rating
              :rating="course.avaliacao"
              :star-size="30"
              :active-color="'#F6303F'"
              :readonly="true"
              :increment="0.01"
              :fixed-points="2"
            />
          </span>
        </div>
        <router-link :to="{ path: `single-module/${course.id}` }" class="normal see-more"
          >Ver módulo</router-link
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

// Libraries:
import StarRating from "vue-star-rating";
// Não tinha o @types desta biblioteca, por isso o erro persiste

@Component({
  components: {
    StarRating,
  },
})
export default class ModuleCardPreview extends Vue {
  // Props:
  @Prop({
    required: true
  })
  readonly moduleArray!: CoursesModel[];
}
</script>

<style lang="scss" scoped>
.card {
  background: #f5f5f7;
  display: flex;
  height: max-content;
  width: max-content;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  margin: 1rem 0;
  max-width: 63rem;
}

.card-header {
  height: 50%;
  text-align: left;
  padding: 1rem;

  img {
    width: 9rem;
    height: 7.5rem;
    border-radius: 1.23rem;
  }
}

h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-partners {
  text-align: left;
  width: 100%;
  color: #f6303f;
  font-size: 13px;
}

.card-body {
  text-align: start;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  button {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
  }
  flex-direction: row;
  padding: 1rem;
}

.texts {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
  max-width: 17rem;
}

.icon-infos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  span {
    img {
      height: 1.3rem;
      width: 1.5rem;
    }
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
  }
}

a {
  display: flex;
  align-self: flex-end;
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.see-more {
  margin-left: auto;
}
</style>
