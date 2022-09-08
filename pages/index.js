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
  const [leftLeg,setLeftLeg] = useState();
  const [rightLeg,setRightLeg] = useState();

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

//const Text

const [diagnosticText,setDiagnosticText] = useState('');
const [recomendText,setRecomendText] = useState('');



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

       <div className="form-group">
       </div>

      <div className="radioButton mt-3">
        <label>Select one left leg</label>
         <div className="form-group">
            <label className="leg" for="leg1">
                <input type="radio" value="leg1" id="leg1" name="leftLeg" onChange={(e) =>  setLeftLeg(e.target.value)} />
                <img src="./images/l1.png"/>
            </label>
           <label className="leg" for="leg2">
                <input type="radio" value="leg2" id="leg2" name="leftLeg" onChange={(e) =>  setLeftLeg(e.target.value)} />
                <img src="./images/l2.png"/>
            </label>
            <label className="leg" for="leg3">
                <input type="radio" value="leg3" id="leg3" name="leftLeg" onChange={(e) =>  setLeftLeg(e.target.value)} />
                <img src="./images/l3.png"/>
            </label>
            <label className="leg" for="leg4">
                <input type="radio" value="leg4" id="leg4" name="leftLeg" onChange={(e) =>  setLeftLeg(e.target.value)} />
                <img src="./images/l4.png"/>
            </label>
            <label className="leg" for="leg5">
                <input type="radio" value="leg5" id="leg5" name="leftLeg" onChange={(e) =>  setLeftLeg(e.target.value)} />
                <img src="./images/l5.png"/>
            </label>
            <label className="leg" for="leg6">
                <input type="radio" value="leg5" id="leg6" name="leftLeg" onChange={(e) =>  setLeftLeg(e.target.value)} />
                <img src="./images/l6.png"/>
            </label>
         </div>
      </div>

      <div className="radioButton">
        <label>Select one right leg</label>
         <div className="form-group">
            <label className="leg" for="rleg1">
                <input type="radio" value="rightLeg1" id="rleg1" name="rightLeg" onChange={(e) =>  setRightLeg(e.target.value)} />
                <img src="./images/r1.png"/>
            </label>
           <label className="leg" for="rleg2">
                <input type="radio" value="rightLeg2" id="rleg2" name="rightLeg" onChange={(e) =>  setRightLeg(e.target.value)} />
                <img src="./images/r2.png"/>
            </label>
            <label className="leg" for="rleg3">
                <input type="radio" value="rightLeg3" id="rleg3" name="rightLeg" onChange={(e) =>  setRightLeg(e.target.value)} />
                <img src="./images/r3.png"/>
            </label>
            <label className="leg" for="rleg4">
                <input type="radio" value="rightLeg4" id="rleg4" name="rightLeg" onChange={(e) =>  setRightLeg(e.target.value)} />
                <img src="./images/r4.png"/>
            </label>
            <label className="leg" for="rleg5">
                <input type="radio" value="rightLeg5" id="rleg5" name="rightLeg" onChange={(e) =>  setRightLeg(e.target.value)} />
                <img src="./images/r5.png"/>
            </label>
            <label className="leg" for="rleg6">
                <input type="radio" value="rightLeg5" id="rleg6" name="rightLeg" onChange={(e) =>  setRightLeg(e.target.value)} />
                <img src="./images/r6.png"/>
            </label>
         </div>
      </div>

      <div className="form-group">
            <label for="Diagnóstico">Diagnóstico</label>
            <textarea onChange={e=>setDiagnosticText(e.default.value)} className="form-control" rows="3"></textarea>
         </div>

         <div className="form-group">
            <label for="Diagnóstico">Recomendación de tratamiento</label>
            <textarea onChange={e=>setRecomendText(e.default.value)} className="form-control" rows="3"></textarea>
         </div>

         

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
