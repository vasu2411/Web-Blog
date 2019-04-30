import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery'

export default Component.extend({
  DS: service('store'),

  actions: {
    showLogo() {
      this.set('logoIsShowing', true);
    },
    hideLogo() {
      this.set('logoIsShowing', false);
    }
  }
});
