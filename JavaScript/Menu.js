/* Set the width of the side navigation to 250px */
function openNav() {
  $('#Open-Menu').on('click', e => {
    e.preventDefault();
    $('#Nav-Menu').css('width', '250px');
    $('#Open-Menu').hide();
  });
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $('#Close-Menu').on('click', e => {
    e.preventDefault();
    $('#Nav-Menu').css('width', '0px');
    $('#Open-Menu').show();
  });
}

// Run Handlers

function run() {
  openNav();
  closeNav();
}

$(run());
