function Airport(props) {
  //console.log(props)
  return (
    <div className="col ">
      <div className="card col border border-3 text-center bg-light bg-gradient">
        <div className="card-header bg-transparent border-primary border-start-0 bg-light">
          <h5 className="card-title">{props.city}</h5>
        </div>
        <div className="card-body text-dark">
          <h6 className="card-title">Airport: {props.nameData}</h6>
          <p className="card-text">IATA CODE: {props.iataCode}</p>
          <p className="card-text">
            Average Daily Flights: {props.averageFlights}
          </p>
        </div>
        <div className="card-footer bg-transparent border-primary">
          <div class="accordion accordion-flush" id="accordionFlush">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  data-bs-parent=".multi-collapse"
                >
                  Operators {props.operatorsQty}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                >
                <div class="accordion-body"
              >
                  {props.operators.map((airlines) => (
                    <li className="list-group-item">
                      <h4>{airlines.name}</h4>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airport;
