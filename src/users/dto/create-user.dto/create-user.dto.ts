import { IsBoolean, IsEmail, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @Matches(/^[0-9]{10}$/, { message: 'La cédula debe tener 10 dígitos' })
    cedula: string;
    
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
    nombres: string;

    @IsString()
    @MinLength(3, { message: 'Los apellidos deben tener al menos 3 caracteres' })
    @MaxLength(50, { message: 'Los apellidos no pueden tener más de 50 caracteres' })    
    apellidos: string;

    @IsString()
    @Length(5, 20, {message: "El username debe contener entre 5 y 20 caracteres"})
    username: string;

    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @MaxLength(50, { message: 'El correo electronnico no debe exceder los 50 caracteres' })
    email:string;

    @IsOptional()
    @IsBoolean({ message: 'El estado debe ser un valor booleano' })
    estado?: boolean;


}
