import { useState } from "react";
import AirportList from "../AirportList/AirportList";
import ClipLoader from "react-spinners/ClipLoader";
//import AirportHub from "../Airport/AirportHub";

function Container(props) {
  const [airportFetch, setAirportFetch] = useState([]);

  const [airportsFetch, setAirportsFetch] = useState([]);

  const [loadingInProgress, setLoading] = useState(false);

  /// API fetch for airport information ///
  const fetchAirport = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2d97d93c51msh8a9530fa6851b51p177e0ajsn4e71d383e75d",
        "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
      },
    };

    const url = `https://aerodatabox.p.rapidapi.com/airports/icao/${props.textValue}`;

    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((airportInfo) => {
        console.log(airportInfo);
        const airportFetchData = Object.keys(airportInfo).map(() => {
          return {
            airName: airportInfo.shortName,
            cityName: airportInfo.municipalityName,
            country: airportInfo.country.name,
            //icaoCode: airportInfo.icao,
            liveAtc: airportInfo.urls.liveAtc,
            //wikipedia: airportInfo[airportDataInfo].urls.wikipedia,
            //location: airportInfo[airportDataInfo].urls.flightRadar,
          };
        });
        setAirportFetch(airportFetchData);
      })
      .catch((error) => console.error(error));
  };

  console.log(airportFetch);

  /// API fetch for routes information ///
  const fetchAirports = async () => {
    setLoading(true);
    const optionsAiports = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2d97d93c51msh8a9530fa6851b51p177e0ajsn4e71d383e75d",
        "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
      },
    };

    const urlAirports = `https://aerodatabox.p.rapidapi.com/airports/icao/${props.textValue}/stats/routes/daily`;

    await fetch(urlAirports, optionsAiports)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dailyFlights = data.routes.length;
        //console.log(data.routes);
        //console.log(dailyFlights);
        const airportsFetchData = data.routes?.map((airportData) => {
          return {
            dailyFlights,
            key: airportData.length,
            city: airportData.destination.municipalityName,
            nameData: airportData.destination.shortName,
            iataCode: airportData.destination.iata,
            averageFlights: airportData.averageDailyFlights,
            operatorsQty: airportData.operators.length,
            operators: airportData.operators,
          };
        });
        setAirportsFetch(airportsFetchData);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    setLoading(false);
  };

  return (
    <div>
      <div className="d-flex flex-column mb-3">
        <div class="form-check form-check-reverse form-switch mx-auto mb-4 text-center">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Meteorological Info (The next Update)
          </label>
        </div>
      </div>
      <div className="d-grid gap-2 col-3 mb-5 mx-auto">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            fetchAirport();
            fetchAirports();
          }}
          disabled={loadingInProgress}
        >
          Generate
        </button>
      </div>
      {loadingInProgress ? (
        <div className="loader-container text-center">
          <ClipLoader color={"black"} size={50} />
        </div>
      ) : (
        <AirportList
          airport={airportFetch}
          airports={airportsFetch}
          airportName={props.textValue}
        />
      )}
    </div>
  );
}

export default Container;
