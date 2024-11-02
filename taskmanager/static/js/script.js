document.addEventListener('DOMContentLoaded', function() {
    // initialisation of the sidenav
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

  document.addEventListener('DOMContentLoaded', function() {
    // defensive programming modal
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  });