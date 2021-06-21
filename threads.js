//
//process.env.UV_THREADPOOL_SIZE = 2; // this will not work on linux 

function threadPoolSize (threadPoolsize) {
    process.env.UV_THREADPOOL_SIZE = threadPoolsize;
}
// the threadpool size is set to 4 in default, we can adjust it using the function
//threadPoolSize(4);

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
  console.log('1: ', Date.now()- start);
});

crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
  console.log('2: ', Date.now()- start);
});

// crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
//   console.log('3: ', Date.now()- start);
// });

// crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
//   console.log('4: ', Date.now()- start);
// });

// the first 4 will work in parallel and the next 2 are gonna wait for 2 free cores 

// crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
//   console.log('5: ', Date.now()- start);
// });
// crypto.pbkdf2('a', 'b', 100000, 512 ,'sha512', ()=> {
//   console.log('6: ', Date.now()- start);
// });