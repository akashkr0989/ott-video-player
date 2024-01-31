/* eslint-disable */
import videojs from 'video.js';
import SourceMenuButton from './components/SourceMenuButton';
import SourceMenuItem from './components/SourceMenuItem';
import 'videojs-contrib-quality-levels';

const Plugin = videojs.getPlugin('plugin');

const defaults = {};

/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */
class HttpSourceSelector8V extends Plugin {
  /**
   * Create a HttpSourceSelector8V plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  constructor(player, options, filter) {
    // the parent class will add player under this.player
    super(player);
    this.options = videojs.mergeOptions(defaults, options);

    this.player.ready(() => {
      this.player.addClass('vjs-http-source-selector');

      if (this.player.techName_ != 'Html5') {
        return false;
      }

      this.player.on(['loadedmetadata'], function (e) {
        videojs.log('loadmetadata event');
        // hack for plugin idempodency... prevents duplicate menubuttons from being inserted into the player if multiple player.httpSourceSelector() functions called.
        if (
          player.videojs_http_source_selector_initialized == 'undefined' ||
          player.videojs_http_source_selector_initialized == true
        ) {
          console.log('player.videojs_http_source_selector_initialized == true');
        } else {
          this.player().videojs_http_source_selector_initialized = true;
          let controlBar = player.controlBar,
            fullscreenToggle = controlBar.getChild('fullscreenToggle').el();
          if (videojs.browser.IS_ANY_SAFARI) {
            controlBar
              .el()
              .insertBefore(controlBar.addChild('SourceMenuButton').el(), fullscreenToggle);
          } else {
            controlBar
              .el()
              .insertBefore(
                controlBar.addChild('SourceMenuButton', { options }).el(),
                fullscreenToggle,
              );
          }
        }
      });
    });
  }
}

videojs.registerComponent('SourceMenuButton', SourceMenuButton);
videojs.registerComponent('SourceMenuItem', SourceMenuItem);

// Define default values for the plugin's `state` object here.
// HttpSourceSelector8V.defaultState = {};

// Include the version number.
HttpSourceSelector8V.VERSION = '1';

// Register the plugin with video.js.
videojs.registerPlugin('httpSourceSelector8V', HttpSourceSelector8V);
