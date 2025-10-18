import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    BeforeInsert,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Wish } from './Wish';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

export enum CustomerType {
    Bride = 'Bride',
    Groom = 'Groom',
}

@Entity()
export class Customer {
    @PrimaryColumn()
    id!: string; // NanoID 5 ký tự

    @Column()
    name!: string;

    @Column({ type: 'text' })
    invitation!: string;

    @Column({ type: 'datetime' })
    invitedAt!: Date;

    @Column({ nullable: true })
    attended?: boolean;

    @Column({ type: 'enum', enum: CustomerType })
    type!: CustomerType;

    // Dùng lazy function tránh circular import
    @OneToMany(() => Wish, (wish) => wish.customer, { nullable: true })
    wishes?: Wish[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @BeforeInsert()
    generateId() {
        this.id = nanoid();
    }
}
