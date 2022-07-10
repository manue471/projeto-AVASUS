<template>
  <main class="carousel-component">
    <div class="carousel-container">
      <img src="/assets/chvronLeft.svg" class="prev-button" @click="handleTranslateCarouselItems(0)" />
      <div class="carousel-content">
        <div class="carousel-track">
          <div
            class="carousel-item"
            v-for="item in carouselItems"
            :key="item"
            :style="{ backgroundImage: `url(${item})`}"
          ></div>
        </div>
      </div>
      <img src="/assets/chvronRight.svg" class="next-button" @click="handleTranslateCarouselItems(1)" alt="">
    </div>
  </main>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

// Icons
import ArrowLeft from "vue-material-design-icons/ChevronLeft.vue"
import ArrowRight from "vue-material-design-icons/ChevronRight.vue"

// Enums
enum CarouselDirecitons {
  left,
  right,
}

@Component({
  components: {
  },
})
export default class Carousel extends Vue {
  @Prop({ required: true }) carouselItems!: string[];
  public carouselIndex = 0;
  public carouselVisibleItemsQuantity = 1;

  // Computeds:
  public get carouselItemWidth(): number {
    const carouselItem = document.querySelector(".carousel-item") as HTMLDivElement;
    const itemMargin = 16;
    return carouselItem.offsetWidth + itemMargin;
  }

  public get carouselItemQuantity(): number {
    const carouselItemList = document.querySelectorAll(".carousel-item");
    return carouselItemList.length;
  }

  public handleCarouselDirection(direction: number): void {
    direction === CarouselDirecitons.left
      && this.carouselIndex > 0
      && this.carouselIndex--;
    direction === CarouselDirecitons.right
      && (this.carouselIndex < this.carouselItems.length - this.carouselVisibleItemsQuantity)
      && this.carouselIndex++;
  }

  // Methods:
  public handleTranslateCarouselItems(direction: number): void {
    this.handleCarouselDirection(direction);
    const carouselOffset = this.carouselIndex * this.carouselItemWidth;
    const carouselContent = document.querySelector(".carousel-track") as HTMLDivElement;
    carouselContent.style.transform = `translate(-${carouselOffset}px)`;
  }

  public handleAddImageToCarousel(event: Event): void {
    const inputTarget = event.target as HTMLInputElement;
    const file = inputTarget.files?.[0] as File;

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      this.carouselItems.push(event.target?.result as string);
      this.handleTranslateCarouselItems(CarouselDirecitons.right);
    }
    fileReader.readAsDataURL(file);
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
  justify-content: space-evenly;
  align-content: center;
  position: relative;

  img {
    cursor: pointer;
  }

  span.chevron-left-icon,
  span.chevron-right-icon {
    align-self: center;
    cursor: pointer;

    ::v-deep svg {
      color: #7DC143;
      width: 5rem;
      height: 5rem;
      transition: color 0.2s;

      &:hover {
        color: #649836;
      }
    }    
  }
}

.carousel-content {
  max-width: 720px;
  margin: 0 2rem;
  display: flex;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  min-width: 100%;
  transition: transform 0.5s;
}

.carousel-item {
  min-width: 50rem;
  height: 20rem;
  border-radius: 0.75rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  & + .carousel-item {
    margin-left: 1rem;
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