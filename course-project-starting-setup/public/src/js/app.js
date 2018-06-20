if(!window.Promise){
    window.Promise = Promise;
    console.log("promise doesnot exist");
}
else{
    console.log("promise exist");
}

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js").then(function(){
        console.log("ServiceWorker registeration success");
    })
    .catch(function(err){
        console.log("ServiceWorker registeration failed ",err);
    });
}

