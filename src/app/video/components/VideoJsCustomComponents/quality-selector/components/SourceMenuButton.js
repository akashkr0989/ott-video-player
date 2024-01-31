/* eslint-disable */
import videojs from 'video.js';
import SourceMenuItem from './SourceMenuItem';

const MenuButton = videojs.getComponent('MenuButton');
let defaultOptions = {};
let showDisplayLabel = false;

class SourceMenuButton extends MenuButton {
  constructor(player, options) {
    super(player, options);

    let qualityLevels = this.player().qualityLevels();
    let displayFlag = [];
    if (options && options.options && options.options.filterData) {
      let keys = Object.keys(options.options.filterData);
      for (let i = 0; i < qualityLevels.length; i++) {
        displayFlag.push(keys.includes(`${qualityLevels[i].height}p`));
      }
      showDisplayLabel = displayFlag.includes(true);
    }

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

    qualityLevels.addQualityLevel(Representation);
    qualityLevels.selectedIndex_ = qualityLevels.length - 1;
    qualityLevels.trigger({
      type: 'change',
      selectedIndex: qualityLevels.length - 1,
    });
    defaultOptions = (options && options.options) || {};

    // Handle options: We accept an options.default value of ( high || low )
    // This determines a bias to set initial resolution selection.
    if (options && options.options) {
      if (!options.options.default) {
        for (let i = 0; i < qualityLevels.length; i++) {
          qualityLevels[i].enabled = i == qualityLevels.length - 1;
        }
      } else if (options.options.default == 'low') {
        for (let i = 0; i < qualityLevels.length; i++) {
          qualityLevels[i].enabled = qualityLevels[i].height == options.options.lowest || i == 0;
        }
      } else if (options.options.default == 'high') {
        for (let i = 0; i < qualityLevels.length; i++) {
          qualityLevels[i].enabled =
            qualityLevels[i].height == options.options.highest || i == qualityLevels.length - 1;
        }
      } else {
        for (let i = 0; i < qualityLevels.length; i++) {
          qualityLevels[i].enabled = qualityLevels[i].height == options.options.default;
        }
      }
    } else {
      for (let i = 0; i < qualityLevels.length; i++) {
        qualityLevels[i].enabled = i == qualityLevels.length - 1;
      }
    }
    this.levelsList = qualityLevels;
    // Bind update to qualityLevels changes
    qualityLevels.on(['change', 'addqualitylevel'], videojs.bind(this, this.update));
  }

  createEl() {
    return videojs.dom.createEl('div', {
      className:
        'vjs-http-source-selector vjs-menu-button vjs-menu-button-popup vjs-control vjs-button',
    });
  }

  buildCSSClass() {
    return MenuButton.prototype.buildCSSClass.call(this) + ' vjs-icon-cog';
  }

  update() {
    return MenuButton.prototype.update.call(this);
  }

