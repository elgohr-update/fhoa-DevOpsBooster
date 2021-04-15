import { IWrite } from "./interfaces/IWrite";
import { IRead } from "./interfaces/IRead";

import { Collection } from "mongodb";
import { DatabaseClient } from "../../database/DatabaseClient";
import { injectable, unmanaged } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    protected collection: Collection

    constructor(db: DatabaseClient, @unmanaged() collectionName: string){
        db.getConnection(connection =>{
            this.collection = connection.collection(collectionName);
        });
    }

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    
}