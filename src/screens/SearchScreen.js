import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (price) => {
    return results?.filter((result) => {
      return result?.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={(newTerm) => setsearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList results={filterByPrice("$")} title="Cost Effective" />
        <ResultsList results={filterByPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterByPrice("$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