  createItems() {
    let menuItems = [];
    let levels = this.levelsList;
    if (levels && levels[levels?.length - 1].enabled) {
      levels.selectedIndex_ = levels.length - 1;
    }

    let labels = [];
    let filterData = [];
    let keys = [];
    // let selectedIndex = false;
    if (defaultOptions && defaultOptions.filterData) {
      keys = Object.keys(defaultOptions.filterData);
    }

    for (let i = 0; i < levels?.length; i++) {
      let index = levels.length - (i + 1);
      let selected = index === levels.selectedIndex;

      // Display height if height metadata is provided with the stream, else use bitrate
      let label = `${index}`;
      let sortVal = index;
      if (levels[index].height) {
        label = `${levels[index].height}p`;
        sortVal = parseInt(levels[index].height, 10);
      } else if (levels[index].bitrate) {
        label = `${Math.floor(levels[index].bitrate / 1e3)} kbps`;
        sortVal = parseInt(levels[index].bitrate, 10);
      }

      // Skip duplicate labels
      if (labels.indexOf(label) >= 0) {
        continue;
      }
      if (
        index == levels.length - 1 &&
        showDisplayLabel &&
        defaultOptions &&
        defaultOptions.filterData
      ) {
        label = 'Auto - Recommended';
      } else if (
        index == levels.length - 1 &&
        defaultOptions &&
        defaultOptions.filterData &&
        !showDisplayLabel
      ) {
        label = 'Auto - Recommended';
      } else if (index == levels.length - 1 && defaultOptions && !defaultOptions.filterData) {
        label = 'Auto';
      }

      if (defaultOptions && defaultOptions.filterData && showDisplayLabel) {
        let ind = keys.indexOf(label);
        if (ind !== -1) {
          label = defaultOptions.filterData[keys[ind]];
        }
      }
      if (labels.indexOf(label) >= 0) {
        continue;
      }
      labels.push(label);
      menuItems.push(new SourceMenuItem(this.player_, { label, index, selected, sortVal }));
    }
    // Sort menu items by their label name with Auto always first
    menuItems.sort(function (a, b) {
      if (a.options_.sortVal < b.options_.sortVal) {
        return 1;
      } else if (a.options_.sortVal > b.options_.sortVal) {
        return -1;
      } else {
        return 0;
      }
    });

    if (defaultOptions && defaultOptions.filterData) {
      filterData = menuItems.filter(
        (item, ind) => keys.includes(`${item.options_.sortVal}p`) || item.options_.sortVal == 99999,
      );
      return filterData;
    } else if (
      defaultOptions &&
      !defaultOptions.default &&
      !defaultOptions.filterData &&
      defaultOptions.lowest &&
      defaultOptions.highest
    ) {
      filterData = menuItems.filter(
        (item, ind) =>
          (item.options_.sortVal >= defaultOptions.lowest &&
            item.options_.sortVal <= defaultOptions.highest) ||
          item.options_.sortVal == 99999,
      );
      return filterData;
    } else if (
      defaultOptions &&
      defaultOptions.default &&
      !defaultOptions.filterData &&
      defaultOptions.lowest &&
      defaultOptions.highest
    ) {
      filterData = menuItems.filter(
        (item, ind) =>
          (item.options_.sortVal >= defaultOptions.lowest &&
            item.options_.sortVal <= defaultOptions.highest) ||
          item.options_.sortVal == 99999,
      );
      return filterData;
    } else if (
      defaultOptions &&
      defaultOptions.default &&
      !defaultOptions.filterData &&
      defaultOptions.lowest &&
      !defaultOptions.highest
    ) {
      filterData = menuItems.filter(
        (item, ind) =>
          item.options_.sortVal >= defaultOptions.lowest || item.options_.sortVal == 99999,
      );
      return filterData;
    } else if (
      defaultOptions &&
      defaultOptions.default &&
      !defaultOptions.filterData &&
      !defaultOptions.lowest &&
      defaultOptions.highest
    ) {
      filterData = menuItems.filter(
        (item, ind) =>
          item.options_.sortVal <= defaultOptions.highest || item.options_.sortVal == 99999,
      );
      return filterData;
    } else if (
      defaultOptions &&
      !defaultOptions.default &&
      !defaultOptions.filterData &&
      !defaultOptions.lowest &&
      defaultOptions.highest
    ) {
      filterData = menuItems.filter(
        (item, ind) =>
          item.options_.sortVal <= defaultOptions.highest || item.options_.sortVal == 99999,
      );
      return filterData;
    } else if (
      defaultOptions &&
      !defaultOptions.default &&
      !defaultOptions.filterData &&
      defaultOptions.lowest &&
      !defaultOptions.highest
    ) {
      filterData = menuItems.filter(
        (item, ind) =>
          item.options_.sortVal >= defaultOptions.lowest || item.options_.sortVal == 99999,
      );
      return filterData;
    }
    return menuItems;
  }
}

export default SourceMenuButton;
