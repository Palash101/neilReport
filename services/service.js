const apiRoute = 'https://europe-west3-smart-footwear-sport.cloudfunctions.net/policyAccept-2'


export const getUsersService = ()=>{
    return fetch(apiRoute + '/getUser')
            .then(response => response.json())
            .then(data => {
                return data
            })
}

export const getPatientService = (uId) => {
    return fetch(apiRoute + '/getUserPaitents', {
        method: 'POST',
        body: JSON.stringify({
            expertId: uId
        }),
    })
        .then(response => response.json())
        .then(data => {
             return data
        })
}
export const getPatientSessionService = (paitentId) => {
    return fetch(apiRoute + '/getPaitentSessions', {
        method: 'POST',
        body: JSON.stringify({
            paitentId: paitentId
        }),
    })
        .then(response => response.json())
        .then(data => {
            return data
          
        })
}
export const getSessionDataService = (paitentId,sessionId) => {
    return fetch(apiRoute + '/getSessionsData', {
        method: 'POST',
        body: JSON.stringify({
            paitentId: paitentId,
            sessionId: sessionId
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data,'data in service')
            return data
         
        })

}