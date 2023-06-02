import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('logger called', 3000);
  console.log('process.env.JWT_SECRETKEY', process.env.JWT_SECRETKEY);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  await app.listen(8086);
}
bootstrap();
