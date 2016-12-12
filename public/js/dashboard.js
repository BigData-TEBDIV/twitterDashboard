

function enviaHashTag(){
var hashtag = $('.hashTagInput').val();
$(".hashtag").html("");
//alert('teste');

 $.get("writeData?hash="+hashtag, function(data){
alert(data);

    });


}

$(function () {

    var barChart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'column'
        },
        title: {
            text: 'Análise de Sentimentos'
        },
        subtitle: {
            text: 'Visão Geral'
        },
        xAxis: {
            categories: [
                'Positivo',
                ' Negativo',
                'Neutro'      
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade de tweets'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Twitter',
            data: [50, 70, 100]

        }]
    });


setInterval(function(){

    $.get("data", function(data){
        console.log(data);

        barChart.xAxis[0].setCategories(data[0].categories)
        barChart.series[0].setData(data[0].series)


});

   // alert('teste');
    
   // barChart.redraw();


},3000)



});