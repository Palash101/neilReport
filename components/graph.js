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


    const [images1,setImages1] = useState([]);
    const [images2,setImages2] = useState([]);
    const [images3,setImages3] = useState([]);



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

const [imagePdfArray,setImagePdfArray] = useState({})



useEffect(()=>{
	    setGraphData(props.data[0]);
},[])



const downlaoadimg = ()=>{
        const doc  = new jsPDF();
    doc.setFont("centred", "normal");
    doc.setFontSize(11);
    doc.text("Paciente: Marcos", 20, 30, null, null,);

    doc.setFontSize(11);
    
    doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

    doc.setFontSize(11);
    doc.text("Fecha de la visita: 24-05-2022", 20, 40, null, null,);

    doc.setFontSize(11);
    doc.text("Hora: 08:56", 100, 40, null, null,);
    

    doc.setFontSize(11);
    // doc.setFont("paciente", "bold");
    doc.text("Antecedentes del paciente", 20, 60);
    doc.setLineWidth(0.60);
    doc.line(20, 62, 180, 62);
    
    doc.setFontSize(11);
    doc.text("Edad", 20, 70);

    doc.setFontSize(11);
    doc.text("40", 40, 70);

    doc.setFontSize(11);
    doc.text("Sexo", 20, 75);

    doc.setFontSize(11);
    doc.text("Hombre", 40, 75);

    doc.setFontSize(11);
    doc.text("Trabajo", 20, 80);

    doc.setFontSize(11);
    doc.text("Comercial", 40, 80);


    doc.setFontSize(11);
    doc.text("Peso", 120, 70);

    doc.setFontSize(11);
    doc.text("82", 140, 70);

    doc.setFontSize(11);
    doc.text("Altura", 120, 75);

    doc.setFontSize(11);
    doc.text("180", 140, 75);

    doc.setFontSize(11);
    doc.text("Hobby", 120, 80);

    doc.setFontSize(11);
    doc.text("Natación", 140, 80);

    doc.text("¿Dónde tiene el dolor?", 20, 100);

    doc.text("Rodilla izquierda por el lado interior y parte trasera", 23, 110);
    doc.setLineWidth(0.1);
    doc.rect(20, 105, 165, 25);

    doc.text("¿Qué tipo de dolor?", 20, 140);

     doc.text("Pinchazos en el ligamento, al sobrecargarse", 23, 150);
    doc.setLineWidth(0.1);
    doc.rect(20, 145, 165, 25);

    doc.text("¿En qué situaciones le duele?", 20, 180);
    
    doc.text("Cuando se levanta de la silla y está frio, hasta que se calienta", 23, 190);
    doc.setLineWidth(0.1);
    doc.rect(20, 185, 165, 25);


    doc.text("¿Desde cuándo le duele?", 20, 220);
    
    doc.text("Desde hace dos semanas que empezó a jugar al Baloncesto", 23, 230);
    doc.setLineWidth(0.1);
    doc.rect(20, 225, 165, 25);


    doc.text("Lesiones previas:", 20, 260);

    doc.text("Hernias discales en la columna", 23, 270);
    doc.setLineWidth(0.1);
    doc.rect(20, 265, 165, 25);
   
    doc.addPage();

    doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

    doc.text("Observación clínica", 20, 30);
    doc.setLineWidth(0.60);
    doc.line(20, 33, 180, 33);

    doc.text("Angulaciones", 20, 39);

    doc.text("Angulaciones de flexo-extensión pie izquierdo:", 20, 48);

        images1.map((item) => {
            doc.text(item.title,20,35);
            doc.addImage(item.image,'JPEG',20,50,200,160);
            doc.addPage();
        })


    doc.addPage();

    doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

    doc.text("Observación clínica", 20, 30);
    doc.setLineWidth(0.60);
    doc.line(20, 33, 180, 33);

     images2.map((item) => {
            doc.text(item.title,20,35);
            doc.addImage(item.image,'JPEG',20,50,200,160);
            doc.addPage();
        })

    doc.addPage();

     doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

    doc.text("Observación clínica", 20, 30);
    doc.setLineWidth(0.60);
    doc.line(20, 33, 180, 33);
    images3.map((item) => {
            doc.text(item.title,20,35);
            doc.addImage(item.image,'JPEG',20,50,200,160);
            doc.addPage();
        })


    doc.addPage();

    doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

   doc.text("Observación clínica", 20, 30);
   doc.setLineWidth(0.60);
   doc.line(20, 33, 180, 33);

   doc.text("Presiones promedio", 20, 120);
   doc.addImage("./images/l3.png", "png", 50, 122, 80, 80);
   
   doc.addImage("./images/r4.png", "png", 100, 122, 80, 80);
   

   doc.addPage();

   doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

  doc.text("Observación clínica", 20, 30);
  doc.setLineWidth(0.60);
  doc.line(20, 33, 180, 33);

  doc.addPage();

  doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

 doc.text("Observación clínica", 20, 30);
 doc.setLineWidth(0.60);
 doc.line(20, 33, 180, 33);


       
        
doc.save("observation.pdf");
    
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

const addImageToArray1 = () =>{
    const enteredName = prompt('Please enter your graph title');
    if(enteredName){
        Plotly.toImage('plot1', { format: 'png', width: 400, height: 400 }).then(function (dataURL) {
            //arr.push({title:enteredName,image:dataURL});
            setImages1([...images1,{title:enteredName,image:dataURL}])
        });
    }
    else{
        alert("Title is required")
    }

    console.log(images1,'images')
}
const addImageToArray2 = () =>{
     const enteredName = prompt('Please enter your graph title');
    if(enteredName){
        Plotly.toImage('plot2', { format: 'png', width: 400, height: 400 }).then(function (dataURL) {
            setImages2([...images1,{title:enteredName,image:dataURL}])
        });
    }
    else{
        alert("Title is required")
    }
}
const addImageToArray3 = () =>{
    const enteredName = prompt('Please enter your graph title');
    if(enteredName){
        Plotly.toImage('plot3', { format: 'png', width: 400, height: 400 }).then(function (dataURL) {
            setImages2([...images3,{title:enteredName,image:dataURL}])
        });
    }
    else{
        alert("Title is required")
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
                    <button className="btn btn-dark reset" onClick={() => addImageToArray1()} type="button ">Add Image to PDF</button>

                
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
                    <button className="btn btn-dark reset" onClick={() => addImageToArray2()} type="button ">Add Image to PDF</button>

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
                    <button className="btn btn-dark reset" onClick={() => addImageToArray3()} type="button ">Add Image to PDF</button>

                </div>
            </div>  

            <div id="graph" style={{ display: "none" }}></div>
            
        </div>
        {images1 && images1.length ? (
        <div className="row">
            {images1.map((item,key) => (
                <div className="col-md-3">
                    <h4>{item.title}</h4>
                    <img src={item.image} style={{width:100,height:100}}/>
                </div>
            ))}
           
        </div>
        ):
        (
        <></>
        )}
      	<div className='d-flex mt-3 mb-3 text-right align-right justify-content-end'>
           
            <button className='btn btn-primary' onClick={() => downlaoadimg()}> Download Pdf</button> 
      	</div>

		</>






		)

}

export default GraphComponent 