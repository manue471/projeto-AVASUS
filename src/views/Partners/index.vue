<template>
  <div>
    <h1>Nossos parceiros</h1>
    <div class="partners">
      <PartnerCard
        v-for="partner in partners"
        :key="partner.id"
        :partnerImage="partner.capa"
        :partnerTitle="partner.titulo"
      ></PartnerCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Components
import PartnerCard from "@/components/PartnerCard/index.vue";

// Services
import CoursesService from "@/services/rest/CoursesService";
import PartnersService from "@/services/rest/PartnersService";

import { CoursesModel } from "@/models/CoursesModel";
import { CreditsModel } from "@/models/Credits";
import { PartnersModel } from "@/models/Partners";

// Services Instances
const partnersService = new PartnersService();

@Component({
  components: {
    PartnerCard,
  },
})
export default class Partners extends Vue {
  public partners: PartnersModel[];
  public categories: string[];

  constructor() {
    super();
    this.partners = Array(new PartnersModel());
    this.categories = [];
  }

  // Methods
  public async handleGetPartners(): Promise<PartnersModel[] | undefined> {
    const { data } = await partnersService.getAll();

    if (data) {
      return (this.partners = data);
    }
  }

  public async mounted(): Promise<PartnersModel[] | undefined> {
    return await this.handleGetPartners();
  }
}
</script>
<style lang="scss" scoped>
.partners {
  display: grid;
  width: 100vw;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4rem;
}
  h1 {
    margin: 1.2rem 0;
    color: #7dc143;
  }
</style>
