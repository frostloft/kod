<template>
    <div id="info">
      <h4>Информация о выбранном устройстве</h4>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action pointer list-group-item-light mb-3"
          v-for="datapack in datapacks">
            <p>ID приложения: {{ datapack.applicationID }}</p>
            <p>Имя: {{ datapack.applicationName }}</p>
            <p>Имя устройства: {{ datapack.deviceName }}</p>
            <p>DevEUI: {{ datapack.devEUI }}</p>
            <p>RSSI: {{ datapack.rssi }}</p>
            <p>LoRaSNR: {{ datapack.loRaSNR }}</p>
            <p>Местоположение:</p>
            <p><span>Широта: {{ datapack.latitude }}°  </span>
            <span>Долгота: {{ datapack.longitude }}°  </span>
            <span>Высота: {{ datapack.altitude }} м над уровнем моря  </span></p>
            <p>Порт: {{ datapack.fPort }}</p>
            <p>Шлюз: {{ datapack.gatewayID }}</p>
            <p>Имя шлюза: {{ datapack.gatewayName }}</p>
            <p>Время захода: {{ datapack.time }}</p>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      datapacks: [
        { 
          id: 1, 
          applicationID: 11,
          applicationName: 'teplo-klu15',
          deviceName: 'KaratKompact2_213--18310031',
          devEUI: '383a215ffffefc4c',
          rssi: '-119',
          loRaSNR: '-12.8',
          latitude: '56.82692',
          longitude: '60.57954',
          altitude: '356',
          gatewayID: '985dadfffe86b552',
          gatewayName: 'VegaBS1',
          time: '2019-03-22T10:21:12.072803Z',
          fPort: 200
        },
        { 
          id: 2, 
          applicationID: 11,
          applicationName: 'teplo-klu15',
          deviceName: 'KaratKompact2_213--18310031',
          devEUI: '383a215ffffefc4c',
          rxInfo: '["rssi":-119,"loRaSNR":-12.8,"location":{"latitude":56.82692,"longitude":60.57954,"altitude":356}}]',
          gatewayID: '985dadfffe86b552',
          gatewayName: 'VegaBS1',
          time: '2019-03-22T10:21:12.072803Z',
          fPort: 200,
          data: 'FACAkvgfHDYdDw8WAxMAAAAAAI0AABfVADEAMRgAAAAAABwBbgIAAAAAAAAAAAAAFAA='
        },
      ]
    }
  }
}
</script>

<style>
p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
   }
</style>
