/* eslint-disable */
import videojs from 'video.js';
const MenuItem = videojs.getComponent('MenuItem');
const Component = videojs.getComponent('Component');

class SourceMenuItem extends MenuItem {
  constructor(player, options) {
    options.selectable = true;
    options.multiSelectable = false;
    super(player, options);
  }

  handleClick() {
    let selected = this.options_;
    super.handleClick();

    let levels = this.player().qualityLevels();
    const Representation = {
      id: 'auto',
      width: 1920,
      height: 99999,
      bitrate: 5000,
      frameRate: 30,
      enabled: function (isEnabled) {
        if (typeof isEnabled === 'boolean') {
          // If isEnabled is provided, set the enabled status
          this._enabled = isEnabled;
        }
        // Return whether it is currently enabled
        return this._enabled || false;
      },
    };
    levels.addQualityLevel(Representation);

    levels.selectedIndex_ = selected.index;

    levels.trigger({ type: 'change', selectedIndex: selected.index });

    for (let i = 0; i < levels.length; i++) {
      if (selected.index == levels.length) {
        // If this is the Auto option, enable all renditions for adaptive selection
        levels[i].enabled = true;
      } else if (selected.index == i) {
        levels[i].enabled = true;
      } else {
        levels[i].enabled = false;
      }
    }
  }

  update() {
    let selectedIndex = this.player().qualityLevels().selectedIndex;
    this.selected(this.options_.index == selectedIndex);
  }
}

Component.registerComponent('SourceMenuItem', SourceMenuItem);
export default SourceMenuItem;
