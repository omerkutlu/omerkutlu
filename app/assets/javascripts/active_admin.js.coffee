#= require active_admin/base
//= require tinymce-jquery

$(document).ready ->
  tinyMCE.init
    mode: 'specific_textareas'
    editor_selector: 'tinymce_editor'
  return