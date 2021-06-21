const cluster = require('cluster');

if(cluster.isMaster){

// is the file being executed in the mster mode?
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();


}else{
  // index.js will be executed in the chile mode

  const express = require('express');
const app = express();

function doWork(duration){
  const start = Date.now();
  while(Date.now() - start < duration){}
}

app.get('/', (req,res)=>{
  doWork(5000);
  res.send('Hi from Express');
});

app.get('/fast', (req,res)=>{
  res.send('This will run fast')
});


app.listen(3001, ()=>{
  console.log('listening on port 3001');
} );
}



