import { DataService } from './data.service';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BookManagementComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserManagementComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      // { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '', component: UserLoginComponent, pathMatch: 'full' },
      { path: 'books', component: BookManagementComponent },
      { path: 'users', component: UserManagementComponent },
      { path: 'user-signup', component: UserSignupComponent },
    ]),
    FontAwesomeModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
