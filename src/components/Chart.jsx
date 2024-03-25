import React, { useState } from 'react';
import './Chart.css';

function Chart() {
  const [showChildren, setShowChildren] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [showSubChild, setShowSubChild] = useState(false);
 
  
  
  const toggleChildrenVisibility = () => {
    setShowChildren(!showChildren);
  };
  const toggleChild = () => {
    setShowChild(!showChild);
  };
  const toggleSubChild = () => {
    setShowSubChild(!showSubChild);
  };
 

  return (
    <div>
      <div id="wrapper">
        <span className="label" id='process' style={{ backgroundColor: 'rgb(243, 190, 91)' }}>Process</span>
        <div className="branch lv1">
          <div className="entry">
            <span onMouseOver={toggleChildrenVisibility} className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>Research</span>
            {showChildren && (
              <div  className="branch lv2">
                <div className="entry">
                  <span onMouseOver={toggleSubChild} className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>External</span>
                  {showSubChild && (
                    <div className="branch lv2">
                      <div className="entry">
                        <span onMouseOver={toggleChild} className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>B2C</span>
                        {showChild && (
                          <div className="branch lv2">
                            <div className="entry"><span className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>Online</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>Interview</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>Public data</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>health</span></div>
                           
                          </div>
                          
                        )}
                      </div>
                      <div className="entry"><span className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>B2C</span></div>
                    </div>
                  )}
                </div>
                <div className="entry"><span className="label" style={{ backgroundColor: 'rgb(243, 190, 91)' }}>Internal</span></div>
              </div>
            )}
          </div>

          {/* 2 */}
          <div className="entry">
            <span className="label"  onMouseOver={toggleChildrenVisibility} style={{ backgroundColor: 'Pink' }}>Planning</span>
            {showChildren && (
              <div className="branch lv2">
                <div className="entry">
                  <span className="label" style={{ backgroundColor: 'Pink' }}>PRD</span>
                  {showSubChild && (
                    <div className="branch lv2">
                      <div className="entry">
                        <span  className="label" style={{ backgroundColor: 'Pink' }}>B2C</span>
                        {showChild && (
                          <div className="branch lv2">
                            <div className="entry"><span className="label" style={{ backgroundColor: 'Pink' }}>Online</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'Pink' }}>Interview</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'Pink' }}>Public data</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'Pink' }}>health</span></div>
                          </div>
                          )}
                      </div>
                      <div className="entry"><span className="label" style={{ backgroundColor: 'Pink' }}>B2C</span></div>
                    </div>
                    )}
                </div>
                <div className="entry"><span className="label" style={{ backgroundColor: 'Pink' }}>Specs</span></div>
              </div>
              )}
          </div>

          {/* 3 */}
          <div className="entry">
            <span  className="label"  onMouseOver={toggleChildrenVisibility} style={{ backgroundColor: 'lightgreen' }}>Design</span>
            {showChildren && (
              <div className="branch lv2">
                <div className="entry">
                  <span  className="label" style={{ backgroundColor: 'lightgreen' }}>Hardware</span>
                  {showSubChild && (
                    <div className="branch lv2">
                      <div className="entry">
                        <span  className="label" style={{ backgroundColor: 'lightgreen' }}>B2C</span>
                       {showChild && (
                          <div className="branch lv2">
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightgreen' }}>Online</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightgreen' }}>Interview</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightgreen' }}>Public data</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightgreen' }}>health</span></div>
                          </div>
                          )}
                      </div>
                      <div className="entry"><span className="label" style={{ backgroundColor: 'lightgreen' }}>B2C</span></div>
                    </div>
                    )}
                </div>
                <div className="entry"><span className="label" style={{ backgroundColor: 'lightgreen' }}>Software</span></div>
              </div>
              )}
          </div>

          {/* 4 */}
          <div className="entry">
            <span  className="label"  onMouseOver={toggleChildrenVisibility} style={{ backgroundColor: 'yellow' }}>Manifacture</span>
            {showChildren && (
              <div className="branch lv2">
                <div className="entry">
                  <span  className="label" style={{ backgroundColor: 'yellow' }}>Material</span>
                  {showSubChild && (
                    <div className="branch lv2">
                      <div className="entry">
                        <span  className="label" style={{ backgroundColor: 'yellow' }}>B2C</span>
                        {showChild && (
                          <div className="branch lv2">
                            <div className="entry"><span className="label" style={{ backgroundColor: 'yellow' }}>Online</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'yellow' }}>Interview</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'yellow' }}>Public data</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'yellow' }}>health</span></div>
                          </div>
                          )}
                      </div>
                      <div className="entry"><span className="label" style={{ backgroundColor: 'yellow' }}>B2C</span></div>
                    </div>
                    )}
                </div>
                <div className="entry"><span className="label" style={{ backgroundColor: 'yellow' }}>Production</span></div>
              </div>
              )}
          </div>


          {/* 5 */}
          <div className="entry">
            <span className="label"  onMouseOver={toggleChildrenVisibility} style={{ backgroundColor: 'lightblue' }}>Sales</span>
            {showChildren && (
              <div className="branch lv2">
                <div className="entry">
                  <span  className="label" style={{ backgroundColor: 'lightblue' }}>Online</span>
                  {showSubChild && (
                    <div className="branch lv2">
                      <div className="entry">
                        <span className="label" style={{ backgroundColor: 'lightblue' }}>B2C</span>
                        {showChild && (
                          <div className="branch lv2">
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightblue' }}>Online</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightblue' }}>Interview</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightblue' }}>Public data</span></div>
                            <div className="entry"><span className="label" style={{ backgroundColor: 'lightblue' }}>health</span></div>
                          </div>
                          )}
                      </div>
                      <div className="entry"><span className="label" style={{ backgroundColor: 'lightblue' }}>B2C</span></div>
                    </div>
                    )}
                </div>
                <div className="entry"><span className="label" style={{ backgroundColor: 'lightblue' }}>Dealership</span></div>
              </div>
              )}
          </div>

        </div>
      </div>
    
    </div>
  );
}

export default Chart;
