<template>
  <div class="transparency-component">
    <div class="geral-data">
      <h2 class="title">Dados Gerais</h2>

      <div class="transparency-data">
        <div>
          <span>
            <img src="/assets/people.svg" alt="" />
            <p>Total de usuários registrados</p>
          </span>
          <h2>
            {{ transparencyArrayList?.dados_gerais.usuarios_registrados }}
          </h2>
        </div>
        <div>
          <span>
            <img src="/assets/document.svg" alt="" />
            <p>Inscrições realizadas</p>
          </span>
          <h2>
            {{ transparencyArrayList?.dados_gerais.incricoes_realizadas }}
          </h2>
        </div>
        <div>
          <span>
            <img src="/assets/hat.svg" alt="" />
            <p>Cursos ativos</p>
          </span>
          <h2>{{ transparencyArrayList?.dados_gerais.cursos_ativos }}</h2>
        </div>
        <div>
          <span>
            <img src="/assets/medal.svg" alt="" />
            <p>Direito à certificação</p>
          </span>
          <h2>
            {{ transparencyArrayList?.dados_gerais.direito_certificacao }}
          </h2>
        </div>
          <div>
            <span>
              <img src="/assets/hat-money.svg" alt="" />
              <p>Investimento médio por curso</p>
            </span>
            <h2>
              R$
              {{ transparencyArrayList?.dados_gerais.investimento_medio_curso }}
            </h2>
          </div>
          <div>
            <span>
              <img src="/assets/userCamera.svg" alt="" />
              <p>Investimento médio por aluno</p>
            </span>
            <h2>
              R$
              {{ transparencyArrayList?.dados_gerais.investimento_medio_aluno }}
            </h2>
          </div>
      </div>
    </div>
    <div class="divisor">
      <div class="pizza">
        <h2>Usuários por curso</h2>

        <slot name="pizza"></slot>
        <!-- <div
          class="courses-pizza"
          v-for="data in transparencyArrayList.usuarios_por_curso"
          :key="data.curso"
        >
          <p>{{ data.curso }}: {{ data.usuarios }}</p>
        </div> -->
      </div>
      <div class="pizza">
        <h2>Usuários por Estado</h2>

        <slot name="map"></slot>
        <div class="courses-map">
          <p>Usuários matriculados p/ estado</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { TransparencyModel } from "@/models/Transparency";
import { UsersByCourseModel } from "@/models/UsersByCourse";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class GeralData extends Vue {
  @Prop({
    required: true,
  })
  readonly transparencyArrayList!: TransparencyModel;

  // Computed:
  public get course(): UsersByCourseModel[] {
    return this.transparencyArrayList.usuarios_por_curso.filter(
      (item: any) => item.curso
    );
  }
  public get users(): UsersByCourseModel[] {
    return this.transparencyArrayList.usuarios_por_curso.filter(
      (item: any) => item.usuarios
    );
  }
}
</script>

<style scoped lang="scss">
.transparency-component {
  height: 100%;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
}
.geral-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-height: 20rem;
  background: #f5f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1.125rem;

  .title {
    color: #f6303f;
    margin: 1rem 0;
  }

  .transparency-data {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    padding: 1rem;
    width: 100%;
    gap: 1.6rem;

    .last-data {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      right: 0;
      left: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding: 0.2rem;
      justify-content: center;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.4rem;

        img {
          color: #f6303f;
        }

        p {
          font-weight: bold;
          white-space: nowrap;
        }
      }
      h2 {
        color: #f6303f;
      }
    }
  }
}

.divisor {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;

  justify-content: space-around;
}

.pizza {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 33rem;
  max-height: 41rem;
  width: 100%;
  background: #f5f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1.125rem;
  margin: 1rem 0;

  h2 {
    color: #f6303f;
    margin: 0.5rem;
  }

  .courses-pizza {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    p {
      margin: 1rem 0;
    }
    img {
      height: 23.5rem;
    }
  }
  .courses-map {
    display: flex;
    font-weight: bold;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    text-align: start;
    p {
      font-size: 80%;
      padding: 1rem;
    }
  }
}
</style>