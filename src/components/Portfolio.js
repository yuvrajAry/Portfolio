import React, { Component } from 'react';
import './Portfolio.css'; 

export default class Portfolio extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="portfolio-wrapper">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, index) => {
                return(
                  <div className="portfolio-item" key={index}>
                    <div className="portfolio-box">
                      <div className="portfolio-content">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}
