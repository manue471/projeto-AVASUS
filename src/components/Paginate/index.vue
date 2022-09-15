<template>
  <div class="paginate">
    <slot v-bind="displayedContent"></slot>
    <div class="btn-group">
      <button class="outline" type="button" v-if="page !== 1" @click="page--">
        Anterior
      </button>
      <button
        :class="page == pageNumber ? 'active' : ''"
        v-for="pageNumber in pages.slice(page - 1, page + 5)"
        @click="page = pageNumber"
        :key="pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button
        class="outline"
        type="button"
        @click="page++"
        v-if="page < pages.length"
      >
        Próximo
      </button>
    </div>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import { CoursesModel } from "@/models/CoursesModel";
import Vue from "vue";
import { Component, Emit, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Paginate extends Vue {
  public page: number;
  public perPage: number;
  public pages: number[];

  constructor() {
    super();
    this.page = 1;
    this.perPage = 6;
    this.pages = [];
  }

  // Props:
  @Prop()
  readonly value!: any[];

  // Computed:
  public get displayedContent() {
    return this.paginate(this.value);
  }

  public set displayedContent(value: any[]) {
    this.$emit("input", value);
  }

  // Methods
  public paginate(content: any[]) {
    let page = this.page;
    let perPage = this.perPage;
    let from = page * perPage - perPage;
    let to = page * perPage;
    return content.slice(from, to);
  }

  public setContent() {
    let numberOfPages = Math.ceil(this.value.length / this.perPage);
    for (let i = 1; i < numberOfPages; i++) {
      this.pages.push(i);
    }
  }

  // Life Cycle
  @Watch("value")
  public handlePages() {
    this.setContent();
  }

  public mounted() {
    console.log(this.displayedContent);
    this.$emit("update:value", this.displayedContent);
  }
}
</script>

<style lang="scss" scoped>
.paginate {
  display: flex;
  height: 100%;
  width: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn-group {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  justify-content: center;
  margin-bottom: 2rem;

  button {
    background: #f1dadb;
    color: #b9232f;
    border: none;
    border-radius: 0;
    height: 2rem;
    padding: 10px 15px;
    border-radius: 5px;

    &:hover {
      background: #b9232f;
      color: white;
    }
  }

  .active {
    background: #b9232f;
    color: white;
  }
}
</style>
