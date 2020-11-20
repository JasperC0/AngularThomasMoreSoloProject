import { User } from 'src/app/models/user/user.model';
import { Article } from 'src/app/models/articles/article.model';

export class Like {
    constructor(public likeID: number, public doLike: boolean, public userID: number, public articleID: number, public user?: User, public article?:Article){}
}
