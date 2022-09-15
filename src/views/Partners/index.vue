<template>
  <div>
    <h1>Nossos parceiros</h1>
    <div class="partners">
      <paginate v-slot="partners" :value="partners">
        <partner-card
          :partnersArray="partners"
        ></partner-card>
      </paginate>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Components
import PartnerCard from "@/components/PartnerCard/index.vue";
import Paginate from "@/components/Paginate/index.vue";

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
    Paginate
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
      return (this.partners = data as PartnersModel[]);
    }
  }

  public async mounted(): Promise<PartnersModel[] | undefined> {
    return await this.handleGetPartners();
  }
}
</script>
<style lang="scss" scoped>
.partners {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  text-align: start;
}
  h1 {
    margin: 1.2rem 0;
    color: #F6303F;
    text-align: left;
    padding: 0 4rem;
    width: 100%;
  }
</style>
