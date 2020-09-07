function init() {
  let headphone = document.getElementById("headphone");
  let control = document.getElementById("control");
  let book = document.getElementById("book");
  let pen = document.getElementById("pen");
  let content = document.getElementById("videoInsert");
  let tv = document.getElementById("main");
  let frame = document.getElementById("frame-img");
  let tag = null;

  // aboutPage();
  //BUTTON CONTROLS
  headphone.addEventListener("click", () => {
    resetVid();
    tag = 1;
    frameImg("assets/fr-headphone.svg")
    videoPlay("assets/cow.mp4");
  });

  control.addEventListener("click", () => {
    console.log("click!");
    resetVid();
    tag = 2;
    frameImg("assets/fr-ctrl.svg")
    videoPlay("assets/loz.mp4");
  });

  book.addEventListener("click", () => {
    console.log("click!");
    tag = 3;
    frameImg("assets/fr-book.svg")
    playlist();
  });

  pen.addEventListener("click", () => {
    console.log("click!");
    tag = 4;
    frameImg("assets/fr-pen.svg")
    aboutPage();
  });

  //FUNCTIONS
  function frameImg(source) {
    console.log(tag);
    frame.src = source;
    frame.addEventListener("click", () => {
      console.log('clicked');
      if (tag == 1) {
        window.open("https://open.spotify.com/user/1216455498?si=dJzREaqrTiy0m2lyXEpoHQ", "_blank");
      } else if (tag == 2) {
        gamer();
      } else if (tag == 3) {
        window.open("https://www.goodreads.com/user/show/10366015-christina", "_blank");
      } else {
        window.open("http://cdacanay.com/", "_blank");
      }
    })

  }
  function resetVid() {
    tv.innerHTML = `        
      <video id="videoInsert" autoplay loop>
    <source src="" type="video/mp4" />
    <source src="" type="video/ogg" />
    Your browser does not support the video tag.
  </video>`;
  }

  function videoPlay(source) {
    content = document.getElementById("videoInsert");
    content.src = source;
  }

  function playlist() {
    tv.innerHTML = `
    <iframe id="readSongs" src="https://open.spotify.com/embed/playlist/1K6xf3GSvaC9X7knn3HO1z" 
    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`

  }

  function gamer() {
    tv.innerHTML = `<div id="gamer"><img id="gamer" src="assets/gamer.png"></div>`
  }

  function aboutPage() {
    tv.innerHTML = `<div id="about">
    <p>This is a small website hand coded and illustrated by Christina Dacanay. It is an "interactive self portrait" for <a href="https://itp.nyu.edu/~sve204/liveweb_fall2020/">Live Web</a> at ITP, NYU.</b><br><br>
      Read more about this project on her <a href="http://www.cdacanay.com/itp-blog">blog</a> and <a href="https://github.com/c-dacanay/self-portrait">Github</a>.<br><br>
      CREDIT:<br>
      The animation of a girl with headphones is by <a href="http://jpmachado.art/">Juan Pablo Machado</a> popularized by ChilledCow's <a href="https://www.youtube.com/watch?v=5qap5aO4i9A">Youtube stream</a>. 
      The music playing underneath her is a clip of Nujabes' song <a href="https://www.youtube.com/watch?v=eRcBMM-syVc">Reflections Eternal</a>.<br><br>
      The videogame clip of from Legend of Zelda: Breath of the Wild. The music underneath is my favorite song from the OST, <a href="https://www.youtube.com/watch?v=SqhZbK6RI8g">Tarrey Town</a>.<br><br>
      This website is set in Courier. All illustrations were done by me, in Figma.
      
      While this does look like my media console, in reality I don't watch much TV.<br><br></p></div>`;
  }
}

window.addEventListener("load", init);