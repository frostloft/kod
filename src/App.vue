
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
      <div class="col-md-5 pt-3 pr-1">
            <Information/>
      </div>
        <div class="col-md-6 pt-3 pl-5">
            <DataPack/>

            <div class="small">
              <line-chart :chart-data="datacollection"></line-chart>
              <button @click="fillData()">Randomize</button>
            </div>
            <div>
              <Chart/>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from './components/Filters.vue'
import Information from './components/Information.vue'
import DataPack from './components/DataPack.vue'
import Chart from '.components/Chart.vue'

import LineChart from './LineChart.js'

export default {
  name: 'app',
  components: {
    Filters,
    Information,
    DataPack,
    LineChart,
    Chart
  },
   data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
}
/////////////
/*var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});*/

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  background-color: #0354CC;
}
h4 {
  color: white;
}

</style>
