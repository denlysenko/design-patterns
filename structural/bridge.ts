// Abstraction
class RemoteControl {
  constructor(private device: Device) {}

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

// Implementation
interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

// Concrete implementations
class TV implements Device {
  private _isEnabled = false;
  private _currentVolume = 0;
  private _currentChannel = 0;

  isEnabled() {
    return this._isEnabled;
  }

  enable() {
    console.log('TV enabled');
    this._isEnabled = true;
  }

  disable() {
    console.log('TV disabled');
    this._isEnabled = false;
  }

  getVolume() {
    return this._currentVolume;
  }

  setVolume(percent: number) {
    console.log('Setting TV volume');
    this._currentVolume = percent;
  }

  getChannel() {
    return this._currentChannel;
  }

  setChannel(channel: number) {
    console.log('Setting TV channel');
    this._currentChannel = channel;
  }
}

class Radio implements Device {
  private _isEnabled = false;
  private _currentVolume = 0;
  private _currentChannel = 0;

  isEnabled() {
    return this._isEnabled;
  }

  enable() {
    console.log('Radio enabled');
    this._isEnabled = true;
  }

  disable() {
    console.log('Radio disabled');
    this._isEnabled = false;
  }

  getVolume() {
    return this._currentVolume;
  }

  setVolume(percent: number) {
    console.log('Setting Radio volume');
    this._currentVolume = percent;
  }

  getChannel() {
    return this._currentChannel;
  }

  setChannel(channel: number) {
    console.log('Setting Radio channel');
    this._currentChannel = channel;
  }
}

// usage
const remoteControl = new RemoteControl(new TV());
remoteControl.togglePower();
remoteControl.channelUp();
remoteControl.channelDown();
