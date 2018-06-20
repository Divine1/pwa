

self.addEventListener("install",function(event){
    console.log("installing sw... ",event);
});


self.addEventListener("activate",function(event){
    console.log("activate sw... ",event);
    return self.clients.claim();
});

self.addEventListener("fetch",function(event){
    console.log("fetch sw... ",event);
    //event.respondWith(null);
    event.respondWith(fetch(event.request));
});