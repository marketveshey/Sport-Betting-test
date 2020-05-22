var input = document.querySelector("#phone");
window.intlTelInput(input, {
  autoPlaceholder: "off",
  hiddenInput: "full_number",
  preferredCountries: ['ae'],
  separateDialCode: true,
  utilsScript: "js/utils.js",
});