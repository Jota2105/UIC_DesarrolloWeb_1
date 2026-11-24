import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity/user.entity.js';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto.js';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {
        
        const user = await this.userRepository.findOne({
            where: { id },
           
        });

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async findByCedula(cedula: string): Promise<User> {
        
        const user = await this.userRepository.findOne({
            where: { cedula },
           
        });

        if (!user) {
            throw new NotFoundException(`User with cedula ${cedula} not found`);
        }
        return user;
    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const user = this.userRepository.create({
                ...createUserDto,
                fechaNacimiento: new Date(createUserDto.fechaNacimiento),
            });
            return this.userRepository.save(user);        
    
        } catch(error){
            if(error instanceof QueryFailedError && (error as any).code === '23505') {
                throw new ConflictException('La cedula, el nombre de usuario o el correo ya estan en uso');

        } throw error;
    }
}
    async update(id:string, updateUserDto: UpdateUserDto):Promise<User>{
        const user = await this.findOne(id);
        const data: Partial<User> = {
            ...updateUserDto,
        };
        if(updateUserDto.fechaNacimiento) {
            data.fechaNacimiento = new Date(updateUserDto.fechaNacimiento);
        }
        Object.assign(user, data);

        try{
            await this.userRepository.save(user);
            return this.findOne(id);

        } catch(error){
            if(error instanceof QueryFailedError && (error as any).code === '23505') {
                throw new ConflictException('La cedula, el nombre de usuario o el correo ya estan en uso');
            } throw error;
        }
        return this.userRepository.save(user);
    }
    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        //await this.userRepository.remove(user);
        await this.userRepository.softRemove(user); // logico

}
}
