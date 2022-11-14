
function doBusinessLogin( acces_token ) {
    console.log(" Inside doBusinessLogin ");
    console.log(" acces_token ", acces_token);
    //console.log(" axios ", axios.get );
    return axios({
        method: 'post',
        url: 'http://localhost:3030/secure/loginUser',
        data: {
        },
        headers:
            {
                "Authorization" : "Bearer "+acces_token
            }
      }).then(function (loginResponse) {
        console.log(' response from java ',loginResponse );
        return loginResponse;
      }).catch( function (errors){
        console.log(' error from java ',errors );
      });
}

export {doBusinessLogin} ;