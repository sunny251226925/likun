import React from 'react';
import './app.css';
import setting from './assets/image/setting.png';
import swiper1 from './assets/image/swiper-1.png';
import swiper2 from './assets/image/swiper-2.png';
import swiper3 from './assets/image/swiper-3.png';

import ReactEcharts from 'echarts-for-react';

class app extends React.Component {
    constructor(props){
        super(props);


        const option = {
            "title": {
                "text": 'CPU分配率',
                "top": '85%',
                "left": '42%',
                "textStyle": {
                    "fontSize": 28,
                    "fontWeight": "bold",
                    "color": "#bcbfff"
                }
            },
            "tooltip": {
                "trigger": 'item',
                "formatter": "{a} : ({d}%)"
            },
            "series": [{
                "name": "CPU分配率 内圈",
                "center": [
                    "50%",
                    "50%"
                ],
                "radius": [
                    "49%",
                    "50%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "data": [{
                    "value": 84,
                    "name": "",
                    "label": {
                        "normal": {
                            "show": true,
                            "formatter": '{d} %',
                            "textStyle": {
                                "fontSize": 28,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        }
                    },
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#5886f0",
                            "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00a2ff'
                            }, {
                                offset: 1,
                                color: '#70ffac'
                            }]),
                            "borderWidth": 25
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#85b6b2'
                            }, {
                                offset: 1,
                                color: '#6d4f8d'
                            }]),
                            "borderWidth": 25
                        }
                    },
                }, {
                    "name": " ",
                    "value": 16,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": 'rgba(0,0,0,0)',
                            "borderColor": 'rgba(0,0,0,0)',
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": 'rgba(0,0,0,0)',
                            "borderColor": 'rgba(0,0,0,0)',
                            "borderWidth": 0
                        }
                    }
                }]
            }, {
                "name": "CPU分配率 外圈",
                "center": [
                    "50%",
                    "50%"
                ],
                "radius": [
                    "59%",
                    "60%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "data": [{
                    "value": 84,
                    "name": "",
                    "label": {
                        "normal": {
                            "show": true,
                            "formatter": '{d} %',
                            "textStyle": {
                                "fontSize": 28,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        }
                    },
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#5886f0",
                            "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00a2ff'
                            }, {
                                offset: 1,
                                color: '#70ffac'
                            }]),
                            "borderWidth": 1
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#85b6b2'
                            }, {
                                offset: 1,
                                color: '#6d4f8d'
                            }]),
                            "borderWidth": 1
                        }
                    },
                }, {
                    "name": " ",
                    "value": 16,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": 'rgba(0,0,0,0)',
                            "borderColor": 'rgba(0,0,0,0)',
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": 'rgba(0,0,0,0)',
                            "borderColor": 'rgba(0,0,0,0)',
                            "borderWidth": 0
                        }
                    }
                }]
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
