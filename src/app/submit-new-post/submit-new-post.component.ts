import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostItem } from '../models/postItem';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-new-post',
  templateUrl: './submit-new-post.component.html',
  styleUrls: ['./submit-new-post.component.scss']
})
export class SubmitNewPostComponent implements OnInit {
  postForm: FormGroup;
  @Output() Cancel = new EventEmitter();

  get PostText() {
    const text = this.postForm.controls.text.value;
    return text && text !== '' ? text : undefined;
  }

  constructor(
    private fb: FormBuilder, private as: AppService, private router: Router
  ) { }

  ngOnInit() {
    this.postForm = this.fb.group(new PostItem());
    this.postForm.controls.text.validator = Validators.required;
  }

  submitPost() {
    const post = this.postForm.value;
    this.as.addPost(post);
    this.postForm.reset();
    this.router.navigate([`./list`]);
  }

  cancelPosting(){
    this.postForm.reset();
    this.Cancel.emit();
  }
}
