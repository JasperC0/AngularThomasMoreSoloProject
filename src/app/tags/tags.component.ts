import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagsService } from 'src/app/tags/tags.service'
import { Tag } from 'src/app/models/tag/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Observable<Tag[]>;
  tagName: string = "";
  tagID: number = 0;
  selectedTag: Tag = null;

  constructor(private _tagsService: TagsService) {
    this.tags = this._tagsService.getTags();
  }

  ngOnInit(): void {
  }

  deleteTag(tagID: number) {
    this._tagsService.deleteTag(tagID).subscribe(t => {
      this.resetWindow()
    }
    )
  }

  createOrUpdateTag() {
    if(this.tagID == 0){
    this._tagsService.addTag(new Tag(0,this.tagName)).subscribe(t => {
      this.resetWindow()
    }
      
    )
    
  }
  else{
    this.selectedTag.name = this.tagName
    this._tagsService.updateTag(this.selectedTag,this.tagID).subscribe()
  }
}

  selectUpdate(t:Tag) {
    this.selectedTag = t;
    this.tagID = this.selectedTag.tagID
    this.tagName = this.selectedTag.name
    console.log(this.selectedTag)
  }

  reset()
  {
    this.selectedTag =null
    this.tagID = 0
    this.tagName = ""
  }

  resetWindow()
  {
    window.location.reload();
  }

}
