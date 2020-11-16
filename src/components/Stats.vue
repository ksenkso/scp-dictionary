<template>
  <div class="stats__container">
    <div class="stats" v-if="stats">
      <p>Всего объектов: {{stats.total}}</p>
      <p>Последний добавленный объект: SCP-{{stats.last}}</p>
      <p>Последнее обновление: {{stats.lastPull | date}}</p>
    </div>
    <div class="loader" v-if="isLoading"></div>
    <div class="error" v-if="error"></div>
  </div>
</template>

<script>
import {api} from '@/utils.js';

export default {
  name: 'Stats',
  filters: {
    /**
     *
     * @param {Number} d UNIX timestamp
     * @return {String}
     */
    date(d) {
      return new Date(d * 1000).toLocaleString('ru-RU');
    }
  },
  data() {
    return {
      isLoading: false,
      error: null,
      stats: null,
    }
  },
  methods: {},
  mounted() {
    api.get('/stats')
        .then(response => {
          if (response.data) {
            this.stats = response.data;
          }
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.isLoading = false;
        })
  },
}
</script>

<style scoped>

</style>
