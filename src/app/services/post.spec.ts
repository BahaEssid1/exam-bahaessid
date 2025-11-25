import { TestBed } from '@angular/core/testing';
import { PostService } from './post';  // your service is in post.ts

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of posts', () => {
    const posts = service.getPosts();
    expect(posts.length).toBe(3);
    expect(posts[0].titre).toBe('Premier post');
  });
});
