import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('logger called', 3000);
  console.log('process.env.JWT_SECRETKEY', process.env.JWT_SECRETKEY);
}
bootstrap();
