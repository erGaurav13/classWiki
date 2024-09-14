const http = require('http');
const app = require('./app');
 
 


 
// use environment variables
const PORT =   3001;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
