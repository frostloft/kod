<template>
    <div id="datapack">
      <h4>Пакеты данных</h4>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action list-group-item-light pointer"
          v-for="pack in packs">
            {{ pack.text }}
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  name: 'datapack',
  data() {
    return {
      packs: [
        { id: 1, text: 'bgIHFwYFE4oRjzwWGddAJ4fVQMXWIUL7hRdCpAwlQAAAAAAAAAAAAAA'},
        { id: 2, text: 'bgIHFwYFE+MCxDvKER5AfOwcQM1XIUIpvRdCRKoZQAAAAAAAAAAAAAA'},
        { id: 3, text: 'bgIHFwYFEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},
        { id: 4, text: '0LTQsNC50YLQtSDQvNGL0LvQviDQuCDQstC10YDQtdCy0LrRgw=='}
      ]
    }
  }
}
</script>
