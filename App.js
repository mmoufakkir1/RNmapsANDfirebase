import React from "react";
import { StyleSheet, Text, View, Picker, AppState } from "react-native";
import GetGeoLocation from "./Components/GetGeoLocation";
import UsersMap from "./Components/GetUsersMap";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userLocation: {
        key: 'Tapavino',
        title: 'Tapavino',
        description: '6 Bulletin Pl, Sydney NSW 2000',
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
    navigator.geolocation.getCurrentPosition(position => {
      console.log("position current " + JSON.stringify(position));
      this.setState({
        userLocation: {
          coordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        }
      });
    }, err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <GetGeoLocation onGetGeoLocation={this._onGetGeoLocationHandler} /> */}
        <UsersMap userLocation={this.state.userLocation} />
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
