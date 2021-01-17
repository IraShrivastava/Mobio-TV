import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class VideoService {

  //video playlist variable
  public videoPlaylist= [
    {
      "id": "1",
      "title": "Adaptation set switching",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Space_Shuttle_7.6.png",
      "description": "Different adaptation sets had different video codecs. The descriptor indicates seamless switching is possible.  The switching element is same in all the adaptation sets.",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCasesIOP33/adapatationSetSwitching/5/manifest.mpd'
    },
    {
      "id": "2",
      "title": "Elephants Dream",
      "url" : "https://upload.wikimedia.org/wikipedia/commons/0/07/Datacenter_2020.png",
      "description": "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCasesIOP33/MPDChaining/fallback_chain/1/manifest_fallback_MPDChaining.mpd'
    },
    {
      "id": "3",
      "title": "Playhouse-VR",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/ManusVR_Glove_2016.png",
      "description": "Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.",
      "manifestUri": 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd'
    },
    {
      "id": "4",
      "title": "Free Flowing Water",
      "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/Emerald_Lake%2C_Yoho_National_Park_-_A_Milky_View.png",
      "description": "Water making their way between rocks",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCasesIOP41/MultiTrack/alternative_content/7/360_VR_BavarianAlpsWimbachklamm-AlternativeContent-with-ViewPoint.mpd'
    },
    {
      "id": "5",
      "title": "Big Buck Bunny",
      "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png",
      "description": "A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCases/1b/qualcomm/1/MultiRatePatched.mpd'
    },
    {
      "id": "6",
      "title": "The Durian Open Movie Project",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Snowy_mountains_background_-_low_poly_video_game_version_4.png",
      "description": "Just like the other Blender open movies the film was made using Blender, a free and open source software application for animation, created and supported by the Blender Foundation.",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCases/3b/fraunhofer/heaac_stereo_with_video/Sintel/sintel_480p_heaac_stereo_sidx.mpd'
    },
    {
      "id": "7",
      "title": "Short Forest",
      "url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Fall-trees-1_-_West_Virginia_-_ForestWander.png",
      "description": "Fraunhofer is Europe's largest application-oriented research organization.",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCases/10a/1/iis_forest_short_poem_multi_lang_480p_single_adapt_aaclc_sidx.mpd'
    },
    {
      "id": "8",
      "title": "Sintel",
      "url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bell_tent_detail.png",
      "description": "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCasesVP9/vp9-hd-adaptive/sintel-vp9-hd-adaptive.mpd'
    },
    {
      "id": "9",
      "title": "Police Man Update",
      "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Police_man_update.png",
      "description": "The Warner Cable News",
      "manifestUri": 'https://dash.akamaized.net/dash264/TestCases/4c/1/dash.mpd'
    }
  ]

  
  public currentVideo;

  constructor() {
    console.log("Service Constructor called")
  }

  //method to return all the videos
  public getAllVideos(): Observable<any[]> {
    console.log(typeof(this.videoPlaylist))
    return of(this.videoPlaylist);
  }
  /* public getAllVideos(): any {
    return this.videoPlaylist;
  } */

  //method to get particular video
  public getSingleVideoInformation(currentVideoId): Observable<any> {
    for(let video of this.videoPlaylist) {
      if( video.id == currentVideoId) {
        this.currentVideo = video;
      }
    }
    console.log(this.currentVideo);
    return of(this.currentVideo);
  }

}
