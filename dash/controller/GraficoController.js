/*=======================================================================================
 *
 *
 * VARIABLE
 *
 *
 =======================================================================================*/

/*=======================================================================================
*
*
* CALL INITIALIZE
*
*
=======================================================================================*/

/*=======================================================================================
*
*
* ACTIONS
*
*
=======================================================================================*/
//inicializa a tabela
$(document).ready(function () {
	grafico_acesso();
	grafico_perguntas();
	grafico_produto();
	grafico_plataforma();
});



/*=======================================================================================
 *
 *
 * FUNCTIONS
 *
 *
 =======================================================================================*/
function grafico_acesso() {
	$.post("model/Grafico.php", {
		acao: 'grafico_acesso',

	}, function (data) {

		// Radialize the colors
		Highcharts.setOptions({
			colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
				return {
					radialGradient: {
						cx: 0.5,
						cy: 0.3,
						r: 0.7
					},
					stops: [
						[0, color],
						[1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
					]
				};
			})
		});

		// Build the chart
		Highcharts.chart('containeracesso', {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
			title: {
				text: 'TOTAL DE ACESSOS = '+ data['totalacesso']
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			accessibility: {
				point: {
					valueSuffix: '%'
				}
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						style: {
							fontSize: '20px',
							fontFamily: 'Verdana, sans-serif'
						},
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						connectorColor: 'silver'
					}
				}
			},
			series: [{
				name: 'Share',
				data: [
					{ name: 'Quiz', y: data['totalquiz'] },
					{ name: 'Produtos', y: data['totalproduto'] },
					
				]
			}]
		});
	}, "json");


}

function grafico_perguntas() {
	$.post("model/Grafico.php", {
		acao: 'grafico_pergunta'

	}, function (data) {

		var total =  'y:'+ data['totalp'];
// Create the chart
Highcharts.chart('containerpergunta', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: 'QUAL SEU DESAFIO'
    },
    subtitle: {
        align: 'left',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>  total<br/>'
    },

    series: [
        {
            name: "Perguntas",
            colorByPoint: true,
            data: [
                
              
                {
                    name: "Publicidade no PDV",
                    y: data['totalp'],
                    drilldown: "Publicidade no PDV"
                },
                {
                    name: "Atrair Atenção do público",
                    y: data['totali'],
                    drilldown: "Atrair Atenção do público"
                },
                {
                    name: "Destacar produtos e ofertas",
                    y: data['totald'],
                    drilldown: "Destacar produtos e ofertas"
                },
                {
                    name: "Menu Board",
                    y: data['totalm'],
                    drilldown: "Internet Explorer"
                },
				{
                    name: "Residencial",
                    y: data['totalr'],
                    drilldown: "Residencial"
                },
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        }
    }
});
	


	}, "json");
}
function grafico_produto(){
	$.post("model/Grafico.php", {
		acao: 'grafico_produto'

	}, function (data) {
		
	Highcharts.chart('containerprod', {
		chart: {
			type: 'bar'
		},
		title: {
			text: 'PRODUTOS MAIS SELECIONADOS'
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: ['The Retail', 'The Out', 'The Display', 'The Wall', 'TheTV','The Megabanner','The Poster','The Square'],
			
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ''
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					style: {
						fontSize: '20px',
						fontFamily: 'Verdana, sans-serif'
					},
				}
			}
		},
		
		credits: {
			enabled: false
		},
		series: [{
			name: 'Produtos',
			data: [data['totalr'], data['totalo'], data['totald'],data['totalw'], data['totalt'],data['totalm'],data['totalp'],data['totals']]
		}]
	});
}, "json");
}
function grafico_plataforma() {
	$.post("model/Grafico.php", {
		acao: 'grafico_plataforma'

	}, function (data) {

		var total =  'y:'+ data['totalp'];
// Create the chart
Highcharts.chart('containerplataforma', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: 'PLATAFORMAS'
    },
    subtitle: {
        align: 'left',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>  total<br/>'
    },

    series: [
        {
            name: "Perguntas",
            colorByPoint: true,
            data: [
                
                {
                    name: "Latam Reitail",
                    y: data['total']
                   
                },
                {
                    name: "Showroom Beeid",
                    y: data['totalbee'],
                    drilldown: "Publicidade"
                },
                {
                    name: "Showroom The Led",
                    y: data['totalled'],
                    drilldown: "Informativo"
                }
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        }
    }
});
	


	}, "json");
}