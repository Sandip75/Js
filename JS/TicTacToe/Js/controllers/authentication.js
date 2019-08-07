function LogIn(){
    var userid = document.querySelector('#userId').value;
    var password = document.querySelector('#password').value;

    var userProxy = firebase.database().ref();
    
    userProxy.on('value',function(snapshot) {
        var obj = snapshot.val();
        if(obj.password == password){
            document.querySelector('#msg').innerText ="Welcome "+userid;
        }
        else{
            document.querySelector('#msg').innerText ="Invalid Userid or Password"; 
        }
    });


    // return firebase.database().ref('/users/' + userid).once('value').then(function(snapshot) {
    //     var obj = snapshot.val();
    //     if(obj.password == password){
    //         document.querySelector('#msg').innerText ="Welcome "+userid;
    //     }
    //     else{
    //         document.querySelector('#msg').innerText ="Invalid Userid or Password"; 
    //     }
    //   });

}

function Register(){
    var userid = document.querySelector('#userId').value;
    var password = document.querySelector('#password').value;
    var obj = { 'UserId': userid , 'Password' : password };

    let promise = firebase.database().ref('/users/'+userid).set(obj);

    promise.then(data=>{
        document.querySelector('#msg').innerHTML='Record Added';
    }).catch(err=>{
        document.querySelector('#mst').innerHTML = 'Error during Register';
    })
}