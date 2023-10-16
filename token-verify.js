const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NjExMjgyOH0.2smWzE_som9s__bHLJE5_MrpAX4hNV2hy3KKzmtK3rU'

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload)
