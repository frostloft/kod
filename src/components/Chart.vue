<template>
<div style="width:1000px">
		<p>This example demonstrates a time series scale by drawing a financial line chart using just the core library. For more specific functionality for financial charts, please see <a href="https://github.com/chartjs/chartjs-chart-financial">chartjs-chart-financial</a></p>
		<canvas id="chart1"></canvas>
	</div>
	<br>
	<br>
    <label>	Chart Type:</label>
	<select id="type">
		<option value="line">Line</option>
		<option value="bar">Bar</option>
	</select>
	<select id="unit">
		<option value="second">Second</option>
		<option value="minute">Minute</option>
		<option value="hour">Hour</option>
		<option value="day" selected>Day</option>
		<option value="month">Month</option>
		<option value="year">Year</option>
	</select>
	<button id="update">update</button>
</template>

<script>


</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>