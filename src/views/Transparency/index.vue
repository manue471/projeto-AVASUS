<template>
  <div class="transparency">
    <h1>Transparência</h1>

    <geral-data :transparencyArrayList="transparency"></geral-data>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// Components
import GeralData from "@/components/GeralData/index.vue";


// Services
import TransparencyService from "@/services/rest/TransparencyService";
import { TransparencyModel } from "@/models/Transparency";

// Services Instances
const transparencyService = new TransparencyService();

@Component({
  components: {
    GeralData,
  },
})
export default class Transparency extends Vue {
  public transparency: TransparencyModel[];
  public categories: string[];

  constructor() {
    super();
    this.transparency = Array(new TransparencyModel());
    this.categories = [];
  }

  // Methods
  public async handleGetPartners(): Promise<TransparencyModel[] | undefined> {
    const { data } = await transparencyService.getAll();
    console.log(data);
    
    if (data) {
      return (this.transparency = data);
    }
  }

  public async mounted(): Promise<TransparencyModel[] | undefined> {
    return await this.handleGetPartners();
  }
}
</script>
<style lang="scss" scoped>
.transparency {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    padding: 2rem;
    color: #7DC143
  }
}
</style>
