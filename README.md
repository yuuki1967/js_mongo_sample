# js_mongo_sample

## How to build
npm install express mongoose

## How to run
node index.js

## How to operate

### insert data to mongoDB
```
$ curl -X POST http://localhost:3000/user -d '{"name":"Kento", "age":"12"}' -H 'Content-Type: application/json'
saved to mongodb
```

### qeury user list
```
$ curl -X GET http://localhost:3000/user  -H 'Content-Type: application/json'
[{"_id":"6460b5c81d6f2a8d6b530de5","name":"John","age":30,"__v":0},{"_id":"64617dd81b22086010817caf","name":"Kento","age":12,"__v":0},{"_id":"646180f2c6733808559af769","name":"Kento","age":12,"__v":0},{"_id":"646197cb72859fb71b4e4c5a","name":"Kento","age":12,"__v":0},{"_id":"64619975b344d8c69d90d0fe","name":"Kento","age":12,"__v":0},{"_id":"646199bf71315ca7b94fc0c2","name":"Kento","age":12,"__v":0},{"_id":"64619c078e5bb46ce77fa3e9","name":"Kento","age":12,"__v":0},{"_id":"64619ec7458e5a1d5eb03815","name":"Kento","age":12,"__v":0},{"_id":"64619f6c2a0be6e73708dbfd","name":"Kento","age":12,"__v":0}]% 
```

### delete an user
```
$ curl -X DELETE  http://localhost:3000/user/6461b1e95d36e71194f90996  -H 'Content-Type: application/json'
{"acknowledged":true,"deletedCount":1}
```

## Copilot demo for Helping you to generate shell script
Using test.sh
For instance
```
# add a function to clong git repo

```
Then 'command'+'return', you can see the candidate on the right side window on Visual Studio Code.

## Copilot Demo for generating test with Mocha
 - under the folder test, then modify test.js
 // test for push /user
 'command' + 'return'
 show candidates on the right side window of Visual Studio Code

 ## Copilot for PR
1.  Create new branch
2.  Modify a file
3.  Create PR