const showLoading = selected => {
  document.querySelectorAll("#logo-container").forEach(tab => {
    tab.style.display = "block";
  });

  selected.style.display = "none";
};

var aud = document.getElementById("gg-earth");
aud.onended = function() {
    // alert("The audio has ended");
    document.getElementById("vid-container").style.display = 'none';
    document.getElementById("logo-container").style.display = 'flex';
};