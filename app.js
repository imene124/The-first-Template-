
//store the id in canvas  of html in a var ctx
var ctx = document.getElementById('chart');
// to create our chart we need our var ctx and the config

var data ={data:[2000,2500,3000,3500,4000,4500,5000,5500,6000,6500],
borderColor:'white',
opacity:100%

};

var dataFirst ={
data:[3000,2800,3100,3050,3500,3300,3700,3350,4000,4300,4000,4800,4500,5000,4800,5000,4900,5000],

fill: false,
label:"BTC",
borderColor: 'pink',
}
var datasecond={
data:[2700,2800,3200,3100,3600,2800,3400,3300,3700,3400,3500,3200,3600,3600,3400,4000,3600,4200,3800,4000,4500],
fill: false,
label:"ETH",
borderColor: 'green',

}
 var datathird = {
     data:[3000,3300,3000,3200,3000,3500,3100,3600,3500,3700,3000,4000,5000,4000,3700,3500,4500],
     fill: false,
label: "LTC",
borderColor: 'purple',
}
 


var ouroption={
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active, }
    }};








var ourdata={
    labels:["10.59PM","11.59PM","12.59PM","1.59PM","2.59PM","3.59PM","4.59PM","5.59PM","6.59PM","7.59PM"],
    datasets:
    [data,dataFirst,datasecond,datathird]};



var myChart = new Chart(ctx, {
    //specify the type 
    type: 'line',
    data: ourdata,
options: ouroption}



)