$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.top-body').addClass('active');
    console.log('inside');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.top-body').removeClass('active');
  });