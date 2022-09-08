import Plot from 'react-plotly.js';
import * as Plotly from 'plotly.js';
import { jsPDF,HTMLOptionImage } from "jspdf";

import {useEffect,useState} from 'react';

function GraphComponent(props){
	const [allData,setAllData] = useState(props.data[0]);
    const [Data1,setData1] = useState([]);
    const [Data2,setData2] = useState([]);
    const [Data3,setData3] = useState([]);
    const [Layout1,setLayout1] = useState();
    const [Layout2,setLayout2] = useState();
    const [Layout3,setLayout3] = useState();

    const [min,setMin1] = useState();
    const [max,setMax1] = useState();

    const [min2,setMin2] = useState();
    const [max2,setMax2] = useState();

    const [min3,setMin3] = useState();
    const [max3,setMax3] = useState();


// left
const l_stancetime = []
const l_flytime = []
const l_cadence = []
const l_steps = []
const l_length = []
const l_height = []
const l_timeStamp1 = []
const l_degreesR = []
const l_degreesL = []
const l_degreeH = []
const l_degreeF = []
const l_degreeO = []
const l_degreeI = []
const l_strengthM1 = []
const l_strengthM5 = []
const l_strengthH = []
const l_timeStamp2 = []

// #right
const r_stancetime = []
const r_flytime = []
const r_cadence = []
const r_steps = []
const r_length = []
const r_height = []
const r_timeStamp1 = []
const r_degreesR = []
const r_degreesL = []
const r_degreeH = []
const r_degreeF = []
const r_degreeO = []
const r_degreeI = []
const r_strengthM1 = []
const r_strengthM5 = []
const r_strengthH = []
const r_timeStamp2 = []

//Graph 1
var trace1
var trace2 
var trace3
var trace4
var trace5 
var trace6 
var trace7
var trace8
var graphData1
var graphData2
var graphData3
var layout1
var layout2
var layout3

const [image , setImage] = useState([])



useEffect(()=>{
	    setGraphData(props.data[0]);
},[])



const downlaoadimg = ()=>{
    
        var imgs = [];
        const doc = new jsPDF();
        doc.setFontSize(24);  
        doc.text("Graph Layouts",20, 25);

        doc.setFontSize(18);

        Plotly.toImage('plot1', { format: 'png', width: 800, height: 600 }).then(function (dataURL) {
            imgs.push({title:'Graph Layout 1',image:dataURL});

            doc.text('Layout 1',20, 35);
            doc.addImage(dataURL,'JPEG',20,50,200,160);
            console.log(dataURL)

            Plotly.toImage('plot2', { format: 'png', width: 800, height: 600 }).then(function (dataURL) {
                imgs.push({title:'Graph Layout 2',image:dataURL});
               
               var pageHeight= doc.internal.pageSize.height;
                var y = 500 // Height position of new content
                if (y >= pageHeight)
                {
                    doc.addPage();
                    y = 0 // Restart height position
                }
               
                doc.text('Layout 2',20, 35);
            doc.addImage(dataURL,'JPEG',20,50,200,160);
                console.log(dataURL)

               Plotly.toImage('plot3', { format: 'png', width: 800, height: 600 }).then(function (dataURL) {
                    imgs.push({title:'Graph Layout 3',image:dataURL});

                   var pageHeight= doc.internal.pageSize.height;
                    var y = 500 // Height position of new content
                    if (y >= pageHeight)
                    {
                        doc.addPage();
                        y = 0 // Restart height position
                    }

                    doc.text('Layout 3',20, 35);
            doc.addImage(dataURL,'JPEG',20,50,200,160);
                    console.log(dataURL)

                    if(imgs.length === 3){
                        doc.save("testing.pdf");
                    }
                });

            });


        });


       // setImage(imgs);
    
}

const setGraphData = (data) => {
    props.setLoading(true)
    for(let i =0 ;i<data.length; i++){
        const time_stamp = data[i].ts;
        const variables = data[i].v;
        if(variables[0] == 1){
            if(variables[1] == 0){
                 l_stancetime.push(variables [2])
                l_flytime.push(variables [3])
                l_cadence.push(variables [4]) 
                l_steps.push(variables [5]) 
                l_length.push(variables [6])
                l_height.push(variables [7])
                l_timeStamp1.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_stancetime.push(variables [2])
                r_flytime.push(variables [3])
                r_cadence.push(variables [4]) 
                r_steps.push(variables [5]) 
                r_length.push(variables [6])
                r_height.push(variables [7])
                r_timeStamp1.push(time_stamp)

            }
        }
        else if(variables[0] == 2){
            if(variables[1] == 0){
                 l_degreesR.push(variables [2])
                l_degreesL.push(variables [3])
                l_degreeH.push(variables [4])
                l_degreeF.push(variables [5])
                l_degreeO.push(variables [6])
                l_degreeI.push(variables [7])
                l_strengthM1.push(variables [8])
                l_strengthM5.push(variables [9])
                l_strengthH.push(variables [10])
                l_timeStamp2.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_degreesR.push(variables [2])
                r_degreesL.push(variables [3])
                r_degreeH.push(variables [4])
                r_degreeF.push(variables [5])
                r_degreeO.push(variables [6])
                r_degreeI.push(variables [7])
                r_strengthM1.push(variables [8])
                r_strengthM5.push(variables [9])
                r_strengthH.push(variables [10])
                r_timeStamp2.push(time_stamp)

            }

        }


    }

     trace1 = {x: l_timeStamp2,y: l_degreesR,type: 'scatter',mode: 'markers+text',name: 'Supinación (izq)',marker: { size: 8 }};
     trace2 = {x: r_timeStamp2,y: r_degreesL,type: 'scatter',mode: 'markers+text',name: 'Supinación (dch)',marker: { size: 8 }};
     trace3 = {x: l_timeStamp2,y: l_degreesL,type: 'scatter',mode: 'markers+text',name: 'Pronación (izq)',marker: { size: 8 }};
     trace4 = {x: r_timeStamp2,y: r_degreesR, type: 'scatter',mode: 'markers+text',name: 'Pronación (dch)',marker: { size: 8,color:'LightSkyBlue' }};
     trace5 = {x: l_timeStamp2,y: l_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (izq)',marker: { size: 8 }};
     trace6 = {x: r_timeStamp2,y: r_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (dch)',marker: { size: 8,color:'MediumPurple' }};
     trace7 = {x: l_timeStamp2,y: l_degreeH,type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (izq)',marker: { size: 8 }};
     trace8 = {x: r_timeStamp2,y: r_degreeH, type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (dch)',marker: { size: 8 }};
     graphData1 = [trace1, trace2, trace3, trace4,trace5,trace6,trace7,trace8];
     layout1 = {
     title:'Angulaciones',
       xaxis:{
        title:{
            text:'Tiempo (s)'
        }
     },
     yaxis:{
        title:{
            text:'Grados (º)'
        }
     },
    };

    setLayout1(layout1);
    setData1(graphData1);

        // Graph 2
    var strace1 = {x: l_timeStamp1,y: l_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (izq)',marker: { size: 8 }};
    var strace2 = {x: r_timeStamp1,y: r_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (dch)',marker: { size: 8 }};
    var strace3 = {x: l_timeStamp1,y: l_length,type: 'scatter',mode: 'lines+markers',name: 'Longitud (izq)',marker: { size: 8 }};
    var strace4 = {x: r_timeStamp1,y: r_length, type: 'scatter',mode: 'lines+markers',name: 'Longitud (dch)',marker: { size: 8,color:'LightSkyBlue' }};


    var graphData2 = [strace1, strace2, strace3, strace4];
   layout2 = {
     title:'Zancada',
     xaxis:{
        title:{
            text:'Tiempo (s)'
        }
     },
     yaxis:{
        title:{
            text:'Distancia (cm)'
        }
     },
    };

    setLayout2(layout2);
    setData2(graphData2);
   //Graph 3 Flytime

   var graph1 = {x: l_timeStamp1,y: l_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (izq)'};
   var graph2 = {x: r_timeStamp1,y: r_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (dch)'};
   var graph3 = {x: l_timeStamp1,y: l_stancetime,type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (izq)'};
   var graph4 = {x: r_timeStamp1,y: r_stancetime, type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (dch)'};


   var graphData3 = [graph1, graph2, graph3, graph4];
   var layout3 = {
    title:'Zancada flytime',
    xaxis:{
       title:{
           text:'Tiempo (s)'
       }
    },
    yaxis:{
       title:{
           text:'Tiempo de fase (ms)'
       }
    },
   };
   setLayout3(layout3);
    setData3(graphData3);

    props.setLoading(false)
  //  downlaoadimg();
}

const setGraphData1 = (data) => {
    for(let i =0 ;i<data.length; i++){
        const time_stamp = data[i].ts;
        console.log(time_stamp)

        const variables = data[i].v;
        if(variables[0] == 1){
            if(variables[1] == 0){
                 l_stancetime.push(variables [2])
                l_flytime.push(variables [3])
                l_cadence.push(variables [4]) 
                l_steps.push(variables [5]) 
                l_length.push(variables [6])
                l_height.push(variables [7])
                l_timeStamp1.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_stancetime.push(variables [2])
                r_flytime.push(variables [3])
                r_cadence.push(variables [4]) 
                r_steps.push(variables [5]) 
                r_length.push(variables [6])
                r_height.push(variables [7])
                r_timeStamp1.push(time_stamp)

            }
        }
        else if(variables[0] == 2){
            if(variables[1] == 0){
                 l_degreesR.push(variables [2])
                l_degreesL.push(variables [3])
                l_degreeH.push(variables [4])
                l_degreeF.push(variables [5])
                l_degreeO.push(variables [6])
                l_degreeI.push(variables [7])
                l_strengthM1.push(variables [8])
                l_strengthM5.push(variables [9])
                l_strengthH.push(variables [10])
                l_timeStamp2.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_degreesR.push(variables [2])
                r_degreesL.push(variables [3])
                r_degreeH.push(variables [4])
                r_degreeF.push(variables [5])
                r_degreeO.push(variables [6])
                r_degreeI.push(variables [7])
                r_strengthM1.push(variables [8])
                r_strengthM5.push(variables [9])
                r_strengthH.push(variables [10])
                r_timeStamp2.push(time_stamp)

            }

        }

    }

     trace1 = {x: l_timeStamp2,y: l_degreesR,type: 'scatter',mode: 'markers+text',name: 'Supinación (izq)',marker: { size: 8 }};
     trace2 = {x: r_timeStamp2,y: r_degreesL,type: 'scatter',mode: 'markers+text',name: 'Supinación (dch)',marker: { size: 8 }};
     trace3 = {x: l_timeStamp2,y: l_degreesL,type: 'scatter',mode: 'markers+text',name: 'Pronación (izq)',marker: { size: 8 }};
     trace4 = {x: r_timeStamp2,y: r_degreesR, type: 'scatter',mode: 'markers+text',name: 'Pronación (dch)',marker: { size: 8,color:'LightSkyBlue' }};
     trace5 = {x: l_timeStamp2,y: l_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (izq)',marker: { size: 8 }};
     trace6 = {x: r_timeStamp2,y: r_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (dch)',marker: { size: 8,color:'MediumPurple' }};
     trace7 = {x: l_timeStamp2,y: l_degreeH,type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (izq)',marker: { size: 8 }};
     trace8 = {x: r_timeStamp2,y: r_degreeH, type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (dch)',marker: { size: 8 }};
     graphData1 = [trace1, trace2, trace3, trace4,trace5,trace6,trace7,trace8];
     layout1 = {
     title:'Angulaciones',
       xaxis:{
        title:{
            text:'Tiempo (s)'
        }
     },
     yaxis:{
        title:{
            text:'Grados (º)'
        }
     },
    };

    setLayout1(layout1);
    setData1(graphData1);
}

const setGraphData2 = (data) => {

    for(let i =0 ;i<data.length; i++){
        const time_stamp = data[i].ts;
        const variables = data[i].v;
        if(variables[0] == 1){
            if(variables[1] == 0){
                 l_stancetime.push(variables [2])
                l_flytime.push(variables [3])
                l_cadence.push(variables [4]) 
                l_steps.push(variables [5]) 
                l_length.push(variables [6])
                l_height.push(variables [7])
                l_timeStamp1.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_stancetime.push(variables [2])
                r_flytime.push(variables [3])
                r_cadence.push(variables [4]) 
                r_steps.push(variables [5]) 
                r_length.push(variables [6])
                r_height.push(variables [7])
                r_timeStamp1.push(time_stamp)

            }
        }
        else if(variables[0] == 2){
            if(variables[1] == 0){
                 l_degreesR.push(variables [2])
                l_degreesL.push(variables [3])
                l_degreeH.push(variables [4])
                l_degreeF.push(variables [5])
                l_degreeO.push(variables [6])
                l_degreeI.push(variables [7])
                l_strengthM1.push(variables [8])
                l_strengthM5.push(variables [9])
                l_strengthH.push(variables [10])
                l_timeStamp2.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_degreesR.push(variables [2])
                r_degreesL.push(variables [3])
                r_degreeH.push(variables [4])
                r_degreeF.push(variables [5])
                r_degreeO.push(variables [6])
                r_degreeI.push(variables [7])
                r_strengthM1.push(variables [8])
                r_strengthM5.push(variables [9])
                r_strengthH.push(variables [10])
                r_timeStamp2.push(time_stamp)

            }

        }


    }


    var strace1 = {x: l_timeStamp1,y: l_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (izq)',marker: { size: 8 }};
    var strace2 = {x: r_timeStamp1,y: r_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (dch)',marker: { size: 8 }};
    var strace3 = {x: l_timeStamp1,y: l_length,type: 'scatter',mode: 'lines+markers',name: 'Longitud (izq)',marker: { size: 8 }};
    var strace4 = {x: r_timeStamp1,y: r_length, type: 'scatter',mode: 'lines+markers',name: 'Longitud (dch)',marker: { size: 8,color:'LightSkyBlue' }};


    var graphData2 = [strace1, strace2, strace3, strace4];
   layout2 = {
     title:'Zancada',
     xaxis:{
        title:{
            text:'Tiempo (s)'
        }
     },
     yaxis:{
        title:{
            text:'Distancia (cm)'
        }
     },
    };

    setLayout2(layout2);
    setData2(graphData2);
}

const setGraphData3 = (data) => {

    for(let i =0 ;i<data.length; i++){
        const time_stamp = data[i].ts;
        const variables = data[i].v;
        if(variables[0] == 1){
            if(variables[1] == 0){
                 l_stancetime.push(variables [2])
                l_flytime.push(variables [3])
                l_cadence.push(variables [4]) 
                l_steps.push(variables [5]) 
                l_length.push(variables [6])
                l_height.push(variables [7])
                l_timeStamp1.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_stancetime.push(variables [2])
                r_flytime.push(variables [3])
                r_cadence.push(variables [4]) 
                r_steps.push(variables [5]) 
                r_length.push(variables [6])
                r_height.push(variables [7])
                r_timeStamp1.push(time_stamp)

            }
        }
        else if(variables[0] == 2){
            if(variables[1] == 0){
                 l_degreesR.push(variables [2])
                l_degreesL.push(variables [3])
                l_degreeH.push(variables [4])
                l_degreeF.push(variables [5])
                l_degreeO.push(variables [6])
                l_degreeI.push(variables [7])
                l_strengthM1.push(variables [8])
                l_strengthM5.push(variables [9])
                l_strengthH.push(variables [10])
                l_timeStamp2.push(time_stamp)

            }
            else if(variables[1] == 1){
                r_degreesR.push(variables [2])
                r_degreesL.push(variables [3])
                r_degreeH.push(variables [4])
                r_degreeF.push(variables [5])
                r_degreeO.push(variables [6])
                r_degreeI.push(variables [7])
                r_strengthM1.push(variables [8])
                r_strengthM5.push(variables [9])
                r_strengthH.push(variables [10])
                r_timeStamp2.push(time_stamp)

            }

        }


    }


    var graph1 = {x: l_timeStamp1,y: l_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (izq)'};
    var graph2 = {x: r_timeStamp1,y: r_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (dch)'};
    var graph3 = {x: l_timeStamp1,y: l_stancetime,type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (izq)'};
    var graph4 = {x: r_timeStamp1,y: r_stancetime, type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (dch)'};
 
 
    var graphData3 = [graph1, graph2, graph3, graph4];
    var layout3 = {
     title:'Zancada flytime',
     xaxis:{
        title:{
            text:'Tiempo (s)'
        }
     },
     yaxis:{
        title:{
            text:'Tiempo de fase (ms)'
        }
     },
    };
    setLayout3(layout3);
     setData3(graphData3);
}

const reset1 = () => {
    setGraphData1(allData)
}
const reset2 = () => {
    setGraphData2(allData)
}
const reset3 = () => {
    setGraphData3(allData)
}

const showMap1 = () => {
  

    var NewData = [];
    if(min && max){
     for(let i =0 ;i< allData.length; i++){
         const time_stamp = allData[i].ts;
         if(time_stamp >= min && time_stamp <= max){
             NewData.push(allData[i]);
         }
      }
      console.log(NewData,'NewData')
      setGraphData1(NewData)

     }
     else{
         alert("please enter minimum and maximum value.")
     }

}

const showMap2 = () => {
    var NewData = [];
    if(min2 && max2){
     for(let i =0 ;i< allData.length; i++){
         const time_stamp = allData[i].ts;
         if(time_stamp >= min2 && time_stamp <= max2){
             NewData.push(allData[i]);
         }
      }
      setGraphData2(NewData)
     }
     else{
         alert("please enter minimum and maximum value.")
     }
}

const showMap3 = () => {
    var NewData = [];
    if(min3 && max3){
     for(let i =0 ;i< allData.length; i++){
         const time_stamp = allData[i].ts;
         if(time_stamp >= min3 && time_stamp <= max3){
             NewData.push(allData[i]);
         }
      }
      setGraphData3(NewData)
     }
     else{
         alert("please enter minimum and maximum value.")
     }
}

	return(
		<>

    

		<div>
            <div className='row'>
            <Plot
            data={Data1}
            layout={Layout1}
            divId="plot1"
            />
            </div>
         <div id="graph" style={{ display: "none" }}></div>
            <div class="maps">
                <div class="input-group map1 m-2" style={{maxWidth:'500px'}}>
                    <input type="number" className="minval1 form-control" placeholder="Min Value" onChange={e => setMin1(e.target.value) }  />
                    <input type="number" className="maxval1 form-control" placeholder="Max Value" onChange={e => setMax1(e.target.value) } />
                    <button className="btn btn-info show1" onClick={() => showMap1()} type="button ">Show</button>
                    <button className="btn btn-dark reset" onClick={() => reset1()} type="button ">Reset</button>
                
                </div>
            </div>
            <div className='row'>
            <Plot
            data={Data2}
            layout={Layout2}
            divId="plot2"
            />
</div>
           <div class="maps">
                <div class="input-group map1 m-2" style={{maxWidth:'500px'}}>
                    <input type="number" className="minval1 form-control" placeholder="Min Value" onChange={e => setMin2(e.target.value) } />
                    <input type="number" className="maxval1 form-control" placeholder="Max Value" onChange={e => setMax2(e.target.value) } />
                    <button className="btn btn-info show1" onClick={() => showMap2()} type="button ">Show</button>
                    <button className="btn btn-dark reset" onClick={() => reset2()} type="button ">Reset</button>
                
                </div>
            </div>  
            <div className='row'>
            <Plot
            data={Data3}
            layout={Layout3}
            divId='plot3'
            />
            </div>

            <div class="row maps">
                    <div class="input-group map1 m-2" style={{maxWidth:'500px'}}>
                    <input type="number" className="minval1 form-control " placeholder="Min Value" onChange={e => setMin3(e.target.value) } />
                    <input type="number" className="maxval1 form-control" placeholder="Max Value" onChange={e => setMax3(e.target.value) } />
                    <button className="btn btn-info show1" onClick={() => showMap3()} type="button ">Show</button>
                    <button className="btn btn-dark reset" onClick={() => reset3()} type="button ">Reset</button>
                
                </div>
            </div>  

            <div id="graph" style={{ display: "none" }}></div>
            
        </div>
      	<div className='d-flex mt-3 mb-3 text-right align-right justify-content-end'>
           
            <button className='btn btn-primary' onClick={() => downlaoadimg()}> Download Pdf</button> 
      	</div>

		</>






		)

}

export default GraphComponent 