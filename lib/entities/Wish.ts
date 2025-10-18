import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
} from 'typeorm';
import { Customer } from './Customer';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

@Entity()
export class Wish {
    @PrimaryColumn()
    id!: string; // Dùng nanoid string

    @Column()
    name!: string;

    @Column({ type: 'text' })
    desc!: string;

    // Lazy function để tránh circular import
    @ManyToOne(() => Customer, (customer) => customer.wishes, { nullable: true })
    customer?: Customer;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @BeforeInsert()
    generateId() {
        this.id = nanoid();
    }
}
