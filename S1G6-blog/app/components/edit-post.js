import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery'

export default Component.extend({
  DS: service('store'),
  actions:{
    openModal: function (name,model) {
      //console.log(model.id);
      this.set('title',model.title);
      this.set('body',model.body);
      $('.ui.'+name+'.modal').modal({
        closable: false,
        detachable: false,

        onApprove : () => {
          var title = this.get('title');
          var body = this.get('body');
          model.set('title',title);
          model.set('body',body);
          model.save();
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
