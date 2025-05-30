import { Controller, Get } from "@nestjs/common";
import { User } from "@my-monorepo/types";

@Controller("users")
export class AppController {
  @Get()
  getUsers(): User[] {
    return [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" }
    ];
  }
}
