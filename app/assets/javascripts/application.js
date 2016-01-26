// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree
//= zoom


$(function(){ $(document).foundation(); });


$(function ($, window, document, undefined) {
    'use strict';
    Foundation.libs.offcanvas = {
        name: 'offcanvas',
        version: '5.0.0',
        settings: {},
        init: function (scope, method, options) {
            this.events();
        },
        events: function () {
            $(this.scope).off('.offcanvas').on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
                e.preventDefault();
                $(this).closest('.off-canvas-wrap').toggleClass('move-right hold-canvas');
            }).on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
                e.preventDefault();
                $(".off-canvas-wrap").removeClass("move-right");
                setTimeout(function(){
                  $(".off-canvas-wrap").removeClass("hold-canvas");
                },500);
            }).on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
                e.preventDefault();
                $(this).closest(".off-canvas-wrap").toggleClass("move-left hold-canvas");
            }).on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
                e.preventDefault();
                $(".off-canvas-wrap").removeClass("move-left");
                setTimeout(function(){
                  $(".off-canvas-wrap").removeClass("hold-canvas");
                },500);
            });
        },
        reflow: function () {}
    };
}(jQuery, this, this.document));



