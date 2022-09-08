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



  return (
    <>
     <div className="form-group">
            <label for="Diagnóstico">Diagnóstico</label>
            <textarea className="form-control" rows="3"></textarea>
         </div>

         <div className="form-group">
            <label for="Diagnóstico">Recomendación de tratamiento</label>
            <textarea className="form-control" rows="3"></textarea>
         </div>

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
        ( <>
        
          <GraphComponent setLoading={setLoading} data={graphData} />
         

          </>
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
