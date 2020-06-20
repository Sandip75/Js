const doWorkPromise = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		//resolve([3,4,6,8]);
		reject("This is error");
	},2000)
})

doWorkPromise.then((result)=>{
	console.log(result);
}).catch((err)=>{
	console.log(err);
})
