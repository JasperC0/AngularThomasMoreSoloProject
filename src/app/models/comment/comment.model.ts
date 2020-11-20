import { User } from 'src/app/models/user/user.model';
import { Article } from 'src/app/models/articles/article.model';
export class Comment {
    constructor(public commentID: number, public text: string, public userID: number, public articleID: number, public user?: User, public article?:Article){}
}
