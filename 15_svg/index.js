var data = [['700', '6.90'], ['1200', '20.40'], ['1200', '0.30'], ['1300', '2.80'], ['1300', '24.50'], ['1600', '6.50'], ['1600', '5.80'], ['1600', '1.80'], ['1600', '15.00'], ['1700', '6.90'], ['1800', '40.60'], ['1900', '77.00'], ['2000', '23.90'], ['2000', '30.60'], ['2100', '2.70'], ['2200', '17.50'], ['2200', '2.70'], ['2200', '7.90'], ['2300', '1.00'], ['2300', '11.30'], ['2400', '9.40'], ['2500', '27.00'], ['2700', '3.00'], ['2700', '1.70'], ['2900', '50.00'], ['3200', '12.20'], ['3200', '2.40'], ['3200', '10.30'], ['3300', '28.10'], ['3500', '40.00'], ['3500', '48.00'], ['3600', '40.00'], ['3600', '36.00'], ['3700', '4.30'], ['3700', '7.10'], ['3700', '2.50'], ['3800', '8.80'], ['3900', '9.40'], ['4000', '0.30'], ['4000', '15.00'], ['4200', '4.40'], ['4300', '19.60'], ['4300', '27.90'], ['4500', '10.20'], ['4700', '11.90'], ['5400', '6.00'], ['5600', '5.60'], ['5700', '5.20'], ['5800', '12.00'], ['5900', '6.40'], ['5900', '16.50'], ['5900', '1.10'], ['6000', '4.40'], ['6300', '4.00'], ['6700', '4.10'], ['6800', '6.60'], ['6900', '5.00'], ['6900', '2.20'], ['7000', '9.00'], ['7200', '8.50'], ['7400', '0.70'], ['7600', '4.00'], ['8000', '7.00'], ['8100', '11.10'], ['8200', '2.30'], ['8300', '9.00'], ['8400', '5.70'], ['8600', '10.20'], ['8800', '9.20'], ['9000', '3.20'], ['9200', '12.20'], ['9200', '18.30'], ['9500', '18.90'], ['9600', '30.00'], ['9800', '4.50'], ['10100', '28.00'], ['10700', '11.80'], ['10900', '30.50'], ['11000', '23.00'], ['11200', '29.80'], ['11200', '34.00'], ['11500', '4.60'], ['11500', '18.80'], ['11900', '15.50'], ['12200', '8.00'], ['12300', '2.60'], ['12300', '23.00'], ['12400', '5.40'], ['12500', '13.80'], ['12500', '27.10'], ['12700', '12.20'], ['12800', '20.50'], ['12800', '5.70'], ['12900', '4.40'], ['13000', '8.00'], ['13500', '6.90'], ['13600', '27.50'], ['14400', '9.30'], ['14400', '20.00'], ['14700', '1.70'], ['14900', '22.40'], ['14900', '8.90'], ['15000', '13.00'], ['15100', '24.00'], ['15100', '14.10'], ['15200', '11.70'], ['15600', '12.80'], ['16700', '3.90'], ['16700', '13.10'], ['16700', '16.00'], ['16900', '8.10'], ['17000', '20.00'], ['17000', '5.10'], ['17000', '21.80'], ['17500', '5.00'], ['17800', '16.10'], ['17900', '0.70'], ['18100', '28.00'], ['18200', '11.00'], ['18600', '10.10'], ['18900', '0.80'], ['19200', '2.90'], ['19600', '9.70'], ['19900', '3.40'], ['20100', '11.80'], ['20900', '8.40'], ['21800', '6.20'], ['22300', '7.10'], ['22400', '7.60'], ['24500', '11.20'], ['24600', '6.70'], ['24600', '4.90'], ['24700', '12.40'], ['25400', '6.00'], ['26300', '5.00'], ['26400', '11.00'], ['27000', '10.90'], ['27700', '8.70'], ['27800', '21.50'], ['27900', '5.20'], ['28200', '4.50'], ['29100', '3.40'], ['29100', '10.00'], ['29300', '3.00'], ['29600', '4.20'], ['29600', '4.90'], ['30500', '8.90'], ['31100', '14.70'], ['31300', '4.90'], ['31700', '5.80'], ['32400', '7.10'], ['33100', '8.10'], ['34000', '5.60'], ['34200', '2.90'], ['34500', '6.60'], ['35500', '2.90'], ['35600', '4.50'], ['36400', '4.20'], ['37000', '10.40'], ['37200', '11.10'], ['37400', '8.60'], ['37500', '7.70'], ['38200', '11.30'], ['38400', '17.20'], ['39000', '4.70'], ['39400', '10.80'], ['40000', '2.20'], ['41800', '9.10'], ['41900', '4.60'], ['42900', '2.90'], ['43800', '4.00'], ['44100', '9.40'], ['44300', '4.40'], ['44500', '8.50'], ['46200', '8.70'], ['46600', '7.10'], ['48400', '6.30'], ['49000', '3.60'], ['49900', '3.70'], ['50000', '5.50'], ['50100', '5.70'], ['50400', '5.60'], ['50500', '3.80'], ['50800', '3.80'], ['51200', '6.70'], ['52200', '2.80'], ['52500', '1.20'], ['53900', '4.90'], ['54500', '6.00'], ['56600', '4.00'], ['59000', '8.10'], ['59800', '4.40'], ['61500', '3.10'], ['61700', '1.00'], ['62100', '3.20'], ['65800', '1.10'], ['66800', '12.00'], ['68600', '1.60'], ['70800', '1.00'], ['72100', '4.20'], ['73200', '6.70'], ['78900', '6.90'], ['84600', '1.10'], ['94100', '2.20'], ['99400', '7.00'], ['105100', '5.80'], ['110000', '2.00'], ['115700', '2.00'], ['124100', '8.90'], ['139100', '2.40']]
// vim fold zf + {movement key}

