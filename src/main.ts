import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { Pool, Client } = require('pg')

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL;

console.log(PORT);
console.log(DATABASE_URL);

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
     require: true,
     rejectUnauthorized: false,
  }
})

pool.query('select * from boards', (err, res) => {
 console.log("Initial database check");
 if (err) {
 	console.log(err, res);
 } else {
	console.log("Boards: " + res.rowCount);
 }

 pool.end();
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
