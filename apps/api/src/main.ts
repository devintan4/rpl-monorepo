import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const portEnv = process.env.PORT ?? "3001";
  const port = parseInt(portEnv, 10);

  await app.listen(port);
  console.log(`🚀 API listening on http://localhost:${port}`);
}

bootstrap();
