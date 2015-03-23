Polymer('polymer-windows', {

    ready: function() {
    },

    page: 0,

    afterTransition: function(e) {
        if ((e.target == this.$.topAnimate && e.target.lastSelected == 0) || 
             (e.target == this.$.scriptAnimate && e.target.lastSelected == 1)) {
            var code = this.$.codeMirror;
            code.style.display = "block";
            code.refresh();
            code.focus();
        }
    }

});