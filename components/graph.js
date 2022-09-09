import Plot from 'react-plotly.js';
import * as Plotly from 'plotly.js';
import { jsPDF,HTMLOptionImage } from "jspdf";

import {useEffect,useState} from 'react';
import { array } from 'prop-types';

function GraphComponent(props){
	const [allData,setAllData] = useState(props.data[0]);
    const [Data1,setData1] = useState([]);
    const [Data2,setData2] = useState([]);
    const [Layout1,setLayout1] = useState();
    const [Layout2,setLayout2] = useState();

    const [GData,setGData] = useState({});

    const [min,setMin1] = useState();
    const [max,setMax1] = useState();

    const [min2,setMin2] = useState();
    const [max2,setMax2] = useState();


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


const createLayout1 = (var1,var2) => {
    var D1 = Data1;
    var D11 = [];
  
    D1.map((item,key) => {
        if(key === var1 || key === var2){
            item.visible = "none";
        }
        else{
            item.visible = "legendonly"; 
        }
        D11.push(item)
    })

    setData1(D11);
    return Plotly.toImage('plot1', { format: 'png', width: 600, height: 300 }).then(function (dataURL) {
        return dataURL;
    });

}
const createLayout2 = (var1,var2) => {
    var D1 = Data2;
    var D11 = [];
  
    D1.map((item,key) => {
        if(key === var1 || key === var2){
            item.visible = "none";
        }
        else{
            item.visible = "legendonly"; 
        }
        D11.push(item)
    })

    setData2(D11);
    return Plotly.toImage('plot2', { format: 'png', width: 600, height: 300 }).then(function (dataURL) {
        return dataURL;
    });

}


const downlaoadimg1 = async() => {
    props.setLoading(true)
   var img1 = await createLayout1(4,6);
   var img2 = await createLayout1(5,7);
   var img3 = await createLayout1(0,2);
   var img4 = await createLayout1(1,3);

   var img5 = await createLayout2(0,2);
   var img6 = await createLayout2(1,3);
   var img7 = await createLayout2(6,9);
   var img8 = await createLayout2(7,9);
   var img9 = await createLayout2(4,9);
   var img10 = await createLayout2(5,9);
    var imgs = {
        img1:img1,
        img2:img2,
        img3:img3,
        img4:img4,
        img5:img5,
        img6:img6,
        img7:img7,
        img8:img8,
        img9:img9,
        img10:img10,
    };

   setGData(imgs);
   downlaoadimg(imgs)
   
}


const downlaoadimg = (imgs)=>{
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

     
    doc.addImage(imgs.img1,'JPEG',0,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img2,'JPEG',0,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img3,'JPEG',0,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img4,'JPEG',0,50,200,160);
    doc.addPage();

    doc.addPage();

    doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

    doc.text("Observación clínica", 20, 30);
    doc.setLineWidth(0.60);
    doc.line(20, 33, 180, 33);

  

    doc.addImage(imgs.img5,'JPEG',0,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img6,'JPEG',0,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img7,'JPEG',0,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img8,'JPEG',0,50,200,160);
    

    doc.addPage();

     doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

    doc.text("Observación clínica", 20, 30);
    doc.setLineWidth(0.60);
    doc.line(20, 33, 180, 33);
   

    doc.addImage(imgs.img9,'JPEG',20,50,200,160);
    doc.addPage();
    doc.addImage(imgs.img10,'JPEG',20,50,200,160);
 

    doc.addPage();

    doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

   doc.text("Observación clínica", 20, 30);
   doc.setLineWidth(0.60);
   doc.line(20, 33, 180, 33);

   doc.text("Presiones promedio", 20, 120);

   doc.addImage("./images/"+props.leftLeg, "png", 45, 122, 80, 80);
   
   doc.addImage("./images/"+props.rightLeg, "png", 95, 122, 80, 80);
   

   doc.addPage();

   doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

  doc.text("Observación clínica", 20, 30);
  doc.setLineWidth(0.60);
  doc.line(20, 33, 180, 33);
  doc.text(props.diagnosticText, 14, 60);
  doc.addPage();

  doc.addImage("./images/logo.png", "png", 175, 5, 30, 15);

 doc.text("Observación clínica", 20, 30);
 doc.setLineWidth(0.60);
 doc.line(20, 33, 180, 33);
 doc.text(props.recomendText, 14, 60);

        
doc.save("observation.pdf");
props.setLoading(false)
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

     trace1 = {x: l_timeStamp2,y: l_degreesR,type: 'scatter',mode: 'markers+text',name: 'Supinación (izq)',marker: { size: 8 },visible:'none'};
     trace2 = {x: r_timeStamp2,y: r_degreesL,type: 'scatter',mode: 'markers+text',name: 'Supinación (dch)',marker: { size: 8 },visible:'none'};
     trace3 = {x: l_timeStamp2,y: l_degreesL,type: 'scatter',mode: 'markers+text',name: 'Pronación (izq)',marker: { size: 8 },visible:'none'};
     trace4 = {x: r_timeStamp2,y: r_degreesR, type: 'scatter',mode: 'markers+text',name: 'Pronación (dch)',marker: { size: 8,color:'LightSkyBlue' },visible:'none'};
     trace5 = {x: l_timeStamp2,y: l_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (izq)',marker: { size: 8 },visible:'none'};
     trace6 = {x: r_timeStamp2,y: r_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (dch)',marker: { size: 8,color:'MediumPurple' },visible:'none'};
     trace7 = {x: l_timeStamp2,y: l_degreeH,type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (izq)',marker: { size: 8 },visible:'none'};
     trace8 = {x: r_timeStamp2,y: r_degreeH, type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (dch)',marker: { size: 8 },visible:'none'};
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
   var strace1 = {x: l_timeStamp1,y: l_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (izq)',visible:'none'};
   var strace2 = {x: r_timeStamp1,y: r_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (dch)',visible:'none'};
   var strace3 = {x: l_timeStamp1,y: l_stancetime,type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (izq)',visible:'none'};
   var strace4 = {x: r_timeStamp1,y: r_stancetime, type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (dch)',visible:'none'};

    var strace5 = {x: l_timeStamp1,y: l_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (izq)',marker: { size: 8 },visible:'none'};
    var strace6 = {x: r_timeStamp1,y: r_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (dch)',marker: { size: 8 },visible:'none'};
    var strace7 = {x: l_timeStamp1,y: l_length,type: 'scatter',mode: 'lines+markers',name: 'Longitud (izq)',marker: { size: 8 },visible:'none'};
    var strace8 = {x: r_timeStamp1,y: r_length, type: 'scatter',mode: 'lines+markers',name: 'Longitud (dch)',marker: { size: 8,color:'LightSkyBlue' },visible:'none'};


  var graphData2 = [strace1, strace2, strace3, strace4, strace5, strace6, strace7, strace8];
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


    props.setLoading(false)
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

    trace1 = {x: l_timeStamp2,y: l_degreesR,type: 'scatter',mode: 'markers+text',name: 'Supinación (izq)',marker: { size: 8 },visible:'none'};
     trace2 = {x: r_timeStamp2,y: r_degreesL,type: 'scatter',mode: 'markers+text',name: 'Supinación (dch)',marker: { size: 8 },visible:'none'};
     trace3 = {x: l_timeStamp2,y: l_degreesL,type: 'scatter',mode: 'markers+text',name: 'Pronación (izq)',marker: { size: 8 },visible:'none'};
     trace4 = {x: r_timeStamp2,y: r_degreesR, type: 'scatter',mode: 'markers+text',name: 'Pronación (dch)',marker: { size: 8,color:'LightSkyBlue' },visible:'none'};
     trace5 = {x: l_timeStamp2,y: l_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (izq)',marker: { size: 8 },visible:'none'};
     trace6 = {x: r_timeStamp2,y: r_degreeF,type: 'scatter',mode: 'markers+text',name: 'Flexión Plantar (dch)',marker: { size: 8,color:'MediumPurple' },visible:'none'};
     trace7 = {x: l_timeStamp2,y: l_degreeH,type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (izq)',marker: { size: 8 },visible:'none'};
     trace8 = {x: r_timeStamp2,y: r_degreeH, type: 'scatter',mode: 'markers+text',name: 'Flexión Dorsal (dch)',marker: { size: 8 },visible:'none'};
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


    var strace1 = {x: l_timeStamp1,y: l_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (izq)',visible:'none'};
   var strace2 = {x: r_timeStamp1,y: r_flytime,type: 'scatter',mode: 'lines',name: 'Tiempo vuelo (dch)',visible:'none'};
   var strace3 = {x: l_timeStamp1,y: l_stancetime,type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (izq)',visible:'none'};
   var strace4 = {x: r_timeStamp1,y: r_stancetime, type: 'scatter',mode: 'lines',name: 'Tiempo apoyo (dch)',visible:'none'};

    var strace5 = {x: l_timeStamp1,y: l_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (izq)',marker: { size: 8 },visible:'none'};
    var strace6 = {x: r_timeStamp1,y: r_height,type: 'scatter',mode: 'lines+markers',name: 'Altura (dch)',marker: { size: 8 },visible:'none'};
    var strace7 = {x: l_timeStamp1,y: l_length,type: 'scatter',mode: 'lines+markers',name: 'Longitud (izq)',marker: { size: 8 },visible:'none'};
    var strace8 = {x: r_timeStamp1,y: r_length, type: 'scatter',mode: 'lines+markers',name: 'Longitud (dch)',marker: { size: 8,color:'LightSkyBlue' },visible:'none'};


  var graphData2 = [strace1, strace2, strace3, strace4, strace5, strace6, strace7, strace8];
   
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
          
            
        </div>
     
      	<div className='d-flex bottomButton'>
           
            <button className='btn btn-primary' onClick={() => downlaoadimg1()}> Download Pdf</button> 
      	</div>

		</>






		)

}

export default GraphComponent 