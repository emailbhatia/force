import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Shift {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @Column()
    type: string; // e.g., 'Morning', 'Evening', 'Night'

    @ManyToOne(() => User, (user) => user.userId)
    user: User;

    @Column()
    userId: number;
}
