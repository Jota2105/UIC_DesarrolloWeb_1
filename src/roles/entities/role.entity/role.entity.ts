import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users'})
export class Role{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 20, unique: true, name: 'nombre'})
    nombre: string;

    @Column({ type: 'boolean', name: 'estado', default: true })
    estado: string;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion', default: () => 'CURRENT_TIMESTAMP'})
    fechaCreacion: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'fecha_actualizacion' , default: () => 'CURRENT_TIMESTAMP' })
    fechaActualizacion: Date;

}