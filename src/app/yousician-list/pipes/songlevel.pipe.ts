import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'songLevelPipe'
})

export class SongLevelPipe implements PipeTransform {

  transform(songs: any, term: any): any {
    if (term === undefined) {
        return songs;
    }
    return songs.filter(function(song) {
      return song.level <= term;
    });
  }

}
