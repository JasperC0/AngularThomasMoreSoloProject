import { Tag } from 'src/app/models/tag/tag.model';
import { User } from 'src/app/models/user/user.model';
import { ArticleStatus } from 'src/app/models/article-status/article-status.model';
export class Article {
    constructor(public articleID: number, public title: string, public subTitle: string, public shortSummary: string,public body: string, public tagID: number, public userID: number, public articleStatusID: number, public tag?: Tag, public user?: User, public articleStatus?: ArticleStatus){
    }
}
