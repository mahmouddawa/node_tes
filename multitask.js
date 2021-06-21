
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest(){
  https.request('https://www.google.com', res=>{
    res.on('data', ()=>{});
    res.on('end', ()=>{
      console.log(Date.now() - start);
    });
  }).end();
}

function doHash(){

  crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
    console.log('1: ', Date.now()- start);
  });
}
doRequest();

fs.readFile('multitask.js', 'utf8', ()=>{
  console.log('FS: ', Date.now() - start);
})

doHash();
doHash();
doHash();
doHash();

//this will work as following (in case our threadpool was set to 4):
//doRequest/https will not use the Threadpool it will use the OS, this won't affect the following function calls.
// readFile will use the first thread, it will wait till it get response
//doHash1 will take the Thread 2
//doHash2 will take the Thread 3  
//doHash3 will take the Thread 4
//doHash4 will wait till the one of the threads is free.
// thread one is free while readfile function is waiting fo response
//doHash4 will take the Thread 1
// readFile is ready but none of the threads is free
//thread2 is done => readFile will use this thread.



