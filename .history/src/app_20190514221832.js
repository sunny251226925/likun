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
                    <div className="item-title"></div>
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
