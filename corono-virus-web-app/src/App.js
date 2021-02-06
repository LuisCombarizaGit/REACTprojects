import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  // Calling API
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  // Render Components
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
