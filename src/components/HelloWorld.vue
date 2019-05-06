<template>
  <div class="hello">
    <div class="row">
      <div class="col-md-9 p-4">
        <div class="form-group">
          <input type="text" class="form-control" id="search" placeholder="Поиск">
        </div>
      </div>
    </div>

    <div class="row">
       <div class="col-md-4 pt-3">
        <!-- <div class="form-group">
          <label for="filters">Фильтры</label>
        </div> -->
        <ul class="list-group">
          <li class="list-group-item list-group-item-action pointer">Фильтр 1</li>
         </ul>
      </div>
      <div class="col-md-8 pt-3">
        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <label for="search">Информация о выбранном устройстве</label>
            </div>
          
            <ul class="list-group">
              <li class="list-group-item list-group-item-action pointer">
                <div class="row p-2 pl-3">
                  <span>Имя</span>
                </div>
                <div class="row p-2 pl-3">
                  <span>Описание</span>
                </div>
                <div class="row p-2 pl-3">
                  <span>Идентификатор (devEUI)</span>
                </div>
                <div class="row p-2 pl-3">
                  <span>Состояние</span>
                </div>
                <div class="row p-2 pl-3">
                  <span>Уровень батареи</span>
                </div>
              </li>
            </ul>
            
          </div>
          <hr>
          
        </div>
        <div class="row pt-4">
          <div class="col-md-8">
            <div class="form-group">
              <label>Пакеты</label>
              
            </div>
          
            <ul class="list-group">
              <li class="list-group-item list-group-item-action pointer">
                <div class="row p-2 pl-3">
                  <span>Пакеты принятых данных</span>
                </div>
              </li>
            
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
