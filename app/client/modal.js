$(document).ready(function(){
  $('[data-modal]').click(function(){
    var modal = $(this).data('modal');
    $(modal).arcticmodal();
  });
});