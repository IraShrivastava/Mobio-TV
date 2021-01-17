import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importing toastr module
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';
//import the components of application, these or auto generated when component is created
import { AppComponent } from './app.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { VideoPlayerComponent } from './video-playlist/video-player/video-player.component';
//import the services used in application
import { VideoService } from './video.service';
@NgModule({
  declarations: [
    AppComponent,
    VideoPlaylistComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      {path: 'home' , component:VideoPlaylistComponent},
      {path: '', component:VideoPlaylistComponent}
    ])
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
