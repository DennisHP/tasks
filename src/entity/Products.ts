import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()        
    description: string;    

    @Column()        
    quantity: number;

    @Column()        
    price: number;

    @Column()
    category_id: number;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}