import React from 'react';
import { StyleSheet, Text, View, Image, Modal, Animated, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

class GetUsersMapModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.handelsetModalVisible = this.handelsetModalVisible.bind(this);
    }

    handelsetModalVisible() {
        this.setState({ modalVisible: !this.state.modalVisible }); 
        console.log(this.state.modalVisible);
        return (
            <View style={{ marginTop: 22 }}>
            <Modal style={{ zIndex: 22 }}
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>
                    </View>
                </View>
            </Modal>

        </View> 
        )
    }

    render() {
        console.log("userLocation passed " + JSON.stringify(this.props.userLocation));
        console.log("url passed " + JSON.stringify(this.props.userLocation.url));

        let Image_Http_URL = { uri: this.props.userLocation.url };

        let userLocationMarker = this.props.userLocation.coordinate ?
            <MapView.Marker
                key={this.props.userLocation.key}
                coordinate={this.props.userLocation.coordinate}
                pinColor={this.props.userLocation.payMember ? '#009688' : '#f44336'}
                onPress={this.handelsetModalVisible} 
            >
                {/* <MapView.Callout>
                <View style={styles.container}>
                    <View
                        style={styles.card}
                    >
                        <Image style={styles.cardImage} source={Image_Http_URL} />
                        
                        <View>
                            <Text style={styles.textLeft}> {this.props.userLocation.description}</Text>
                           
                        </View>
                    </View>
                </View>
            </MapView.Callout> */}

                {/* <Animated.View style={[styles.markerWrap]}>
                <Animated.View style={[styles.ring]} />
                <View style={styles.marker} />
            </Animated.View> */}

               
                  
               
                
            </MapView.Marker>
            : null


        let userLocationCircle = this.props.userLocation.coordinate ?
            <MapView.Circle
                key={(this.props.userLocation.coordinate.latitude + this.props.userLocation.coordinate.longitude).toString()}
                center={this.props.userLocation.coordinate}
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
                    region={this.props.userLocation.coordinate}
                >
                    {userLocationMarker}
                    {userLocationCircle}
                </MapView>
            </View>
        );
    }
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
        height: 50,
        width: 50,
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
export default GetUsersMapModal;