import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostItem } from '../../models/postItem';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() PostSubmit = new EventEmitter<PostItem>();
  @Output() CancelEvent = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  postForm: FormGroup;

  ngOnInit() {
    const p = new PostItem();
    this.postForm = this.fb.group(p);
    this.postForm.controls.text.setValidators(Validators.required);
  }

  submitPost() {
    const p: PostItem = this.postForm.value;
    p.timestamp = new Date();
    this.PostSubmit.emit(p);
    this.reset();


  }

  reset() {
    this.postForm.reset();
    this.CancelEvent.emit();
  }
}
