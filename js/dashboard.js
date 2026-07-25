// ============================
// Skills Pie Chart
// ============================

var skills = echarts.init(document.getElementById('skillsChart'));

skills.setOption({

backgroundColor:'transparent',

tooltip:{},

series:[{

type:'pie',

radius:'70%',

data:[

{value:30,name:'Python'},

{value:20,name:'Power BI'},

{value:15,name:'SQL'},

{value:20,name:'Machine Learning'},

{value:15,name:'Web Development'}

]

}]

});

// ============================
// Projects Bar Chart
// ============================

var projects = echarts.init(document.getElementById('projectChart'));

projects.setOption({

backgroundColor:'transparent',

xAxis:{

type:'category',

data:['Python','Power BI','SQL','Web']

},

yAxis:{

type:'value'

},

series:[{

data:[6,4,5,3],

type:'bar',

smooth:true

}]

});