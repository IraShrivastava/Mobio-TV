import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.css']
})
export class VideoPlaylistComponent implements OnInit {

  //variables to store videos playlist and a single video detail at the time of playing respectively
  public videoPlaylist: any;
  public currentVideo: any;

  constructor(public videoService: VideoService, private toastr: ToastrService) { 
    console.log("Video Playlist Constructor called")
  }

  ngOnInit(){ 
    console.log("video playlist component oninit called");
    this.videoService.getAllVideos().subscribe(
      data => {
        console.log("inside get all videos")
          this.videoPlaylist = data;
      },
      error => {
        console.log("some error occurred");
        console.log(error.errorMessage)
      }
    )
  }

  //method to get single video details
  public getVideoDetails(videoId): any {
    this.videoService.getSingleVideoInformation(videoId).subscribe(
      data => {
        console.log("inside single video")
        this.currentVideo = data
      },
      error => {
        console.log("some error occurred");
        console.log(error.errorMessage)
      }
    )
  }
  
  //clear the currentVideo variable when modal is closed
  public modalClosed(): any {
    this.currentVideo= ""
  } 

  //method to notify when video is liked
  public likedVideo: any =() => {
    this.toastr.info('You Liked The Video')
  }

  //method to notify when video is disliked
  public dislikedVideo: any =() => {
    this.toastr.error('You Disliked The VIdeo')
  }
}
