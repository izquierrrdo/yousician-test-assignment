import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'songSearchPipe'
})

export class SongSearchPipe implements PipeTransform {

  transform(songs: any, term: any): any {
    if (term === undefined) {
        return songs;
    }
    return songs.filter(function(song) {
      return song.title.toLowerCase().includes(term.toLowerCase());
    });
  }

}
