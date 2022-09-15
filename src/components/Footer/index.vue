<template>
  <div class="footer">
    <div class="up-side">
      <h1>Realização</h1>
      <div class="footer-img">
        <img src="/assets/LAIS.png" alt="" />
        <img src="/assets/UFRN.png" alt="" />
      </div>
    </div>
    <div class="down-side">
      <div class="footer-content">
        <div>
          <img src="/assets/LAIS.png" alt="" />
          <p>Laboratório de Inovação Tecnológica em Saúde.</p>
        </div>
        <div>
          <h1>Links Úteis</h1>
          <ul>
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Módulos</li>
            <li>Parceiros</li>
            <li>Transparência</li>
          </ul>
        </div>
        <div>
          <h1>Redes Sociais</h1>
          <div>
            <img src="/assets/facebook.svg" alt="facebook" />
            <img src="/assets/twiiter.svg" alt="twitter" />
            <img src="/assets/instagram.svg" alt="instagram" />
          </div>
        </div>
      </div>
      <p class="last-text">2022 © LAIS (HUOL). Todos os direitos reservados</p>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

// Icons
import ArrowLeft from "vue-material-design-icons/ChevronLeft.vue";
import ArrowRight from "vue-material-design-icons/ChevronRight.vue";

// Enums
enum CarouselDirecitons {
  left,
  right,
}

@Component({
  components: {},
})
export default class CustomFooter extends Vue {
  

  public method() {

const arr = ['1', '2', '2', '1', '3', '3']
const nonRepeatArr = [...new Set(arr)]

console.log(nonRepeatArr) // ['1', '2', '3']

  }

  public mounted() {
    this.method()
  }
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 0;
  background: transparent;
  .last-text {
    color: #ffff;
    font-size: 1.125rem;
    padding-top: 2rem;
  }
  h1 {
    color: #ffff;
  }

  .up-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f6303f;
    width: 100%;
    max-height: 16.5rem;
    height: 100%;

    .footer-img {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;
      margin-top: 2rem;

      img {
        max-height: 4.68rem;
      }
    }
  }

  .down-side {
    display: flex;
    flex-direction: column;
    .footer-content {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;

      div {
        display: flex;
        margin: 1rem 0;
        flex-direction: column;
        max-width: 12.5rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-weight: 400;
        line-height: 1.225rem;
        font-size: 1rem;
        color: #ffff;
        div {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-around;
        }
        h1 {
          white-space: nowrap;
        }
        ul {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          gap: 0.3rem;
          list-style: none;
        }
        img {
          max-height: 3rem;
          max-width: 7.5rem;
          cursor: pointer;
        }
      }
    }
    align-items: center;
    justify-content: center;
    background: #2f2e41;
    max-height: 29rem;
    height: 100%;
    width: 100%;
  }
}
</style>