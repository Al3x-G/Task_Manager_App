document.addEventListener('DOMContentLoaded', function() {
    // initialisation of the sidenav
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // initialisation of modal
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    // initialisation of datepicker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"} 
    });

    // initialisation of select
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    //initialisation of collapsible
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);

  });

  