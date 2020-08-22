// State
interface State {
  lock(): void;
  play(): void;
  next(): void;
  prev(): void;
}

// Concrete State
class LockedState implements State {
  constructor(public player: AudioPlayer) {}

  lock() {
    if (this.player.playing) {
      this.player.changeState(new PlayingState(this.player));
    } else {
      this.player.changeState(new PendingState(this.player));
    }
  }

  play() {}

  next() {}

  prev() {}
}

// Concrete State
class PlayingState implements State {
  constructor(public player: AudioPlayer) {}

  lock() {
    this.player.changeState(new LockedState(this.player));
  }

  play() {
    this.player.stopPlaying();
    this.player.changeState(new PendingState(this.player));
  }

  next() {
    this.player.nextSong();
  }

  prev() {
    this.player.prevSong();
  }
}

// Concrete State
class PendingState implements State {
  constructor(public player: AudioPlayer) {}

  lock() {
    this.player.changeState(new LockedState(this.player));
  }

  play() {
    this.player.startPlaying();
    this.player.changeState(new PlayingState(this.player));
  }

  next() {}

  prev() {}
}

// Context
class AudioPlayer {
  state: State = new PendingState(this);
  playing = false;

  changeState(state: State) {
    this.state = state;
  }

  startPlaying() {
    this.playing = true;
    console.log('Starting playing');
  }

  nextSong() {
    console.log('Playing next song');
  }

  prevSong() {
    console.log('Playing prev song');
  }

  stopPlaying() {
    this.playing = false;
    console.log('Stopping playing');
  }

  clickPlay() {
    this.state.play();
  }

  clickLock() {
    this.state.lock();
  }

  clickNext() {
    this.state.next();
  }

  clickPrev() {
    this.state.prev();
  }
}

// usage
const player = new AudioPlayer();

player.clickPlay();
player.clickNext();
player.clickPrev();
player.clickLock();
