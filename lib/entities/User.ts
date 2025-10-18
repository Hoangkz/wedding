// entities/User.ts
import { Entity, PrimaryColumn, Column, BeforeInsert, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { customAlphabet } from 'nanoid';
import * as bcrypt from 'bcrypt';

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

@Entity()
export class User {
    @PrimaryColumn()
    id!: string; // NanoID 5 ký tự

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    shortName!: string;

    @Column()
    name!: string;

    @Column({ type: 'date' })
    dob!: string;

    @Column()
    phone!: string;

    @Column()
    qrCodeUrl!: string;

    @Column({ type: 'text' })
    address!: string;

    @Column()
    mapUrl!: string;

    @Column()
    father!: string;

    @Column()
    mother!: string;

    @Column({ type: 'text', nullable: true })
    bio?: string;

    @Column({ type: 'text', nullable: true })
    note?: string;

    @Column()
    title!: string; // Nhà gái / Nhà trai

    @Column()
    bank!: string;

    @Column()
    account!: string;

    @Column({ type: 'date' })
    weddingDate!: string;

    @Column({ type: 'time', nullable: true })
    weddingTime?: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @BeforeInsert()
    generateId() {
        this.id = nanoid();
    }

    // Hàm tiện ích so sánh mật khẩu
    async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
