import axios from "axios";
import { useState } from "react";

function useHitAPI() {
  var [data, setDate] = useState();
  var [error, setError] = useState();
  axios({
    url: "http://apibyauw.eu-4.evennode.com/api" + "/allcakes",
    method: "get"
  }).then((response) => {
    setCakes(response.data.data)  // updating the state
    setLoading(false);
  }, (error) => {
    setError(error)
    setLoading(false);
  })
}
function MyComponent () {
  useHitAPI();
}