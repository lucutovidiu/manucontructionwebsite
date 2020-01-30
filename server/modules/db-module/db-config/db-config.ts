
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

export class DbConfig {
    private _db;
    private _className = "[DbConfig] :"

    // https://www.npmjs.com/package/node-json-db - more info here
    // The second argument is used to tell the DB to save after each push
    // If you put false, you'll have to call the save() method.
    // The third argument is to ask JsonDB to save the database in an human readable format. (default false)
    // The last argument is the separator. By default it's slash (/)
    public getDbConnectionGivenDbName(dbName: string): JsonDB {
        if (dbName.length !== 0) {
            this._db = new JsonDB(new Config(dbName, true, false, '/'));
            return this._db;
        } else {
            console.log(this._className,"No DB Name exeption")
        }
    }

}