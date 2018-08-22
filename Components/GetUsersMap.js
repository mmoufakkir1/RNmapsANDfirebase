import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';


const GetUsersMap = props => {

    console.log("coordinate " + JSON.stringify(props.userLocation.coordinate));
    let userLocationMarker = props.userLocation.coordinate ?
        <MapView.Marker key={props.userLocation.key} coordinate={props.userLocation.coordinate}>
            <MapView.Callout onPress={() => { <Text>hello</Text> }}>
                <Text >{props.userLocation.description}</Text>
            </MapView.Callout>
        </MapView.Marker> : null


    let userLocationCircle = props.userLocation.coordinate ?
        <MapView.Circle
            key={(props.userLocation.coordinate.latitude + props.userLocation.coordinate.longitude).toString()}
            center={props.userLocation.coordinate}
            radius={100}
            strokeWidth={100}
            strokeColor={'#87b272'}
            fillColor={'rgba(230,238,255,0.5)'}
        /> : null

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 27.9506,
                    longitude: -82.4572,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                region={props.userLocation.coordinate}
            >
                {userLocationMarker}
                {userLocationCircle}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '90%',
        paddingTop: 10
    },
    map: {
        width: '100%',
        height: '100%'
    }, circle: {
        // width: 30,
        // height: 30,
        // borderRadius: 30 / 2,
        // backgroundColor: 'red',
    },
    pinText: {
        // color: 'white',
        // fontWeight: 'bold',
        // textAlign: 'center',
        // fontSize: 20,
        // marginBottom: 10,
    },

});
export default GetUsersMap;