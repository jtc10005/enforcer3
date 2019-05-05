import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostItem } from '../../models/postItem';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  constructor(private ls: ListService, private fb: FormBuilder) {}
  private addNew = false;
  postForm: FormGroup;

  ngOnInit() {
    const p = new PostItem();
    this.postForm = this.fb.group(p);
    this.postForm.controls.text.setValidators(Validators.required);
  }

  submitPost() {
    const p: PostItem = this.postForm.value;
    p.timestamp = new Date();
    this.ls.addPost(p);
    this.reset();
  }

  reset() {
    this.postForm.reset();
    this.addNew = false;
  }
}
