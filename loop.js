// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tsks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
      // Check one: Any pending setTime, setInterval, setImmediate?
      // Check two: Any pending OS tasks? like server listening on port
      // Check three: Any pending long running operations? like fs module
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length; 
    }

    while (shouldContinue){
      
    }