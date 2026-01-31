import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column('simple-array') // SQLite supports simple-array for lists
    roles: Role[];
}
