import { useState } from "react";
import Container from "../Container/Container";
import { debounce } from "debounce";


export function SelectionMenu() {

const [searchTextValue, setSerchTextValue] = useState('');





const onSearchChange = debounce((value) => {
  setSerchTextValue(value);
}, 50);

  return (
    <div>
      <input id="inputText"
        className="form-control w-25 p-2 mx-auto"
        value={searchTextValue}
        onChange={(event) =>{
          event.persist();
          onSearchChange(event.target.value);
        }}
        placeholder="Airport Code"
        aria-label="Airport Code"
      ></input>
      <p className="text-center">4 letter ICAO code for the airport</p>
      <p className="text-center">
        In case you dont know{" "}
        <a href="https://www.world-airport-codes.com/">click here</a>
      </p>
      <Container textValue={searchTextValue}/>
    </div>
  );
}
