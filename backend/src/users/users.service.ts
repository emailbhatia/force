import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Role } from './role.enum';

@Injectable()
export class UsersService implements OnModuleInit {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async onModuleInit() {
        const count = await this.usersRepository.count();
        if (count === 0) {
            const users = [
                { username: 'admin', password: 'password', roles: [Role.Admin] },
                { username: 'manager', password: 'password', roles: [Role.Manager] },
                { username: 'agent', password: 'password', roles: [Role.Agent] },
                { username: 'qa', password: 'password', roles: [Role.QualityAnalyst] },
                { username: 'tl', password: 'password', roles: [Role.TeamLeader] },
            ];
            for (const u of users) {
                await this.usersRepository.save(this.usersRepository.create(u));
            }
            console.log('Seeded initial users');
        }
    }

    async findOne(username: string): Promise<User | null> {
        return this.usersRepository.findOne({ where: { username } });
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
}
