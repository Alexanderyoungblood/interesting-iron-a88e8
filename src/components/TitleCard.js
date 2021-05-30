import React from 'react';

export default class TitleCard extends React.Component {
    render() {
        return (
          <div className="site-title-card">
            <svg viewBox="0 0 117 45" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="15"><tspan className="show">A</tspan><tspan className="reveal">lexander</tspan></text>
              <text x="0" y="30"><tspan className="hide">A</tspan><tspan className="show">J</tspan><tspan className="reveal">ohn</tspan></text>
              <text x="0" y="45"><tspan className="hide">A</tspan><tspan className="hide">J</tspan><tspan className="show">Youngb</tspan><tspan className="reveal">lood</tspan></text>
            </svg>
          </div> 
        );
    }
}
