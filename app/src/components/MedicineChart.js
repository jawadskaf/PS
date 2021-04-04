//  import React, {Component,useState, useEffect} from 'react';
// // import { Line } from 'react-chartjs-2';
// // import { getOrders} from "../actions/actions";

// // class MedicineChart extends Component{

// //     constructor() {
// //         super();
// //         this.state={
// //             data: [],
// //             chartData:{

// //             }
// //         }
// //     }


// //     componentDidMount() {
// //         this.getchartData();
// //     }


// //     getchartData = () => {
    
// //         getOrders().then((res) =>{
// //             this.setState({data: res});
// //             console.log(res);
// //             console.log(res.data)
// //             if (this.props.res) {
// //                 var commentNodes = this.props.data.map(function (comment){
// //                     console.log(comment.medicineid)
                  
// //                 });
// //               }
// //         })
        

// //         // .then(res => res.json()).then((jsonarray) => {
// //         //         var labels = jsonarray.map(function(e) {
// //         //             console.log(e.medicineid);
// //         //             console.log(labels);
// //         //             return e.medicineid;
// //         //         });
// //         //         var data = jsonarray.map(function(e) {
// //         //             return e.medicinename;
// //         //         });

// //         //         console.log(labels,data);

// //         //         this.setState({
// //         //             chartData:{
// //         //                 labels:labels,
// //         //                 datasets:[
// //         //                     {
// //         //                         label:'Chart',
// //         //                         data:data
// //         //                     }
// //         //                 ]
// //         //             }
// //         //         });
// //         //     });
// //     };   

// //     render(){
// //         return(
// //             <div className="App">
// //                 <header className="App-header">

// //                     <Line chartData={this.state.chartData} location="Test" legendPosition="bottom"/>
// //                 </header>
// //             </div>

// //         );
// //     }
// // }

// // export default MedicineChart;

// //import React,{ useState, useEffect } from "react";
// import axios from "axios";

// import MedicineChart from "./Chart";

// const App = () => {
//   const [chart, setChart] = useState({});

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const res = await axios.get(
//         `https://corona.lmao.ninja/v2/historical/pakistan`
//       );

//       setChart({
//         labels: [Object.keys(res.data.timeline.cases)],
//         datasets: [
//           {
//             label: "Covid-19",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "rgba(75,192,192,0.4)",
//             borderColor: "rgba(75,192,192,1)",
//             borderCapStyle: "butt",
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: "miter",
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: Object.values(res.data.timeline.cases)
//           }
//         ]
//       });
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   return (
//     <div>
//       <Chart data={chart} />
//     </div>
//   );
// };


// import React from "react";
// import { Line } from "react-chartjs-2";

// const Chart = ({ data }) => {
  
//   console.log(data);

//   return <Line data={data} options={{ responsive: true, height: '600px', width: "600px" }} />;
// };

// export default MedicineChart;