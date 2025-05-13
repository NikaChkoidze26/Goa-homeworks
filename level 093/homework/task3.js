let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];

function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}

function removeLastSong() {
    playlist.pop();
    return playlist;
}

function moveSongs() {
    playlist.copyWithin(playlist.length - 2, 0, 2);
    return playlist;
}

function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}

