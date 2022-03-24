import React , {Component} from 'react';
import axios from "axios";
import rateLimit from "axios-rate-limit";
import { setIntervalAsync } from 'set-interval-async/dynamic';
import AQData from '../components/AQData';
import AQDataHist from '../components/AQDataHist';

const http = rateLimit(axios.create(), { maxRequests: 3, perMilliseconds: 250, maxRPS: 2 })

class AQContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            rooms:[],
            roomshist:[],
            valuechange:[]
        }
        this.axiosFunc = this.axiosFunc.bind(this);
        this.valueChanged = this.valueChanged.bind(this);

    }

///to fetch the current state
// axiosFunc(){
//     axios.all(Object.values(this.props.rooms).map(url => http.get(url)))
//     .then(res => {
//         const entries = res.map((resp, i) => [Object.keys(this.props.rooms)[i], resp.data.latest]);
//         console.log(entries);
//         this.setState({ rooms:entries});
//     })
//    .catch(err => console.log(err))
// }

///to fetch historic data
axiosFunc(){
    axios.all(Object.values(this.props.roomshist).map(url => http.get(url)))
    .then(res => {
        const entrieshist = res.map((resp, i) => [Object.keys(this.props.roomshist)[i], resp.data.historic.values]);
        console.log(entrieshist);
        this.setState({ roomshist:entrieshist});
    })
   .catch(err => console.log(err))
}

//combined
// axiosFunc(){
//      
//     axios.all([Object.values(this.props.rooms).map(url => http.get(url)), Object.values(this.props.roomshist).map(url => http.get(url))])
//     .then(axios.spread((res1, res2)=> {
//         const response1 = res1.data;
//         const response2 = res2.data;
//         console.log(res1.data);
//         //const entries = response1.map((resp, i) => [Object.keys(this.props.rooms)[i], resp.data.latest]);
//         // const entrieshist = response2.map((resp, i) => [Object.keys(this.props.roomshist)[i], resp.data.historic.values]);
//        // console.log(entries);
//         // console.log(entrieshist);
//         // this.setState({ rooms:entries});
//         // this.setState({ roomshist:entrieshist});
//     }))
//    .catch(err => console.log(err))
// }

componentDidMount(){
    this.axiosFunc();
    this.intervalAsync = setIntervalAsync(this.axiosFunc, 3000);
}

componentWillUnmount() {
    clearInterval(this.intervalAsync);
}

componentDidUpdate(prevProps, prevState){
    if(prevState.rooms !== this.state.rooms){
        if(prevState.rooms.length>0){
           this.valueChanged(prevState);
        }
    }
}

valueChanged(prevState){
     console.log(prevState.rooms)
     console.log(this.state.rooms)
     var valuechange = this.state.rooms.map(function (room, index){
         return (room[1].value - prevState.rooms[index][1].value).toFixed(2)
     })
     this.setState({valuechange:valuechange})
     console.log(this.state.valuechange)

}

render(){
    return (
        <div>
        <h2> Air Quality now </h2> 
            <AQData rooms={this.state.rooms} handleValueChange={this.state.valuechange}/>  
            <AQDataHist roomshist={this.state.roomshist}/>  
        </div>
    )
}

}

export default AQContainer;
