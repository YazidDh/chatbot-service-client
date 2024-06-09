import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MyBotsComponent } from './my-bots/my-bots.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatConversationShowcaseComponent } from './chat-conversation-showcase/chat-conversation-showcase.component';
// import { NbChatConversationShowcaseComponent } from './nb-chat-conversation-showcase/nb-chat-conversation-showcase.component';
import { EditBotComponent } from './edit-bot/edit-bot.component';
import { CanProceedGuard } from './services/can-proceed.guard';
import { CanProceedSigninRegisgterGuard } from './services/can-proceed-signin-regisgter.guard';
import { ToastrModule } from 'ngx-toastr';
import { UsersByGenderComponent } from './users-by-gender/users-by-gender.component';
import { ChatbotTypesPercentageComponent } from './chatbot-types-percentage/chatbot-types-percentage.component';
import { AmazonUsersByGenderComponent } from './amazon-users-by-gender/amazon-users-by-gender.component';
import { TripadvisorUsersByGenderComponent } from './tripadvisor-users-by-gender/tripadvisor-users-by-gender.component';
import { LastFewTransactionComponent } from './last-few-transaction/last-few-transaction.component';
import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';
import { ChartModule } from 'angular-highcharts';

const appRoutes:Routes=[
  {path:'', component:RegisterComponent,canActivate: [CanProceedSigninRegisgterGuard]},
  {path:'signin', component:LoginComponent,canActivate: [CanProceedSigninRegisgterGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate: [CanProceedGuard]},


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserComponent,
    CreateBotComponent,
    WelcomePageComponent,
    MyBotsComponent,
    ProfileComponent,
    SettingsComponent,
    ChatConversationShowcaseComponent,
    // NbChatConversationShowcaseComponent,
    EditBotComponent,
    UsersByGenderComponent,
    ChatbotTypesPercentageComponent,
    AmazonUsersByGenderComponent,
    TripadvisorUsersByGenderComponent,
    LastFewTransactionComponent,
    MainAdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
