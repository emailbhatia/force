import { User } from '../users/user.entity';
export declare class Shift {
    id: number;
    startTime: Date;
    endTime: Date;
    type: string;
    user: User;
    userId: number;
}
