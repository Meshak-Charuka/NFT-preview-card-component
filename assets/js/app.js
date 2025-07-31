document.getElementById("header").addEventListener("mouseover", function () {
  document.getElementById("overlay-backgourd").style.display = "block";
  document.getElementById("overlay-backgourd-img").style.display = "block";
  document.getElementById("header").addEventListener("mouseleave", function () {
    document.getElementById("overlay-backgourd").style.display = "none";
    document.getElementById("overlay-backgourd-img").style.display = "block";
  });
});
