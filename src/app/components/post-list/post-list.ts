import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,           // <-- make sure it's standalone
  imports: [CommonModule], 
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
