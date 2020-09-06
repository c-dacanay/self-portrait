function init() {
  let headphone = document.getElementById("headphone");
  let control = document.getElementById("control");
  let book = document.getElementById("book");
  let pen = document.getElementById("pen");
  let content = document.getElementById("videoInsert");
  let tv = document.getElementById("main");

  // playlist();


  //BUTTON CONTROLS
  headphone.addEventListener("click", () => {
    resetVid();
    videoPlay("assets/cow.mp4");
  });

  control.addEventListener("click", () => {
    console.log("click!");
    resetVid();
    videoPlay("assets/loz.mp4");
  });

  book.addEventListener("click", () => {
    console.log("click!");
    playlist();
  });

  pen.addEventListener("click", () => {
    console.log("click!");
    aboutPage();
  });

  //FUNCTIONS
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
      she's a illustrator, ux/ui designer, and burgeoning web developer.<br><br>
      find more about this project on her blog and github.<br><br>
      click on the frame for more specific presences.</div>`;
  }
}

window.addEventListener("load", init);