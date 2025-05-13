var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01WR4_sCdjdy9TmJmYTSwzI9QmB6pK0wrQQ&s",
    "https://yt3.googleusercontent.com/yaO29uydEx0PfxuToT7uh_fP1cZGw-mcNrNZcCKTjDBTNvzn_5_gclYVAhBn5XFa-JgMKm6WwUY=s900-c-k-c0x00ffffff-no-rj",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezi6j-e_XsHOGC2Gqiv1M3S4tn7amKZBEQA&s"
  ];

  var index = 0;

  function showImage() {
    var img = document.getElementById("slider");
    img.src = images[index];
  }

  function next() {
    index = index + 1;
    if (index >= images.length) {
      index = 0;
    }
    showImage();
  }

  function previous() {
    index = index - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage();
  }


  setInterval(next, 3000); 