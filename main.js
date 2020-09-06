function init() {
  let headphone = document.getElementById("headphone");
  let control = document.getElementById("control");
  let book = document.getElementById("book");
  let pen = document.getElementById("pen");
  let content = document.getElementById("videoInsert");
  let tv = document.getElementById("main");
  let frame = document.getElementById("frame-img");
  let tag = null;

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
        console.log('vidogames');
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
    console.log('running')
    tv.innerHTML = `
    <iframe id="readSongs" src="https://open.spotify.com/embed/playlist/1K6xf3GSvaC9X7knn3HO1z" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`

  }

  function aboutPage() {
    tv.innerHTML = `<div id="about"><h1>live web assignment 1 <br>self-portrait</h1><br>
    <p>this is a website by <B>christina dacanay</b><br><br>
      she's a illustrator, ux/ui designer, and web developer.<br><br>
      find more about this project on her blog and github.<br><br>
      click on the frame for more specific presences.</div>`;
  }
}

window.addEventListener("load", init);