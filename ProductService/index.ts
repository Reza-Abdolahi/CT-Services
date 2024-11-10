import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';   

const app = express();

// Middleware to parse JSON
app.use(express.json());  

// Attach routes to /api
app.use('/api', routes); 
 
// Connecting to database by TypeORM
createConnection().then(() => {
  console.log('Database connected');
  
  // Server: start
  app.listen(3000, () => {
    console.log('ProductService running on port 3000');
  });
}).catch((error) => console.log('Database connection error', error));
 
export { app };  // Export for test