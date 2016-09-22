$(function () {
    $('#container').highcharts({
        chart: {
            renderTo: 'container',
            type: 'spline',
        },
        title: {
            text: 'Historical Temperature Trends: October 15th',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: weatherunderground.com',
            x: -20
        },
        xAxis: {
            categories: ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Temperature (°F)'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: [69, 82, 70, 79, 66, 82, 62, 63, 66, 66, 59, {
                y: 70,
                marker: {
                    symbol: 'url(http://www.bom.gov.au/climate/images/symbols/icon-rain.png)'
                }
            }, 80, 73, 75, 75, 72, 82, 70, 72]
        }]
    });
});
