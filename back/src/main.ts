import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Activer CORS pour toute l'application
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
