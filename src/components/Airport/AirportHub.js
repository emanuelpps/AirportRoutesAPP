function AirportHub(props) {
  return (
    //airport?.map((info) =>(
    <div class="card text-center">
      <div class="card-header">
        <h4>{props[0]?.cityName}</h4>
        <h6>{props[0]?.country}</h6>
      </div>
      <div class="card-body">
        <h5 class="card-title">{props[0]?.airName}</h5>
      </div>
    </div>
  );
}

export default AirportHub;
