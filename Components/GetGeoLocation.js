import React from 'react';
import { Button } from 'react-native';


const GetGeoLocation = props =>{
    return (
        <Button title="Get Location" onPress={props.onGetGeoLocation} />
    );
}

export default GetGeoLocation;