import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto.js';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Get('cedula/:cedula')
    findByCedula(@Param('cedula') cc: string) {
        return this.usersService.findByCedula(cc);
    }
    @Get(':id')
    findByOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }
    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }
    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: string, 
    @Body() dto: UpdateUserDto) {
        return this.usersService.update(id, dto);
    }

    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.usersService.remove(id);
    }
}       