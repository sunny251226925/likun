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
                    <table className="table">
                        <thead className="thead">
                            <tr className="tr">
                                <td className="td text-left">区域</td>
                                <td className="td text-left">告警类型</td>
                                <td className="td text-right">时间</td>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            <tr className="tr">
                                <td className="td text-left">走廊</td>
                                <td className="td text-left">人员异常聚集告警</td>
                                <td className="td text-right">2019-05-12 21:03</td>
                            </tr>
                        </tbody>
                    </table>
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
