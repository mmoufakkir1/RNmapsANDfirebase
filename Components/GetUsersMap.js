import React from 'react';
import { StyleSheet, Text, View, Image ,Modal,Animated} from 'react-native';
import MapView from 'react-native-maps';


const GetUsersMap = props => {

    console.log("userLocation passed " + JSON.stringify(props.userLocation));
    console.log("url passed " + JSON.stringify(props.userLocation.url));
    
    let Image_Http_URL ={ uri: props.userLocation.url};
    
    let userLocationMarker = props.userLocation.coordinate ?
        <MapView.Marker
            key={props.userLocation.key}
            coordinate={props.userLocation.coordinate}
            pinColor={props.userLocation.payMember ? '#009688' : '#f44336'}
        >
            {/* <MapView.Callout>
                <View style={styles.container}>
                    <View
                        style={styles.card}
                    >
                        <Image style={styles.cardImage} source={Image_Http_URL} />
                        
                        <View>
                            <Text style={styles.textLeft}> {props.userLocation.description}</Text>
                           
                        </View>
                    </View>
                </View>
            </MapView.Callout> */}
            
            {/* <Animated.View style={[styles.markerWrap]}>
                <Animated.View style={[styles.ring]} />
                <View style={styles.marker} />
            </Animated.View> */}
            
             <MapView.Callout>
                <Text >{props.userLocation.description}</Text>
                <Image style={styles.cardImage} source={Image_Http_URL} />
            </MapView.Callout>
        </MapView.Marker>
    
        : null


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
               // showsUserLocation={true}
               // followsUserLocation={true}
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
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
      },
      marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
      },
      ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        width: 300,
        height: 200,
        padding: 10
    },
    cardImage: {
        height: 150,
        width: 250,
    },
    textLeft: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    textRight: {
        position: 'absolute',
        right: 0,
        top: 0
    }

});
export default GetUsersMap;