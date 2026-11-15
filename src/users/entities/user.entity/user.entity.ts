import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRoles } from "../../../user-roles/entities/user-roles.entity/user-roles.entity.js";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'char', length: 10, unique: true, name: 'cedula'})
    cedula: string;

    @Column({ type: 'varchar', length: 100, unique: true, name: 'email'})
    email: string;

    @Column({ type: 'varchar', length: 100, name: 'nombre'})
    nombre: string;

    @Column({ type: 'varchar', length: 100, name: 'apellido'})
    apellido: string;

    @Column({ type: 'date', name: 'fecha_nacimiento'})
    fechaNacimiento: Date;

    @Column({ type: 'varchar', length: 100, name: 'password'})
    password: string;

    @Column({ type: 'boolean', name: 'estado', default: true })
    estado: string;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion', default: () => 'CURRENT_TIMESTAMP'})
    fechaCreacion: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'fecha_actualizacion' , default: () => 'CURRENT_TIMESTAMP' })
    fechaActualizacion: Date;

    @OneToMany(
        () => UserRoles,
        userRoles => userRoles.user
    )
    userRoles: UserRoles[];
}

