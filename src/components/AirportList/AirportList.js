import Airport from "../Airport/Airport";
import AirportHub from "../Airport/AirportHub";



function AirportList(props) {
  console.log(props.airport)
  return (
    <div>
    <div className=""> 
          <AirportHub {...props.airport}/>
    <h2 className="mt-5 text-center">We found {props.airports.length} routes</h2>
    <div className="container row row-cols-1 row-cols-md-2 g-4 mx-auto ">
      {props.airports?.map((airpt, index) => (
          <Airport key={index} {...airpt} />
      ))}
    </div>
    </div>
    </div>
  );
}

export default AirportList;
