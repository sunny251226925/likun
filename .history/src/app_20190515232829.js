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
