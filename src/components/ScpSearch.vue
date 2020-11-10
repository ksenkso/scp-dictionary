<template>
  <div class="scp-search">
    <form @submit.prevent="onFormSubmit" class="form">
      <label for="search">Введите номер объекта:</label>
      <input type="number" v-model="query" name="search" id="search" ref="search" aria-label="Search">
      <button>Найти</button>
    </form>
    <div class="scp-carousel" v-if="object">
      <button
          @click="switchObject(-1)"
          class="scp-carousel__button scp-carousel__button_prev"
          aria-label="Предыдущий объект">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.45 45.49">
          <line y1="22.74" x2="49.67" y2="22.74" style="fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:7px"/>
          <polygon points="84.22 22.74 49.67 2.79 49.67 42.69 84.22 22.74"
                   style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:3.2251867020804847px"/>
        </svg>
      </button>
      <ScpCard :object="object"/>
      <button
          @click="switchObject(1)"
          class="scp-carousel__button scp-carousel__button_next"
          aria-label="Следующий объект">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.45 45.49">
          <line y1="22.74" x2="49.67" y2="22.74" style="fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:7px"/>
          <polygon points="84.22 22.74 49.67 2.79 49.67 42.69 84.22 22.74"
                   style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:3.2251867020804847px"/>
        </svg>
      </button>
    </div>
    <div class="loader" v-if="isLoading">
      Loading...
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import {api} from '../utils';
import ScpCard from './ScpCard';
import {Errors} from '@/utils.js';

export default {
  name: 'ScpSearch',
  components: {ScpCard},
  data() {
    return {
      query: '',
      object: null,
      isLoading: false,
      error: null,
      number: 0,
    }
  },
  methods: {
    async onFormSubmit() {
      const number = parseInt(this.query);
      if (!isNaN(number)) {
        this.getObject(number)
      }
    },
    async switchObject(count) {
      const nextNumber = this.number + count;
      if (nextNumber > 0) {
        this.getObject(nextNumber);
      }
    },
    getObject(number) {
      this.isLoading = true;
      api.get('/objects/' + number)
          .then(response => {
            this.isLoading = false;
            this.number = number;
            this.replaceObjectFromResponse(response);
          })
          .catch(() => {
            this.error = Errors.NOT_FOUND;
          })
    },
    replaceObjectFromResponse(response) {
      if (response.data && response.data) {
        this.object = response.data;
        this.error = null;
      } else {
        this.error = Errors.NOT_FOUND;
      }
    }

  },
}
</script>

<style scoped lang="sass">
.scp-carousel
  display: flex
  justify-content: space-between

  &__button
    min-width: 32px
    max-width: 64px
    width: 100%
    min-height: 64px
    background-size: contain

    &_prev svg
      transform: rotate(180deg)


.scp-search
  padding: 12px
  display: grid
  grid-template-rows: 1fr auto
  grid-template-columns: 1fr

form
  display: grid
  font-size: 20px
  grid-template-rows: repeat(2, 1fr)
  grid-template-columns: repeat(2, 1fr)
  grid-template-areas: "label label" "input button"
  grid-column-gap: .5em

  > *
    margin-bottom: 12px

input
  border-radius: 5px
  font-size: inherit
  border: 1px solid #bbb
  padding: 4px
  grid-area: input
  min-width: 100px

button
  font-size: inherit
  grid-area: button
  border-radius: 10px
  border: 1px solid #bbb
  background: linear-gradient(to bottom, #966, #633, #300)
  box-shadow: 0 1px 3px rgba(0, 0, 0, .5)
  color: #eeeeee
  cursor: pointer

label
  text-align: center
  grid-area: label
</style>
