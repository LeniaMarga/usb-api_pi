import React, { Component } from 'react';
import AQContainer from './containers/AQContainer';
import "./App.css";

class App extends Component {

    render() {

        // const rooms = {
        //     'r1.024 z03-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-3/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-3/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z04-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-4/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-4/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z05-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-5/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-5/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z06-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-6/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-6/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z07-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-7/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-7/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z08-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-8/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-8/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z09-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-9/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-9/co2/raw/historic?outputAs=json'
        //     },

        //     'r1.024 z10-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-10/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-10/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z11-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-11/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-11/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z12-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-12/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-12/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z13-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-13/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-13/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z14-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-14/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-14/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z15-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-15/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-15/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z16-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-16/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-16/co2/raw/historic?outputAs=json'
        //     },
        //     'r1.024 z17-co2': {
        //         'current': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-17/co2/raw',
        //         'historic': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-17/co2/raw/historic?outputAs=json'
        //     }
        // }

        const rooms = {
            'r1.024 z03-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-3/co2/raw',
            'r1.024 z04-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-4/co2/raw',
            'r1.024 z05-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-5/co2/raw',
            'r1.024 z06-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-6/co2/raw',
            'r1.024 z07-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-7/co2/raw',
            'r1.024 z08-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-8/co2/raw',
            'r1.024 z09-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-9/co2/raw',
            'r1.024 z10-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-10/co2/raw',
            'r1.024 z11-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-11/co2/raw',
            'r1.024 z12-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-12/co2/raw',
            'r1.024 z13-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-13/co2/raw',
            'r1.024 z14-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-14/co2/raw',
            'r1.024 z15-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-15/co2/raw',
            'r1.024 z16-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-16/co2/raw',
            'r1.024 z17-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-17/co2/raw'
        }

        const roomshist = {
            'r1.024 z03-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-3/co2/raw/historic',
            'r1.024 z04-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-4/co2/raw/historic',
            'r1.024 z05-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-5/co2/raw/historic',
            'r1.024 z06-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-6/co2/raw/historic',
            'r1.024 z07-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-7/co2/raw/historic',
            'r1.024 z08-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-8/co2/raw/historic',
            'r1.024 z09-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-9/co2/raw/historic',
            'r1.024 z10-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-10/co2/raw/historic',
            'r1.024 z11-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-11/co2/raw/historic',
            'r1.024 z12-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-12/co2/raw/historic',
            'r1.024 z13-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-13/co2/raw/historic',
            'r1.024 z14-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-14/co2/raw/historic',
            'r1.024 z15-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-15/co2/raw/historic',
            'r1.024 z16-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-16/co2/raw/historic',
            'r1.024 z17-co2': 'https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/timeseries/room-1-024-zone-17/co2/raw/historic'
        }


        return ( <
            AQContainer rooms = { rooms }
            roomshist = { roomshist }
            />
        );
    }
}

export default App;