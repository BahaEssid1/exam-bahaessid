import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { PostListComponent } from './app/components/post-list/post-list';
import { LoginComponent } from './app/components/login/login';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: PostListComponent },
      { path: 'login', component: LoginComponent }
    ])
  ]
}).catch(err => console.error(err));
