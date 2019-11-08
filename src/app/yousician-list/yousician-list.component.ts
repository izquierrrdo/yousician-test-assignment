import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { SongLevelPipe } from './pipes/songlevel.pipe';
import { SongSearchPipe } from './pipes/songsearch.pipe';

import { Song } from '../song';
import { SongListService } from '../services/songlist.service';
import {
  ClickEvent
} from 'angular-star-rating';


@Component({
  selector: 'app-yousician-list',
  templateUrl: './yousician-list.component.html',
  styleUrls: ['./yousician-list.component.scss']
})

export class YousicianListComponent implements OnInit {
  songsJSON: any; // Object for JSON data from server
  songs: Song[] = [];
  selectedSong: Song;
  minLevel: number;
  maxLevel: number;
  readonly maxLevelSVG = 20; // For SVG pie diagram
  constructor( private songListService: SongListService ) {
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
  onRatingChange = ($event: ClickEvent, song: Song) => {
    this.onSelect(song);
    this.selectedSong.rating = $event.rating;
  }
  ngOnInit() {
    this.songListService.getSongList('./assets/data/songs.json')
    .subscribe(value => {
      this.songsJSON = value.songs;
      for (let i = 0; i < this.songsJSON.length; i++) {
        this.songs.push({
          'id': i,
          'title': this.songsJSON[i].title,
          'artist': this.songsJSON[i].artist,
          'level': this.songsJSON[i].level,
          'rating': this.songsJSON[i].rating
        });
      }
      this.maxLevel = Math.max.apply(Math,
        this.songs.map(function(songs) {
          return songs.level;
        }));
      this.minLevel = Math.min.apply(Math,
        this.songs.map(function(songs) {
          return songs.level;
        }));
    },
    error => {
      console.log('GetSongList service returns an error:  ' + error.statusText);
    });
  }
}
