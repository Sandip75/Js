function LogIn(){
    var userid = document.querySelector('#userId').value;
    var password = document.querySelector('#password').value.trim();

    var userProxy = firebase.database().ref('/users/' + userid);
    
    userProxy.on('value',function(snapshot) {
        console.log(snapshot);
        var obj = snapshot.val();
        console.log(obj);
        console.log(typeof obj.password);
        console.log("password is ",typeof password);
        if(obj.Password == password){
            document.querySelector('#msg').innerText ="Welcome "+userid;
        }
        else{
            document.querySelector('#msg').innerText ="Invalid Userid or Password"; 
        }
    });
}

function Register(){
    var userid = document.querySelector('#userId').value;
    var password = document.querySelector('#password').value.trim();
    var obj = { 'UserId': userid , 'Password' : password };

    let promise = firebase.database().ref('/users/'+userid).set(obj);

    promise.then(data=>{
        document.querySelector('#msg').innerHTML='Record Added';
    }).catch(err=>{
        document.querySelector('#mst').innerHTML = 'Error during Register';
    })
}