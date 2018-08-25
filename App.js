import React from "react";
import { StyleSheet, Text, View, Picker, AppState } from "react-native";
import GetGeoLocation from "./Components/GetGeoLocation";
import GetUsersMap from "./Components/GetUsersMap";
import GetUsersMapModal from "./Components/GetUsersMapModal";
import Config from "react-native-config";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userLocation: {
        key: "Tapavino",
        title: "Tapavino",
        url: "https://i.imgur.com/sNam9iJ.jpg",
        description: "6 Bulletin Pl, Sydney NSW 2000",
        payMember: true, 
        coordinate: {
          latitude: null,
          longitude: null,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      },
      seconds: 5
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    this._onGetGeoLocationHandler();
  }

  componentWillMount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

 
  _handleAppStateChange = appState => {
    if (appState === "background") {
      console.log("app is in background");
    }
  };

  _onGetGeoLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        // fetch(
        //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        //     position.coords.latitude +
        //     "," +
        //     position.coords.longitude +
        //     "&key=" +
        //     Config.GOOGLE_MAPS_API_KEY
        // )
        //   .then(response => response.json())
        //   .then(responseJson => {
        //     if (responseJson.results.length > 0) {
        //       console.log(
        //         "ADDRESS GEOCODE is BACK!! => " +
        //           responseJson.results[0].formatted_address
        //       );
        //       this.setState({
        //         ...this.state.userLocation,
        //         description: responseJson.results[0].formatted_address
        //       });
        //     } else {
        //       console.log(
        //         "ADDRESS GEOCODE is BACK!! => " +
        //           JSON.stringify(responseJson.results[0])
        //       );
        //     }
        //   });

        console.log("position current " + JSON.stringify(position));
        
        this.setState({
          userLocation: {
            ...this.state.userLocation,
            coordinate: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }
          }
        });
      },
      err => console.log(err)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <GetGeoLocation onGetGeoLocation={this._onGetGeoLocationHandler} /> */}
        <GetUsersMapModal userLocation={this.state.userLocation} />
        {/* <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  picker: {
    width: 100
  }
});
