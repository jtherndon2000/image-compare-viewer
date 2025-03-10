const viewers = document.querySelectorAll(".image-compare");

viewers.forEach(element => new ImageCompare(element).mount());