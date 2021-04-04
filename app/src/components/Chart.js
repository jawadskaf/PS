import React, { useState,useEffect } from 'react';
import "../styles.css";
import { getOrders} from "../actions/actions";
import { Line,Chart,Doughnut, Bar, HorizontalBar } from 'react-chartjs-2';
// import Chart from 'react-native-chart';
import { render } from 'react-dom';
import '../App.css';
import CustDropDown from './CustDropDown'

// import { ChartControl } from "@pnp/spfx-controls-react/lib/ChartControl";
function ChartMed(){
   
    const [chart, setChart] = useState({});
    const [data,setData] = useState({});
  console.log("heyy")
  console.log(data)

  
    function fetchData () {
        
        getOrders().then((res) =>{
            setChart({res});
            console.log(res);
        

        setChart(getOrders)
        console.log(res);
       const label = res.map((chart,index)=>{
            console.log(chart.medicinename)
            return chart.medicinename;
        })
        const user = res.map((chart,index)=>{
            console.log(chart.userid)
            return chart.userid;
        })
        const medid = res.map((chart,index)=>{
            console.log(chart.medicineid)
            return chart.medicineid;
        })
        console.log(label)
        console.log(user)
   
                      setData({
                        labels: [label],
                        datasets: [{
                          label: "User Data ",
                          
                          backgroundColor: 'rgb(255, 99, 132)',
                          borderColor: 'rgb(255, 99, 132)',
                          data: [user]
                          
                        }, {
                            
                            backgroundColor: 'rgb(99, 255, 132)',
                          borderColor: 'rgb(255, 132, 99)',
                            label: "Med id",
                            
                            data: [medid]
                            
                        }
                    ]
                      }
                      )
                                
                                console.log("got here")
                                console.log(data)
                                console.log("end")
                                
                            });
    
    }
  
    useEffect( () => {fetchData()},[]);
    
    return (
        <div className="App">
                         <header className="container">
        
                           <HorizontalBar
                           
                          rootProps={{ 'data-testid': '1' }} 
                          
                           type="line" data={data} location="Test" legendPosition="bottom"/>
                      
                         </header>
                        <CustDropDown tableName ="medicines" _id ="medicineid" _name = "medicinename"/> 
                  </div>
      );

    
}


export default ChartMed;




