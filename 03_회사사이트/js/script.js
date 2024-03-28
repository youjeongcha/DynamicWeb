/* PIE Chart */
var pieData = { 
    //그래프 항목
    labels : ['JAVVA', 'Python', 'C++', 'C#', 'JSP'],

    //항목별 데이터
    series : [3, 0, 6, 2, 2]
};

var pieOptions = {
    width: '100%',
    heihgt : '400px'
};

new Chartist.Pie('.pie-chart', pieData, pieOptions);

/* Bar Chart */
var barData = {
    labels : ['2021년', '2022년', '2023년'],
    series : [[9, 12, 10]]
};

var barOptions = {
    axisY : {
        offest : 60,
        scaleMinSpace : 50,
    
        labelInterpolationFnc : function(value) {
            return value + ' 개'
        }
    },
    width : '100%',
    height : '400px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);