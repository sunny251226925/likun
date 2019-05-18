import echarts from "echarts";
import chinaJson from 'echarts/map/json/china.json'; //引入地图数据...
echarts.registerMap('china', chinaJson); //将地图数据注册到echart对象

const myChart =  {
    pie:function(title,value,color1,color2){
        let min = 0;
        let max = 120;
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
    bar: function(xTitle,data){
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
                    data : xTitle,
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
                        show:false,
                    }
                }
            ],
            yAxis : [
                {
                    type : '',
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: 'rgba(90,165,224,0.2)',                                         //网格横线颜色
                            width: 2,
                            type: 'solid'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize:14,//坐标值得具体的颜色
                        }
                    },
                    axisLine: {
                        show:false,
                    }
                }
            ],
            series : [
                {
                    name:'',
                    type:'bar',
                    barWidth: 8,
                    data: data,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F962CA'
                            }, {
                                offset: 1,
                                color: '#FFD81F'
                            }]),
                            barBorderRadius: 11,
                        }
                    }
                }
            ]
        };
        return option;
    },
    map: function(data){
        var mapName = 'china';

        var geoCoordMap = {};

        var computeSize = function(value){
            var size = 0; //气泡、圆点 大小
            if( value < 100){
                if(value > 0 && value <= 20){
                    size = 7;
                }
                if(value > 20 && value <= 40){
                    size = 10;
                }
                if(value > 40 && value <= 60){
                    size = 13;
                }
                if(value > 60 && value <= 80){
                    size = 16;
                }
                if(value > 80 && value <= 100){
                    size = 19;
                }
            } else {
                size = 22;
            }
            return size;
        }


        /*获取地图数据*/
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
        });

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.data.name;
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 200,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    color: [] // '#00467F', '#A5CC82' 蓝绿
                }
            },
            geo: {
                show: true,
                map: mapName,
                zoom: 1.2,
                top: "65px",
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(2,53,132,0.6)',
                        borderColor: '#04FFFF',
                        opacity: 0.9
                    },
                    emphasis: {
                        areaColor: 'rgba(2,53,132,1)',
                    }
                }
            },
            series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return computeSize(val[2]);
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9'
                    }
                }
            },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
                    symbolSize: function(val) {
                        return computeSize(val[2]) * 3;
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: '{@[2]}',
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#F62157',
                            borderColor: '#F62157',
                            opacity: 0.9,
                            color: '#F62157' //标志颜色
                        },
                        emphasis: {
                            areaColor: '#F62157',
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 100)),
                    symbolSize: function(val) {
                        return computeSize(val[2]);
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'yellow',
                            shadowBlur: 10,
                            shadowColor: 'yellow'
                        }
                    },
                    zlevel: 1
                }]
        };

        return option;
    }
}

export default myChart;