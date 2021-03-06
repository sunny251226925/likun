import React from 'react';
import './app.css';
import { HTTPHOST } from './utils/config';
import setting from './assets/image/setting.png';
import swiper1 from './assets/image/swiper-1.png';
import mapInfo from './assets/image/mapInfo.png';
import screenshot from './assets/image/screenshot.png';
import ReactEcharts from 'echarts-for-react';
import echart from "../src/component/echarts";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

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
            tabList: [ //实时监控tab选项卡
                {id: 2, name: "走廊"},
                {id: 3, name: "大厅"},
                {id: 1, name: "办公室"},
                {id: 4, name: "广场"}
            ],
            dataTime: [], //实时监控时间
            warningType: { //安全监控类别
                "5G": "5G巡航",
                fall: "行人跌倒警告",
                fight: "行人斗殴警告",
                run: "行人跑步警告",
                invasion: "重点区域入侵",
                personDetection: "人员异常聚集",
                personMo: "陌生人告警",
                smoke: "吸烟识别"
            },
            swiperList: [], //告警轮播list
            invasionArray: [], //重点区域入侵list
            personMoArray: [], //陌生人警告list
            dataType: [ //告警趋势分类
                {id:1,name:"月度", key:"mouth"},
                {id:2,name:"每日", key:"day"}
            ],
            tabSelectId: 2,
            mapData: [],
            data: {},
            auotTime: 2,
            interval: null,
            intervalTime: null, 
            dataSelect: {id:1,name:"月度", key:"mouth"},
            mySwiper: null,
            mySwiper2: null,
            mySwiper3: null
        }
    };

    tabChange = (item) => {
        this.setState({
            tabSelectId: item.id
        })
    };

    dataTpeChange = (item) => {
        this.setState({
            dataSelect: item
        })
    };

    getDataInfo = () => {
        api.getList().then( (res) => {
              
            const day = {
                title: [],
                value: []
            };
            for (let key in res.trend.day){
                day.title.push(key);
                day.value.push(res.trend.day[key]);
            }

            const mouth = {
                title: [],
                value: []
            };
            for (let key in res.trend.mouth){
                mouth.title.push(key);
                mouth.value.push(res.trend.mouth[key])
            }

            res.trend = {
                day: day,
                mouth: mouth
            };
            
            res.invasion.forEach(function(item){
                item.time = item.time.substring(5,item.time.length);
                item.time = item.time.substring(0,item.time.length-3);
            })

            let swiperList = [];
            res.alarm.forEach(function(item){

            })
                swiperList = this.state.swiperList.concat(res.alarm);
            // if(alarm.length > 30){
            //     alarm.splice(0,10);
            // }
            
            let invasionArray = [];
                invasionArray = this.state.invasionArray.concat(res.invasion);
            // if(invasionArray.length > 20){
            //     invasionArray.splice(0,10)
            // }

            let personMoArray = [];
                personMoArray = this.state.personMoArray.concat(res.personMo);
            // if(personMoArray.length > 20){
            //     personMoArray.splice(0,10)
            // }

            res.personMo.forEach(function(item){
                item.time = item.time.substring(5,item.time.length);
                item.time = item.time.substring(0,item.time.length-3);
            })
            this.setState({
                data: res,
                swiperList: swiperList,
                personMoArray: personMoArray,
                invasionArray: invasionArray,
                mapData: res.map
            });

        });
    };

    componentDidMount() {
        this.getDataInfo();

        this.state.mySwiper = new Swiper ('#swiper1', {
            slidesPerView : 3,
            centeredSlides : true,
            autoplayStopOnLast : true,
            spaceBetween : 20,
            observer: true,
            // autoplay: {
            //     delay: 1500,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: false
            // }
        })

        this.state.mySwiper2 = new Swiper ('#swiper2', {
            slidesPerView :3,
            centeredSlides: true,
            autoplayStopOnLast : true,
            spaceBetween: 20,
            observer: true,
            // autoplay: {
            //     delay: 1500,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: false
            // }
        })

        this.state.mySwiper3 = new Swiper ('#swiper3', {
            slidesPerView: 4,
            direction: 'vertical',
            observer: true,
            height: 160,
            autoplay: {
              delay: 1500,
              stopOnLastSlide: false,
              disableOnInteraction: false
            }
        })

        this.state.interval = setInterval(() => {
            this.getDataInfo();
            if(this.state.mySwiper.activeIndex < this.state.invasionArray.length - 2){
                this.state.mySwiper.slideNext();
            }
            if(this.state.mySwiper2.activeIndex < this.state.personMoArray.length - 2){
                this.state.mySwiper2.slideNext();
            }
        }, 2000)

        this.state.intervalTime = setInterval(() => {
            let d = new Date();
            let autoTime = this.state.auotTime;

            if(autoTime <= 1){
                this.setState({
                    auotTime: 2
                })
            } else {
                autoTime--;
                this.setState({
                    auotTime: autoTime
                })
            }

            let time = "";
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let date = d.getDate();
            let hh = d.getHours();
            let mm = d.getMinutes();
            if(month <= 9){
                month = "0" + month;
            }
            if(date <= 9){
                date = "0" + date;
            }
            if(hh <= 9){
                hh = "0" + hh;
            }
            if(mm <= 9){
                mm = "0" + mm;
            }

            time = year + "-" + month + "-" + date + hh + ":" + mm;
               
            this.setState({
                dataTime: time.split("")
            })
            
        }, 1000)
        
    }

    componentWillUnmount(){
         clearInterval(this.state.interval);
         clearInterval(this.state.intervalTime);
    }

    render() {
        return (
            <div className="app">
                <div className="title">
                    <span>安全指挥中心</span>
                    <span className="tag active">全国</span>
                </div>
                {
                    this.state.data ? <ul className="container">
                        <li className="container-left three">
                            <div className="item">
                                <div className="item-title">
                                    <div className="text-left">告警轮播</div>
                                    <div className="text-right"></div>
                                </div>
                                <div className="item-body block">
                                    <ul className="row h20">
                                        <li className="col col-1 text-left" style={{width:"30px"}}>区域</li>
                                        <li className="col text-left">告警类型</li>
                                        <li className="col text-right">时间</li>
                                    </ul>
                                    <div className="swiper-container gaojing"  id="swiper3">
                                        <ul className="swiper-wrapper">
                                            {
                                                this.state.swiperList.map( (item,index) =>
                                                    <li className="swiper-slide bg-img" style={{backgroundImage:"url("+swiper1+")"}} key={index}>
                                                        <div className="col col-1 text-left">{item.local}</div>
                                                        <div className="col text-left">{this.state.warningType[item.type]}</div>
                                                        <div className="col text-right">{item.time}</div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-title">
                                    <div className="text-left">安全监控</div>
                                    <div className="text-right">
                                        <img src={setting} width="16" height="16" ></img>
                                        <span>全部</span>
                                    </div>
                                </div>
                                {
                                    this.state.data.date ? 
                                    <ul className="pie-list">
                                        <li className="pie">
                                            <ReactEcharts option={echart.pie("重点区域入侵",this.state.data.date["invasion"],"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                        </li>
                                        <li className="pie">
                                            <ReactEcharts option={echart.pie("5G 巡航",this.state.data.date["5G"],"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                        </li>
                                        <li className="pie">
                                            <ReactEcharts option={echart.pie("人员异常聚集",this.state.data.date["personDetection"],"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                        </li>
                                        <li className="pie">
                                            <ReactEcharts option={echart.pie("吸烟识别", this.state.data.date["smoke"] ,"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                        </li>
                                        <li className="pie">
                                            <ReactEcharts option={echart.pie("行人斗殴",this.state.data.date["fight"],"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                        </li>
                                        <li className="pie">
                                            <ReactEcharts option={echart.pie("行人跌倒",this.state.data.date["fall"],"#7777eb","#70ffac")} style={this.state.pie.style}></ReactEcharts>
                                        </li>
                                    </ul> : null
                                }
                                
                            </div>
                            <div className="item">
                                <div className="item-title">
                                    <div className="text-left">
                                        <span>告警趋势分析</span>
                                        {
                                            this.state.dataType.map( (item) =>
                                                <span className={this.state.dataSelect.id === item.id ? "tag active" : "tag"}
                                                      onClick={this.dataTpeChange.bind(this,item)}
                                                      key={item.id}>
                                                    {item.name}
                                                </span>
                                            )
                                        }
                                    </div>
                                    <div className="text-right">
                                        <span className="color-hui">次/{this.state.dataSelect.key === "mouth" ? "月":"日"}</span>
                                    </div>
                                </div>
                                <div className="item-body"> 
                                    {
                                        this.state.data.trend && this.state.data.trend.day && this.state.dataSelect.key === "day" ? 
                                        <ReactEcharts
                                            option={echart.bar(this.state.data.trend.day.title,this.state.data.trend.day.value)}
                                            style={this.state.pie.style}>
                                        </ReactEcharts> : null
                                    }

                                    {
                                        this.state.data.trend && this.state.data.trend.mouth && this.state.dataSelect.key === "mouth" ? 
                                        <ReactEcharts
                                            option={echart.bar(this.state.data.trend.mouth.title,this.state.data.trend.mouth.value)}
                                            style={this.state.pie.style}>
                                        </ReactEcharts> : null
                                    }
                                </div>
                            </div>
                        </li>
                        <li className="container-content">
                            <ReactEcharts option={echart.map(this.state.mapData)}  style={this.state.pie.style}></ReactEcharts>
                            <div className="mapInfo">
                                <div className="col-right" style={{backgroundImage:"url("+mapInfo+")"}}>
                                    <p>今日警告总数</p>
                                    <p className="numberAnimation">{this.state.data.total}</p>
                                    {/* <ReactEcharts option={echart.total(this.state.data.total)}  style={this.state.pie.style}></ReactEcharts> */}
                                </div>
                                <div className="col-left">
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li className="container-right">
                            <div className="item" >
                                <div className="item-title">
                                    <div className="text-left" style={{flex: "0 0 100px"}}>实时监控</div>
                                    <div className="row dateTime">
                                        <span className="col">{this.state.dataTime[0]}</span>
                                        <span className="col">{this.state.dataTime[1]}</span>
                                        <span className="col">{this.state.dataTime[2]}</span>
                                        <span className="col isNo">{this.state.dataTime[3]}</span>
                                        <span className="isBorder">{this.state.dataTime[4]}</span>
                                        <span className="col">{this.state.dataTime[5]}</span>
                                        <span className="col isNo">{this.state.dataTime[6]}</span>
                                        <span className="isBorder">{this.state.dataTime[7]}</span>
                                        <span className="col">{this.state.dataTime[8]}</span>
                                        <span className="col">{this.state.dataTime[9]}</span>
                                        <span className="col time">{this.state.dataTime[10]}</span>
                                        <span className="col time isNo">{this.state.dataTime[11]}</span>
                                        <span className="isBorder">{this.state.dataTime[12]}</span>
                                        <span className="col time">{this.state.dataTime[13]}</span>
                                        <span className="col time">{this.state.dataTime[14]}</span>
                                        {/* <span className="refresh isBorder">{this.state.auotTime}秒后刷新</span> */}
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
                                        {
                                            this.state.data.camera ? 
                                            <iframe
                                                style={{width:'100%', height:"100%", overflow:'visible'}}
                                                ref="iframe"
                                                src={this.state.data.camera["camera"+this.state.tabSelectId]}
                                                width="100%"
                                                height="100%"
                                                scrolling="no"
                                                frameBorder="0"
                                            /> : null
                                        }
                                        
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
                                <div className="swiper-container" id="swiper1">
                                    <div className="swiper-wrapper">
                                        {
                                            this.state.invasionArray.length > 0 ? this.state.invasionArray.map( (item,index) =>
                                                <div className="swiper-slide" key={index}>
                                                    <img src={HTTPHOST +"/"+ item.picpath}></img>
                                                    <p className="time">{item.time}</p>
                                                </div> 
                                            ) : null
                                        }
                                    </div>
                                </div>  
                            </div>
                            <div className="item" style={{height:"180px"}}>
                                <div className="item-title">
                                    <div className="text-left">陌生人警告</div>
                                    <div className="text-right"></div>
                                </div>
                                <div className="swiper-container" id="swiper2">
                                    <div className="swiper-wrapper">
                                        {
                                            this.state.personMoArray.length > 0 ? this.state.personMoArray.map( (item,index) =>
                                                <div className="swiper-slide" key={index}>
                                                    <img src={HTTPHOST +"/"+ item.picpath}></img>
                                                    <p className="time">{item.time}</p>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul> : null
                }
            </div>
          );
    }
}

export default app;
