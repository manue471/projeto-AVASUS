<template>
  <div class="breadcrumb">
    <ul>
      <li
        v-for="(breadcrumb, idx) in breadCrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{ linked: !!breadcrumb.link }"
        :style="{ color: breadcrumbColor }"
      >
        {{ breadcrumb.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component({})
export default class Breadcrumb extends Vue {
  public breadCrumbList: Array<any>;

  constructor() {
    super();
    this.breadCrumbList = [];
  }

  //Props:
  @Prop({
    default: 'black',
    required: false
  })
  readonly breadcrumbColor!: string;

  // Methods:
  public routeTo(pRouteTo: any): any {
    if (this.breadCrumbList[pRouteTo].link)
      this.$router.push(this.breadCrumbList[pRouteTo].link);
  }

  public updateList(): void {
    this.breadCrumbList = this.$route?.meta?.breadcrumb;
  }

  // Life Cycle
  mounted(): void {
    this.updateList();
  }

  // Watchers
  @Watch("$route")
  public routerWatch(): void {
    this.updateList();
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul > li {
  display: flex;
  float: left;
  width: auto;
  font-size: 0.8em;
  font-weight: normal;
  align-items: center;
  color: black;
}
ul > li:not(:last-child)::after {
  content: "/";
  float: right;
  color: black;
  font-size: 0.9rem;
  margin: 0 0.3em;
  cursor: default;
}
.linked {
  cursor: pointer;
  font-size: 0.8em;
  font-weight: normal;
  text-decoration: underline;
}
</style>
