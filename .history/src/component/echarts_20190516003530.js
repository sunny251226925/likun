import echarts from "echarts";

const myChart =  {
    pie:function(title,value,color1,color2){
        let min = 0;
        let max = 100;
        let dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        };
        
        let placeHolderStyle = {
            normal: {
                color: 'rgba(44,59,70,0)', //未完成的圆环的颜色
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };

        const option = {
            title: {
                text: value,
                subtext: "\n\n" + title,
                x: 'center',
                y: '30%',
                textStyle: {
                    fontWeight: 'normal',
                    color: "#ffffff",
                    fontSize: 14
                },
                subtextStyle: {
                    fontSize: 14,
                    color: ['#ffffff']
                },
            },
            color: ["#fff", '#313443', '#fff'],
            tooltip: {
                show: false,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                show: false,
                itemGap: 12,
                data: ['01', '02']
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: false,
                radius: ['50%', '58%'],
                center: ['50%', '40%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                data: [{
                        value: value - min,
                        name: '01',
                        itemStyle: {
                        normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                    offset: 0,
                                    color: color1
                                }, {
                                    offset: 1,
                                    color: color2
                                }]),
                            },
                        },
                    }, {
                        value: max - value,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }

                ]
            }, {
                name: 'Line 2',
                type: 'pie',
                animation: false,
                clockWise: false,
                radius: ['63%', '70%'],
                center: ['50%', '40%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 100,
                    name: '02',
                    itemStyle: {
                        normal: {
                            color: "rgba(216,216,216,0.1)",
                        },
                    }
                }]
            }]
        };

        return option;
    },
    bar: function(){
       const option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize:12,//坐标值得具体的颜色
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                          color: 'white'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize:12,//坐标值得具体的颜色
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                          color: 'white'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#FFD81F'},                   //柱图渐变色
                                    {offset: 1, color: '#F962CA'},                   //柱图渐变色
                                ]
                            )
                        }
                    },
                }
            ]
        };
        return option;
    }

}

export default myChart;
