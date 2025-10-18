import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Customer } from './entities/Customer';
import { Wish } from './entities/Wish';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'dev.db',
    synchronize: true, // Chỉ dùng dev, tự động tạo bảng
    logging: true,
    entities: [Customer, Wish, User],
});
