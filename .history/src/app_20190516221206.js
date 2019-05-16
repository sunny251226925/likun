import React from 'react';
import './app.css';
import setting from './assets/image/setting.png';
import swiper1 from './assets/image/swiper-1.png';
import swiper2 from './assets/image/swiper-2.png';
import swiper3 from './assets/image/swiper-3.png';

import ReactEcharts from 'echarts-for-react';
import echart from "../src/component/echarts";

class app extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pie: {
                style: {
                    width: "100%",
                    height: "100%"
                }
            },
            mapData: [
                {name:"北京",value:55},
                {name:"天津",value:42},
                {name:"河北",value:102},
                {name:"山西",value:81},
                {name:"内蒙古",value:47},
                {name:"辽宁",value:67},
                {name:"吉林",value:82},
                {name:"黑龙江",value:66},
                {name:"上海",value:24},
                {name:"江苏",value:92},
                {name:"浙江",value:114},
                {name:"安徽",value:109},
                {name:"福建",value:116},
                {name:"江西",value:91},
                {name:"山东",value:119},
                {name:"河南",value:137},
                {name:"湖北",value:116},
                {name:"湖南",value:114},
                {name:"重庆",value:91},
                {name:"四川",value:88},
                {name:"贵州",value:62},
                {name:"云南",value:83},
                {name:"西藏",value:30},
                {name:"陕西",value:80},
                {name:"甘肃",value:56},
                {name:"青海",value:10},
                {name:"宁夏",value:18},
                {name:"新疆",value:67},
                {name:"广东",value:123},
                {name:"广西",value:59},
                {name:"海南",value:14}
            ]
                
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
                    <span className="tag active">全国</span>
                </div>
                <ul className="container">
                    <li className="container-left three">
                        <div className="item">
                            <div className="item-title">
                                <div className="text-left">告警轮播</div>
                                <div className="text-right"></div>
                            </div>
                            <div className="item-body"  style={{marginTop:"30px"}}>
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
                                    <ReactEcharts option={echart.pie("重点区域入侵",30,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                </li>
                                <li className="pie">
                                    <ReactEcharts option={echart.pie("5G 巡航",10,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                </li>
                                <li className="pie">
                                    <ReactEcharts option={echart.pie("人员异常聚集",80,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                </li>
                                <li className="pie">
                                    <ReactEcharts option={echart.pie("吸烟识别", 1 ,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                </li>
                                <li className="pie">
                                    <ReactEcharts option={echart.pie("用水检测",90,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                </li>
                                <li className="pie">
                                    <ReactEcharts option={echart.pie("消防栓",5,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="item-title">
                                <div className="text-left">
                                    <span>告警趋势分析</span>
                                    <span className="tag active">月度</span>
                                    <span className="tag">每日</span>
                                </div>
                                <div className="text-right">
                                    <span className="color-hui">次/月</span>
                                </div>
                            </div>
                            <div className="item-body">
                                <ReactEcharts option={echart.bar("消防栓",5,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                            </div>
                        </div>
                    </li>
                    <li className="container-content">
                        <ReactEcharts option={echart.map(this.state.mapData)}  style={this.state.pie.style}></ReactEcharts>
                        <div className="mapInfo">
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </li>
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
