import React from 'react';
import './app.css';

function app() {
  return (
    <div className="app">
        <ul className="container">
            <li className="container-left">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </li>
            <li className="container-content"></li>
            <li className="container-right"></li>
        </ul>
    </div>
  );
}

export default app;
