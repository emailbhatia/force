import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService implements OnModuleInit {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    onModuleInit(): Promise<void>;
    findOne(username: string): Promise<User | null>;
    findAll(): Promise<User[]>;
}
