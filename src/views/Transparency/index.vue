<template>
  <div class="transparency">
    <h1>Transparência</h1>

    <geral-data :transparencyArrayList="transparency">
      <GChart
        :type="mapChartType"
        :data="mapData"
        :options="mapChartOptions"
        :settings="mapSettings"
        slot="map"
      >
      </GChart>

      <GChart
        type="PieChart"
        slot="pizza"
        :data="pieChartData"
        :options="pieChartOptions"
      >
        >
      </GChart>
    </geral-data>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Components
import GeralData from "@/components/GeralData/index.vue";
import { GChart } from "vue-google-charts/legacy";

// Services
import TransparencyService from "@/services/rest/TransparencyService";
import { TransparencyModel } from "@/models/Transparency";
import { UsersByStateModel } from "@/models/UsersByState";
import { UsersByCourseModel } from "@/models/UsersByCourse";

// Services Instances
const transparencyService = new TransparencyService();

type MapChartOptions = {
  width: number;
  height: number;
  region?: string;
  resolution?: string;
  colorAxis?: {
    colors: string[];
  };
  displayMode?: string;
  datalessRegionColor?: string;
  backgroundColor?: string;
};

type Settings = {
  packages: string[];
  mapsApiKey: string;
};

type PieChartOptions = {
  width: string;
  height: string;
  backgroundColor: string;
  slices?: {
    0: { color: string };
    1: { color: string };
    2: { color: string };
    3: { color: string };
  };
};

@Component({
  components: {
    GeralData,
    GChart,
  },
})
export default class Transparency extends Vue {
  public transparency: TransparencyModel;
  public categories: string[];

  // Map Chart Settings
  public mapChartType: string;
  public mapChartData: [string, number | string][];
  public mapChartOptions: MapChartOptions;
  public mapSettings: Settings;
  public mapData: [string, number | string][];

  // Pie Chart Settings
  public pieChartData: [string, number | string][];
  public pieChartOptions: PieChartOptions;

  constructor() {
    super();
    this.transparency = new TransparencyModel();
    this.categories = [];

    // Map
    this.mapChartData = [];
    this.mapChartType = "GeoChart";
    this.mapChartOptions = {
      width: 500,
      height: 500,
      region: "BR",
      resolution: "provinces",
      colorAxis: {
        colors: ["#eeb7b7", "#F6303F"],
      },
      datalessRegionColor: "transparent",
      backgroundColor: "#f5f5f7",
      // displayMode: 'markers'
    };
    this.mapSettings = {
      packages: ["geochart"],
      mapsApiKey: "AIzaSyDfyTTr9IyM_NDvJaBAIFE6yhTGxyJP8Vw",
    };
    this.mapData = [["Estado", "Usuários por Estado"]];

    // Pie
    this.pieChartData = [["Curso", "Usuários por curso"]];
    this.pieChartOptions = {
      width: "480",
      height: "550",
      backgroundColor: "#f5f5f7",
      slices: {
        0: { color: '#707070'},
        1: { color: '#F6303F' },
        2: { color: '#FFFFFF' },
        3: { color: '#2F2E41' }
      }
    };
  }

  // Computed
  public get states() {
    return this.transparency.usuarios_por_estado.map(
      (data: UsersByStateModel) => data.estados
    );
  }

  public get usersPerState() {
    return this.transparency.usuarios_por_estado.map(
      (data: UsersByStateModel) => data.usuarios_totais
    );
  }

  public get usersPerCourse(): number[] {
    return this.transparency.usuarios_por_curso.map(
      (data: UsersByCourseModel) => data.usuarios
    );
  }

  public get courses(): string[] {
    return this.transparency.usuarios_por_curso.map(
      (data: UsersByCourseModel) => data.curso
    );
  }

  // Methods
  public async handleGetPartners() {
    const { data } = await transparencyService.getAll();

    if (data) {
      this.transparency = data as TransparencyModel;
    }
  }

  public handleMapChartData(users: any[], states: any[]) {
    if (users.length && states.length) {
      for (const index in users) {
        this.mapData.push([`BR-${states[index]}`, users[index]]);
      }
    }
  }

  public handlePieChartData(courses: string[], users: number[]) {
    if (users.length && courses.length) {
      for (const index in users) {
        this.pieChartData.push([`${courses[index]}`, users[index]]);
      }
    }
  }

  public async mounted(): Promise<void | undefined> {
    await this.handleGetPartners();
    this.handleMapChartData(this.usersPerState, this.states);
    this.handlePieChartData(this.courses, this.usersPerCourse);
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
    color: #F6303F;
  }
}
</style>
