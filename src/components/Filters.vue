<template>
    <div id="filt">
      <div class="row pl-3">
      <ul class="list-group list-group-horizontal col-md-11">
          <li
            class="list-group-item list-group-item-action pointer"
          v-for="filter in filters">
            {{ filter.text }}
          </li>
        </ul>
      </div>
      </div>
</template>

<script>
export default {
  name: 'filt',
  data() {
    return {
      filters: [
        { id: 1, text: 'Не было пакетов 1 день'},
        { id: 2, text: 'Не было пакетов 3 дня'},
        { id: 3, text: 'Не было пакетов 7 дней'},
        { id: 4, text: 'Не было пакетов более 7 дней'}
      ]
    }
  }
}
</script>

