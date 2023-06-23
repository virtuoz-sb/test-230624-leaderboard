import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

// Swagger setup
const setupDocumentation = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle("Leaderboard API")
    .setVersion("v0.1")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("doc/swagger", app, document);
};
export default setupDocumentation;
