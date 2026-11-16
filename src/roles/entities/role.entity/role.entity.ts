import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRoles } from "../../../user-roles/entities/user-roles.entity/user-roles.entity.js";

@Entity({ name: 'roles'})
export class Role{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 20, unique: true, name: 'nombre'})
    nombre: string;

    @Column({ type: 'boolean', name: 'estado', default: true })
    estado: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion'})
    fechaCreacion: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'fecha_actualizacion' })
    fechaActualizacion: Date;

    @OneToMany(
        () => UserRoles,
        (userRole) => userRole.role,        
    )
    userRoles: UserRoles[];

}