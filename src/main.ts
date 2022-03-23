import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL;

console.log(PORT);
console.log(DATABASE_URL);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
