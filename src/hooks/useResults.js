import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setresults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "miami",
        },
      });

      setresults(response?.data?.businesses);
    } catch (error) {
      setErrorMessage("Something Went Wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
