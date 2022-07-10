<template>
  <div class="partner">
    <div class="partner-header">
      <img :src="partnerImage" alt="capa do módulo" />

      <h2>{{ partnerTitle }}</h2>
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
  readonly partnerImage!: string;

  @Prop({
    default: "Sífilis: Vigilância Epidemiológica",
    required: false,
  })
  readonly partnerTitle!: string;
}
</script>

<style lang="scss" scoped>
.partner {
  display: flex;
  height: max-content;
  max-width: 21.875rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
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

</style>
