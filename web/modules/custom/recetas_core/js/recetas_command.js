/**
 * @file
 * Behaviors for the search widget in the admin toolbar.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.recetasExample = {

    attach: function (context) {
      $('body').once('recetas_example').each(function() {
        let selector = drupalSettings.recetas_example.button_id;
        $(selector).hide();
      });
    },
  };

  Drupal.AjaxCommands = function () {};

  Drupal.AjaxCommands.prototype = {
    show: function(ajax, response) {
      let selector = response.selector;
      $(selector).show();
    }
  }

})(jQuery, Drupal, drupalSettings);