// http://bl.ocks.org/weiglemc/6185069

// var margin = {topp: 20, right: 20, bottom: 30, left: 40 },
//     width = 1000 - margin.left - margin.right,
//     height = 500 - margin.topp - margin.bottom;
//
// var xScale = d3.scaleLinear()
//     .range(0, width),
// //xAxis = d3.axisBottom(xScale);
//
//     xAxis = d3.svg.axis().scale(xScale).orient("bottom");
//
//
// var yScale = d3.scaleLinear()
//     .range(0, height),
// yAxis = d3.axisLeft(yScale);
//
// var svg = d3.select(".chart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("length", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.topp + ")");
//
// svg.append("g")
//     .attr("class", "x axis")
//     .call(xAxis)
//

//  var margin = {topp: 20, right: 20, bottom: 30, left: 40 },
//      width = 1000 - margin.left - margin.right,
//      height = 500 - margin.topp - margin.bottom;
// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", width)
//             .attr("height", height);
//
// svg.selectAll("circle")
//    .data(data)
//    .enter()
//    .append("circle")
//
//    .attr("cx", function(d) {
//         return d[0];
//    })
//    .attr("cy", function(d) {
//         return d[1];
//    })
//    .attr("r", 5);
//
//    svg.selectAll("text")
//       .data(data)
//       .enter()
//       .append("text")
//       .text(function(d) {
//       return d[0] + "," + d[1];
//  })
//      .attr("x", function(d) {
//        return d[0];
//     })
//     .attr("y", function(d) {
//        return d[1];
//     })
//

//
// var width = 1000,
//     height = 500;

var margin = {topp: 20, right: 20, bottom: 30, left: 40 },
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.topp - margin.bottom;

var x = d3.scaleLinear()
    .domain([d3.min(data) - 1, d3.max(data) + 1])
    .range([20, width - 40]);

var y = d3.scaleLinear()
    .domain([d3.min(data) - 1, d3.max(data) + 1])
    .range([0, height]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

var plot = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    // .attr("transform", function(d) {
    //   return 'translate(' + x(d[0]) + ',' + (height - y(d[1])) + ')';
    //  })
    .attr("transform", "translate(" + margin.left + "," + margin.topp + ")");

plot.append('rect')
  .attr('width', 4)
  .attr('height', 4);

var x_scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([20,width-40]);

var y_scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([height, 0]);

var x_axis = d3.axisBottom()
  .scale(x_scale); //this be a fxn
  // .orient('left');

var y_axis = d3.axisLeft()
  .scale(y_scale);

chart.append('g')
  .attr('transform', 'translate(30, ' + (height - 25) +  ')')
  .call(x_axis);

chart.append('g')
  .attr('transform', 'translate(50,0)')
  .call(y_axis);

chart.append('text')
  .attr('x', width / 2)
  .attr('y', height)
  .text('GDP Per Capita');

chart.append('text')
  .attr('transform', 'rotate(-90)') 
  .attr('x', 0 - (height / 2))
  .attr('y', 0)
  .attr('dy', '1em')
  .text('Unemployment');

chart.append('text')
  .attr('x', width/2)
  .attr('y', 10)
  .text('Unemployment in Respect to GDP Per Capita')


//d3.select("body").append("text").text("https://www.cia.gov/library/publications/the-world-factbook/docs/notesanddefs.html")
// var c = document.createElementNS("http://www.w3.org/2000/svg", "line")

//var width = 500,
//    height = 500;
//
//var x = d3.scaleLinear()
//    .domain(parseInt(data[0][0]), parseInt(data[data.length-1][0]))
//    .range(0, width)
//
//var y = d3.scaleLinear()
//    .domain(parseInt(data[0][1]), parseInt(data[data.length-1][1]))
//    .range(0, height)
//
//var chart = d3.select('.chart')
//    .attr('width', width)
//    .attr('height', height)
//
//var graph = chart.selectAll("g")
//    .data(data)
//    .enter().append("g")
//    .attr("transform", function(d, i) { return "translate(0," + i * height + ")"; });
//
//console.log(graph)
//graph.append("rect")
//    .attr("width", x)
//    .attr("height", height - 1);
//
//graph.append("text")
//    .attr("x", function(d) { return x(d) - 3; })
//    .attr("y", height / 2)
//    .attr("dy", ".35em")
//    .text(function(d) { return d; });

//console.log(chart)
