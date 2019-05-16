import React from 'react';
import './app.css';
import setting from './assets/image/setting.png';
import swiper1 from './assets/image/swiper-1.png';
import swiper2 from './assets/image/swiper-2.png';
import swiper3 from './assets/image/swiper-3.png';
import mapInfo from './assets/image/mapInfo.png';
import timg from './assets/image/timg.png';
import screenshot from './assets/image/screenshot.png';

import ReactEcharts from 'echarts-for-react';
import echart from "../src/component/echarts";

import api from "./utils/api";

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
            tabList: [
                {id:1,name:"走廊"},
                {id:2,name:"大厅"},
                {id:3,name:"办公室"},
                {id:4,name:"广场"}
            ],
            tabSelectId: 1,
            mapData: [
                {name:"北京",value:55},
                {name:"山西",value:81},
                {name:"内蒙古",value:47},
                {name:"河南",value:137},
                {name:"湖北",value:116},
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

    tabChange = (item) => {
        this.setState({
            tabSelectId: item.id
        })
    }

    componentDidMount() {
        api.getList();
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
                            <div className="item-body">
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
                                    <img src={setting} width="16" height="16" />
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
                            <div className="col-left">
                                <span></span>
                            </div>
                            <div className="col-right" style={{backgroundImage:"url("+mapInfo+")"}}>
                                <p>今日警告总数</p>
                                <p>2,332</p>
                            </div>
                        </div>
                    </li>
                    <li className="container-right">
                        <div className="item" >
                            <div className="item-title">
                                <div className="text-left">事实监控</div>
                                <div className="row dateTime">
                                    <span className="col">2</span>
                                    <span className="col">0</span>
                                    <span className="col">1</span>
                                    <span className="col isNo">9</span>
                                    <span className="isBorder">-</span>
                                    <span className="col">0</span>
                                    <span className="col isNo">2</span>
                                    <span className="isBorder">-</span>
                                    <span className="col">5</span>
                                    <span className="col">2</span>
                                    <span className="col time">2</span>
                                    <span className="col time isNo">1</span>
                                    <span className="isBorder">:</span>
                                    <span className="col time">4</span>
                                    <span className="col time">8</span>
                                    <span className="refresh isBorder">5秒后刷新</span>
                                </div>
                            </div>
                            <div className="item-body" style={{display:"block"}}>
                                <ul className="tabs">
                                    {
                                        this.state.tabList.map( (item) => 
                                            <li className={item.id === this.state.tabSelectId ? "tab active" :"tab"}
                                                onClick={this.tabChange.bind(this,item)}
                                                key={item.id}
                                            >{item.name}</li>
                                        )
                                    }
                                </ul>
                                <div className="video">
                                    <video></video>
                                    <div className="text-right video-bottom" >
                                        <img src={screenshot} width="53" height="17"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item" style={{height:"180px"}}>
                            <div className="item-title">
                                <div className="text-left">重点区域入侵</div>
                                <div className="text-right"></div>
                            </div>
                            <ul className="img-list">
                                <li className="info">
                                    <img src={timg}></img>
                                    <p className="time">05-12 21:03</p>
                                </li>
                                <li className="info">
                                    <img src={timg}></img>
                                    <p className="time">05-12 21:03</p>
                                </li>
                                <li className="info">
                                    <img src={timg}></img>
                                    <p className="time">05-12 21:03</p>
                                </li>
                            </ul>
                        </div>
                        <div className="item" style={{height:"180px"}}>
                            <div className="item-title">
                                <div className="text-left">陌生人警告</div>
                                <div className="text-right"></div>
                            </div>
                            <ul className="img-list">
                                <li className="info">
                                    <img src={timg}></img>
                                    <p className="time">05-12 21:03</p>
                                </li>
                                <li className="info">
                                    <img src={timg}></img>
                                    <p className="time">05-12 21:03</p>
                                </li>
                                <li className="info">
                                    <img src={timg}></img>
                                    <p className="time">05-12 21:03</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
          );
    }
}

export default app;
