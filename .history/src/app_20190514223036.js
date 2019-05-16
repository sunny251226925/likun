import React from 'react';
import './app.css';

function app() {
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
                        <div className="text-right">告警轮播</div>
                    </div>
                    <div className="table">
                        <div className="thead">
                            <ul className="tr">
                                <li className="td text-left">区域</li>
                                <li className="td text-left">告警类型</li>
                                <li className="td text-right">时间</li>
                            </ul>
                        </div>
                        <div className="tbody">
                            <ul className="tr">
                                <li className="td text-left">区域</li>
                                <li className="td text-left">告警类型</li>
                                <li className="td text-right">告警类型</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item"></div>
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

export default app;
