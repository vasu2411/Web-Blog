import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery'

export default Component.extend({
  DS: service('store'),
  actions:{
    openModal: function (name,model) {
      //console.log(model.id);
      $('.ui.'+name+'.modal').modal({
        closable: false,
        detachable: false,
        onApprove : () => {
          model.destroyRecord();
        },

        onDeny : () => {
          //console.log("Hello");
          return true
        }

      })
        .modal('show');
    }
  }
});
