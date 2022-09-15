<template>
  <div class="header">
    <div class="logo">
      <img src="/assets/AVASUS.png" alt="" />
    </div>
    <nav class="nav-header">
      <ul>
        <li v-for="menuOption in menuOptions" :key="menuOption.label">
          <router-link :to="{ name: menuOption.routeName }">{{
            menuOption.label
          }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="input-search">
      <img class="glass" src="../../../public/assets/Vector.svg" alt="" />
      <input type="text" class="search" />
    </div>
    <button class="outline">Entrar</button>
    <button class="normal">Cadastrar</button>
  </div>
</template>

<script lang="ts" scoped>
// Vue
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type MenuRoute = {
  label: string;
  routeName: string;
};

// Icons:
@Component({
  components: {},
})
export default class CustomHeader extends Vue {
  public readonly menuOptions: MenuRoute[] = [
    { label: "Início", routeName: "home" },
    { label: "Sobre Nós", routeName: "home" },
    { label: "Cursos", routeName: "modules" },
    { label: "Parceiros", routeName: "partners" },
    { label: "Transparência", routeName: "transparency" },
    { label: "Contato", routeName: "home" },
  ];
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-height: 6.25rem;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);


  .logo {
    padding: 0 1rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    max-width: 15rem;
    width: 100%;
  }

  nav {
    padding: 0;
  }

  .nav-header ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
    width: 100%;

    & li {
      font-size: 0.9rem;
      list-style-type: none;
      white-space: nowrap;
      gap: 1rem;

      a {
        display: flex;
        color: #2f2e41;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;

        &.active {
          color: #f6303f;
        }
        &:hover {
          color: #f6303f;
          transition: 0.3s;
        }
      }
    }
  }

  .interact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .search {
    background: rgba(112, 112, 112, 0.1);
    border: rgba(209, 111, 255, 0.1);
    border-radius: 1.25rem;
    max-height: 2rem;
    padding: 1rem 2.6rem;
    height: 100%;
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
  }
}
.input-search {
  display: flex;
}
.glass {
  top: 0.1rem;
  left: 2rem;
  z-index: 2;
  width: 1.25rem;
  height: auto;
  position: relative;
}
</style>
