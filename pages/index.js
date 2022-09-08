import Head from 'next/head'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
 import { jsPDF,HTMLOptionImage } from "jspdf";
 import moment from 'moment'



import {getUsersService,getPatientService,getPatientSessionService,getSessionDataService} from '../services/service'
// import GraphComponent from '../components/graph'

const GraphComponent = dynamic(import('../components/graph'), {
  ssr: false
})

export default function Home() {

  //set Data
  const [users, setUser] = useState([])
  const [paitents, setPaitents] = useState([])
  const [sessionDates, setSessionDates] = useState([])
  const [loading, setLoading] = useState(true)

  //onChange Events

  const [selectedUserId,setSelectedUsertId] = useState('')
  const [selectedPaitentId,setSelectedPaitentId] = useState('')
  const [selectedSession,setSelectedSession] = useState('')
  const [graphData ,setGraphData] = useState([])

// Plot Images
  const [imagePlot1, setPlotImage1]= useState('')


//PDF Constants

const [testingText, setTestingText] =  useState('Hi there this testing text')
const [testingImage, setTestingImage] =  useState('Hi there this testing text')





  const [showSelect, setShowSelect]= useState({
    paitentSelect:false,
    sessionSelect:false
  })


  const show =(type)=>{
    setShowSelect({...showSelect,[type]:true})
  }

   const hide = (type)=>{
    setShowSelect({...showSelect,[type]:false})
  }



  useEffect(()=>{
    getUsersService()
    .then(data=>{
      setUser(data.data);
      setLoading(false)
    })
  },[])

  const getPaitent = ()=>{
    if(selectedUserId == ''){
      alert('Please select paitent');
      return;
    }
    setLoading(true)
    getPatientService(selectedUserId)
    .then(data=>{
      console.log(data.data)
      setPaitents(data.data)
      setLoading(false)
    })
  }

  const getSessionDates = ()=>{
    if(selectedPaitentId == ''){
      alert('Please select the patient');
      return;
    }
    setLoading(true);
    getPatientSessionService(selectedPaitentId)
    .then(data=>{
      console.log(data)
    
      setSessionDates(data.data)
      setLoading(false)
    })
  }

  const getSessionData = ()=>{
    setLoading(true);
    getSessionDataService(selectedPaitentId,selectedSession).then(data=>
      {
        setGraphData(data.data)
        setLoading(false)
      })
  }

  const testingPdfDownlaod = ()=>{

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



    doc.output('dataurlnewwindow');



  }



  return (
    <>
    <button type='button3' onClick={testingPdfDownlaod}>Test</button>
    <div className="row mb-3">
    {
      users && users.length ? (
        <div class="mt-3 form-group">
          <label>Select patient email for get patients </label>
          <div className='input-group mb-3 mt-1'>
            <select className='form-control' onChange={e => setSelectedUsertId(e.target.value) }>
              { users.map((user, index) => (
                  <option key={index} value={user.uid}>{user.email}</option>
              ))}
          </select>
          <button onClick={getPaitent} type="button" className='btn btn-primary'>Get Paitents</button>
          </div>
        </div>

        ):
      <></>
    }

    {
      paitents && paitents.length ?
      (
      <div class="mt-3 form-group">
        <label>Select patient for get detail </label>
        <div className='input-group mb-3 mt-1'>
          <select onChange={e => setSelectedPaitentId(e.target.value) }  className='form-control'>
          <option value='' selected>Select Paitent</option>
            { paitents.map((user, index) => (
                <option key={index} value={user.id}>{user.name}</option>
            ))}
        </select>
        <button onClick={getSessionDates} type="button" className='btn btn-primary'>Get Session</button>
      </div>
      </div>

      ):
      <></>

    }

    {
      sessionDates && sessionDates.length ?
      (
        <div class="mt-3 form-group">
        <label>Select date for genrate graph </label>
        <div className='input-group mb-3 mt-1'>
          <select onChange={e => setSelectedSession(e.target.value) }  className='form-control'>
          <option value='' selected>Select Date</option>
            { sessionDates.map((session, index) => (
                <option key={index} value={session.id}>{moment(session.startTime).format('LLL')}</option>
            ))}
        </select>
        <button onClick={getSessionData} type="button" className='btn btn-primary'>Generate Graph</button>
      </div>
      </div>

      ):
      <>
      </>

    }

    {
        graphData && graphData.length ?
        (
          <GraphComponent setLoading={setLoading} data={graphData} />
          )
        :<></>

    }
      </div>
      {loading === true && (
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
        </div>
        <div className='display-block text-primary'>Please Wait...</div>
      </div>
      )}
    </>

  )
}
