import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import setupDocumentation from "./modules/app/app.documentation";

const validationPipeOptions = {
  transform: true,
  validationError: { target: false, value: false },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 3000;

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  setupDocumentation(app);

  await app.listen(port);
  console.log('app_port:::', port);
}
bootstrap();
