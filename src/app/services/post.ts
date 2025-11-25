import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  postList: Post[] = [
    { id: '1', titre: "Premier post", contenu: 'détails premier post' },
    { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
    { id: '3', titre: "Troisième post", contenu: 'détails troisième post' }
  ];

  constructor() {}

  // READ : Retourner tous les posts
  getPosts(): Post[] {
    return this.postList;
  }

  // CREATE : Ajouter un nouveau post
  addPost(post: Post) {
    this.postList.push(post);
  }

  // UPDATE : Modifier un post
  updatePost(id: string, updatedPost: Post) {
    const index = this.postList.findIndex(p => p.id === id);
    if (index !== -1) {
      this.postList[index] = updatedPost;
    }
  }

  // DELETE : Supprimer un post
  deletePost(id: string) {
    this.postList = this.postList.filter(p => p.id !== id);
  }
}
export type { Post };

