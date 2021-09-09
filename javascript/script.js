$('#sidebar-menu').scroll(function(){//Make menu to scroll as user scrolls through website 
  $('#sidebar-menu').css('top', $(this).scrollTop())
})