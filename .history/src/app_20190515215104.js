import React from 'react';
import './app.css';
import setting from './assets/image/setting.png';
import swiper1 from './assets/image/swiper-1.png';
import swiper2 from './assets/image/swiper-2.png';
import swiper3 from './assets/image/swiper-3.png';

import echarts from "echarts";
import ReactEcharts from 'echarts-for-react';

class app extends React.Component {
    constructor(props){
        super(props);

        var value = 90;
        var unit = "%";
        var min = 0;
        var max = 100;
        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)'
            }
        };
        
        var placeHolderStyle = {
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
                text: "重点区域入侵",
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontWeight: 'normal',
                    color: "#ffffff",
                    fontSize: 14
                }
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
                itemStyle: dataStyle,
                hoverAnimation: false,
                data: [{
                        value: value - min,
                        name: '01',
                        itemStyle: {
                        normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                    offset: 0,
                                    color: '#7777eb'
                                }, {
                                    offset: 1,
                                    color: '#70ffac'
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
                radius: ['58%', '60%'],
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
                                color: "#3c6482",
                            },
                        }
                }]
            }, {
                name: 'Line 3',
                type: 'pie',
                animation: false,
                clockWise: false,
                radius: ['48%', '50%'],
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
                                color: "#3c6482",
                            },
                        }
                    }
                ]
            }]
        };


        this.state = {
            pie: {
                option: option,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }
        }

    }

    sideClose = () => {
        this.setState({
            sidebarDisplay: false
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="app">
                <div className="title">
                    <span>安全指挥中心</span>
                    <span className="tag">全国</span>
                </div>
                <ul className="container">
                    <li className="container-left three">
                        <div className="item">
                            <div className="item-title">
                                <div className="text-left">告警轮播</div>
                            </div>
                            <table className="table">
                                <thead className="thead">
                                    <tr className="tr">
                                        <td className="td text-left">区域</td>
                                        <td className="td text-left">告警类型</td>
                                        <td className="td text-right">时间</td>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    <tr className="tr" style={{backgroundImage:"url("+swiper1+")"}}>
                                        <td className="td text-left">走廊</td>
                                        <td className="td text-left">人员异常聚集告警</td>
                                        <td className="td text-right">2019-05-12 21:03</td>
                                    </tr>
                                    <tr className="tr" style={{backgroundImage:"url("+swiper2+")"}}>
                                        <td className="td text-left">走廊</td>
                                        <td className="td text-left">人员异常聚集告警</td>
                                        <td className="td text-right">2019-05-12 21:03</td>
                                    </tr>
                                    <tr className="tr" style={{backgroundImage:"url("+swiper3+")"}}>
                                        <td className="td text-left">走廊</td>
                                        <td className="td text-left">人员异常聚集告警</td>
                                        <td className="td text-right">2019-05-12 21:03</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="item">
                            <div className="item-title">
                                <div className="text-left">安全监控</div>
                                <div className="text-right">
                                    <img src={setting} width="16" height="16"></img>
                                    <span>全部</span>
                                </div>
                            </div>
                            <ul className="pie-list">
                                <li className="pie">
                                    <ReactEcharts option={this.state.pie.option} style={this.state.pie.style}></ReactEcharts>
                                </li>
                                <li className="pie"></li>
                                <li className="pie"></li>
                                <li className="pie"></li>
                                <li className="pie"></li>
                                <li className="pie"></li>
                            </ul>
                        </div>
                        <div className="item"></div>
                    </li>
                    <li className="container-content"></li>
                    <li className="container-right three">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </li>
                </ul>
            </div>
          );
    }
}

export default app;
