import { Module } from '@nestjs/common';
import { UserRolesController } from './user-roles.controller.js';
import { UserRolesService } from './user-roles.service.js';

@Module({
  controllers: [UserRolesController],
  providers: [UserRolesService]
})
export class UserRolesModule {}
