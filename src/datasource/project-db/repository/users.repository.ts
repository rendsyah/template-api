// Import Modules
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Import Base Repository
import { BaseRepository } from './base.repository';

// Import Entity
import { Users } from '../models/users.entity';

@Injectable()
export class UsersRepository extends BaseRepository<Users> {
    constructor(@InjectRepository(Users) private readonly usersModels: Repository<Users>) {
        super(usersModels);
    }
}
