import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loader/loading.interceptor';

import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopupMoreComponent } from './popup-more/popup-more.component';
import { AuthGuard } from './auth.guard';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SpinnerComponent,
    DashboardComponent,
    PopupMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule
    
    


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    AuthGuard,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
