import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../../../users/entities/user.entity/user.entity.js";
import { Role } from "../../../roles/entities/role.entity/role.entity.js";

@Entity({name: 'user_roles'})
export class UserRoles {

    @PrimaryColumn({ type: 'uuid', name: 'user_id'})
    userId: String;

    @PrimaryColumn({ type: 'uuid', name: 'role_id '})
    roleId: string;

    @ManyToOne(
        () => User,
        user => user.userRoles,
        {
            onDelete: 'CASCADE',
        }
    )
    @JoinColumn({ name: 'user_id'})
    user: User;
    role: Role;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_asignacion', default: ()=> 'CURRENT_TIMESTAMP' })
    fechaAsignacion: Date;

}
