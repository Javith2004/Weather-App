import React from "react";

const Forecast = ({ forecast, location }) => {
  return (
    <div className="container mt-5">
      <h4 className="text-white text-center">
        Forecast weather of {location.name}, {location.region}
      </h4>
      
      <div className="row">
        {forecast.forecastday.map((data, index) => (
          <div className="accordion accordion-flush" id="accordionFlushExample"  >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls={`#${index}`}
                >
                  <div className="d-flex flex-row align-items-center mb-3">
                    <div className="p-2">{data.date}</div>
                    <div className="p-2">
                      {data.day.condition.icon}
                    </div>
                    <div className="p-2">{data.day.maxtemp_q}</div>
                  </div>
                </button>
              </h2>
              <div
                id={`#${index}`}
                className="accordion-collapse collapse"
                
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map(() => (
                    <div  className="progress mb-2">
                      <div
                        className="progress"
                        role="progressbar"
                        // or another property to represent progress
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar progress-bar-striped"
                         style={{ width: `${data.temp_c}%` }}
                         >
                          </div>
                      </div>
                    </div>
                   
                ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
