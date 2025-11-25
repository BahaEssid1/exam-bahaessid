import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list';
import { LoginComponent } from './components/login/login';

export const appConfig = {
  providers: [
    // Add the router configuration here
    provideRouter([
      { path: '', component: PostListComponent },
      { path: 'login', component: LoginComponent }
    ]),
   
  ]
};
