import { IsString } from "class-validator";
import { MinLength, MaxLength } from "class-validator";

export class CreateRoleDto {

    @IsString()
        @MinLength(4, { message: 'El nombre debe tener al menos 4 caracteres' })
        @MaxLength(15, { message: 'El nombre no puede tener más de 15 caracteres' })
        nombres: string;



}

