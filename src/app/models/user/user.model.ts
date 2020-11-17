import { Role } from 'src/app/models/role/role.model';
export class User {
    constructor(public userID: number, public firstName: string, public lastName: string, public email: string,public username: string, public password: string, public roleID: number, public token: string){
    }
}
