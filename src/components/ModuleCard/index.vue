<template>
  <div class="card">
    <div class="card-header">
      <img :src="cardImage" alt="capa do módulo" />

      <h2>{{ cardTitle }}</h2>
    </div>
    <p class="card-partners">{{ cardPartners }}</p>
    <div class="card-body">
      <div class="icon-infos">
        <span>
          <img src="../../../public/assets/people.svg" alt="" />
          <p>{{ cardPeople }}</p>
        </span>
        <span>
          <img src="../../../public/assets/clock.svg" alt="" />
          <p>{{ cardDuration }}</p>
        </span>
        <span>
         <start-rating rating />
          <p>{{ cardRate }}</p>
        </span>
      </div>
      <p>{{ cardDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

// Icons:
@Component({
  components: {}
})
export default class ModuleCard extends Vue {
  // Props:
  @Prop({
    default: "/assets/sifilisPhoto.png",
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
    default: "5.0",
    required: false,
  })
  readonly cardRate!: string;

  @Prop({
    default:
      "O módulo Sífilis: Vigilância Epidemiológica tem como objetivo promover uma atualização dos profissionais de saúde acerca dos conceitos essenciais nessa área de conhecimento, com foco na sífilis...",
    required: false,
  })
  readonly cardDescription!: string;
}
</script>

<style lang="scss" scoped>
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
  }
}

</style>
