import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {

  public shaka = require('../../../../node_modules/shaka-player/dist/shaka-player.compiled')

  //details of current video to be played
  @Input() currentVideo : any;

  @ViewChild('videoPlayer') videoElementRef: ElementRef;
  videoElement: HTMLVideoElement;

  //variable to hold the url of video to be played
  public manifestUri: any

  constructor() { }

  ngOnInit() {
    console.log("current video")
    console.log(this.currentVideo)
    this.manifestUri = this.currentVideo.manifestUri
  }

  ngAfterViewInit() {
    //Install built-in polyfills to patch browser incompatibilities.
    this.shaka.polyfill.installAll();
    //Check to see if the browser supports the basic APIs Shaka needs.
    if (this.shaka.Player.isBrowserSupported()) {
      this.videoElement = this.videoElementRef.nativeElement;
      this.initPlayer();
    } else {
      //This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }

  private initPlayer() {
    //Create a Player instance.
    let player = new this.shaka.Player(this.videoElement);
    //Listen for error events.
    player.addEventListener('error', this.onErrorEvent);
    //Try to load a manifest. This is an asynchronous process.
    player.load(this.manifestUri).then(() => {
      //This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');
    }).catch(this.onError); //onError is executed if the asynchronous load fails.
  }

  private onErrorEvent(event) {
    //Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  private onError(error) {
    //Log the error.
    console.error('Error code', error.code, 'object', error);
  }

}
