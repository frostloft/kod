
<template>
  <div id="app">
     <div class="row pl-5">
      <div class="col-md-11">
        <div class="form-group">
          <input type="text" class="form-control" id="search" placeholder="Поиск">
        </div>
      </div>
    </div>

    <div class="row pl-5">
       <div class="col-md-12">
             <Filters/>
          </div>
    </div>

    <div class="row pl-5">
      <div class="col-md-5 pt-3">
            <Information/>
      </div>
        <div class="col-md-6 pt-3">
            <DataPack/>
      </div>
    </div>
  </div>
  
</template>

<script>
import Filters from './components/Filters.vue'
import Information from './components/Information.vue'
import DataPack from './components/DataPack.vue'

export default {
  name: 'app',
  components: {
    Filters,
    Information,
    DataPack
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
