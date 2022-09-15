<template>
  <main class="carousel-component">
    <div
      class="carousel-container"
      :style="{ backgroundImage: `url(${carouselItems[carouselIndex]})` }"
    >
      <img
        src="/assets/chvronLeft.svg"
        class="prev-button"
        @click="handleCarouselDirection(0)"
      />
      <div class="inside-logo">
        <img src="/assets/AVASUSLogo.svg" alt="" class="avasus" />
        <div class="vertical-hr"></div>
        <img src="/assets/AVASUSText.svg" alt="" class="avasus" />
      </div>
      <img
        src="/assets/chvronRight.svg"
        class="next-button"
        @click="handleCarouselDirection(1)"
        alt=""
      />
    </div>
  </main>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

// Enums
enum CarouselDirecitons {
  left,
  right,
}

@Component({
  components: {},
})
export default class Carousel extends Vue {
  @Prop({ required: false }) carouselItems!: string[];
  public carouselIndex = 0;
  public carouselVisibleItemsQuantity = 1;

  // Computeds:
  public handleCarouselDirection(direction: number): void {
    direction === CarouselDirecitons.left &&
      this.carouselIndex > 0 &&
      this.carouselIndex--;
    direction === CarouselDirecitons.right &&
      this.carouselIndex < this.carouselItems.length - 1 &&
      this.carouselIndex++;
  }
}
</script>

<style scoped lang="scss">
.carousel-component {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: transparent;
}

.carousel-container {
  width: 100%;
  display: flex;
  min-height: 45rem;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  padding: 0 2rem;
  background-position: center;
  align-content: center;
  filter: opacity(0.6) drop-shadow(0 0 0 black);

  img {
    cursor: pointer;
    align-self: center;
    cursor: pointer;
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
    padding: 0.5rem;
    border-radius: 50%;
    opacity: 2;
  }

  .inside-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    gap: 1rem;
  }

  .vertical-hr {
    border-left: 4px solid white;
    height: 18rem;
    width: 4px;
  }

  .avasus {
    width: 37%;
    height: 50vh;
  }
}

label {
  text-align: center;
  align-self: center;
  line-height: 2.3rem;

  input[type="file"] {
    display: none;
  }
}
</style>