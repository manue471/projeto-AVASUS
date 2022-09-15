<template>
  <div class="partner">
    <div class="partner-header" v-for="partner in partnersArray" :key="partner.id">
      <img :src="partner.capa" alt="capa do módulo" />

      <h2>{{ partner.titulo }}</h2>
    </div>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import { PartnersModel } from "@/models/Partners";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

// Icons:
@Component({
  components: {}
})
export default class ModuleCard extends Vue {
  // Props:
  @Prop({
    required: true
  })
  readonly partnersArray!: PartnersModel[]
}
</script>

<style lang="scss" scoped>
.partner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4rem;
  padding: 0;
  max-width: 80%;
  margin: 2rem 0;
}

.partner-header {
  height: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    max-width: 19rem;
    max-height: 12.5rem;
    height: 100%;
    width: 100%;
    border-radius: 1.23rem;
  }

  h2 {
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-top: #F6303F 2px solid;
  }
}

.card-partners {
  text-align: left;
  width: 100%;
  color: #7dc143;
  font-size: 13px;
}

</style>
