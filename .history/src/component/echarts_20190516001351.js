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
                text: title,
                subtext: "\n" + 7789,
                x: 'center',
                y: '30%',
                textStyle: {
                    fontWeight: 'normal',
                    color: "#ffffff",
                    fontSize: 14
                },
                subtextStyle: {
                    fontSize: 14,
                    color: ['#ff9d19']
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
    }

}

export default myChart;
