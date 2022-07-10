<template>
  <div class="card">
    <div class="card-header">
      <img :src="cardImage" alt="capa do módulo" />
    </div>
    <div>
      <div class="texts">
        <h3 >{{ cardTitle }}</h3 >
        <p class="card-partners">{{ cardPartners }}</p>

      </div>
    </div>
    <div class="card-body">
      <div class="icon-infos">
        <span>
          <img src="/assets/people.svg" alt="" />
          <p>{{ cardPeople }}</p>
        </span>
        <span>
          <img src="/assets/clock.svg" alt="" />
          <p>{{ cardDuration }}</p>
        </span>
        <span>
          <star-rating :rating="cardRate" :star-size="30 " :active-color="'#7DC143'" :readonly="true" :increment="0.01" />
        </span>
      </div>
        <router-link :to="{ path: `single-module/${cardId}` }" class="normal">Ver módulo</router-link>
    </div>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

// Libraries: 
import StarRating from 'vue-star-rating';
// Não tinha o @types desta biblioteca, por isso o erro persiste

@Component({
  components: {
    StarRating
  },
})
export default class ModuleCardPreview extends Vue {
  // Props:
  @Prop({
    default: "assets/sifilisPhoto.png",
    required: false,
  })
  readonly cardImage!: string;

  @Prop({
    default: "Sífilis: Vigilância Epidemiológica",
    required: false,
  })
  readonly cardTitle!: string;

  @Prop({
    default: "LAIS / EBSERH",
    required: false,
  })
  readonly cardPartners!: string;

  @Prop({
    default: 27.645,
    required: false,
  })
  readonly cardPeople!: number;

  @Prop({
    default: "12h",
    required: false,
  })
  readonly cardDuration!: string;

  @Prop({
    default: 3.5,
    required: false,
  })
  readonly cardRate!:  number;

  @Prop({
    default:
      "O módulo Sífilis: Vigilância Epidemiológica tem como objetivo promover uma atualização dos profissionais de saúde acerca dos conceitos essenciais nessa área de conhecimento, com foco na sífilis...",
    required: false,
  })
  readonly cardDescription!: string;
  @Prop({
    required: true,
  })
  readonly cardId!: number;
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
  justify-content: flex-start;
  gap: 1rem;
}

.card-header {
  height: 50%;
  text-align: left;
  padding: 1rem;

  img {
    width: 8rem;
    height: 7.5rem;
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
  display: flex;
  width: 100%;
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
  margin-bottom: 1rem;
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
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
</style>
