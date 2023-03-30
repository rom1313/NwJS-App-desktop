//todo -----------------------------------------------------------------
// todo --------------- IMPORTS --------------------------------------->
// todo ----------------------------------------------------------------
/* const { test } = require("./module.js");
const { Genius } = require("@rom13/genius");
const genius = new Genius(); */
var win = nw.Window.get();
/* var fs = require("fs"); */
/* win.setAlwaysOnTop(true) */
win.setPosition("center");
/* fs.writeFileSync("test.txt", "tyyyyyy", (err) => {
  if (err) throw err;
}); */
// do something with the base64string

//todo -------------------------------------------------------------------------------------------------------------------------------
// todo ---------------------------------------------------------------------------- FRONTEND --------------------------------------->
// todo -----------------------------------------------------------------------------------------------------------------------------
//todo -----------------------------------------------------------------
// todo --------------- EVENTS --------------------------------------->
// todo ----------------------------------------------------------------
document.querySelector("#blockbarre").addEventListener("click", () => {
  win.minimize();
});
document.querySelector("#blockrectangle").addEventListener("click", () => {
  win.reload();
});
document.querySelector("#blockcroix").addEventListener("click", () => {
  win.close(true);
});

/* genius.serveur(13000);
genius.serveurRequeteGET("/", (req, res) => {
  console.log("Requête !");
  res.send("<h1>Votre serveur fonctionne parfaitement :)<h1/>");
}); */
window.ondragover = window.ondrop = function (e) {
  e.preventDefault();
  return false;
};
window.onkeydown = (e) => {
  document.querySelector("#text").textContent = e.key;
};
window.ondblclick = (e) => {
  e.preventDefault();
  document.querySelector("#text").textContent = "double click ! ";

  return false;
};
/* window.oncontextmenu = () => {
  return false;
}; */
/* win.setResizable(false); */

document.querySelector("button").addEventListener("click", () => {
  var htmlToImage = require("html-to-image");
  /*   document.querySelector("#text").textContent = genius.matos("processeur"); */
  htmlToImage.toPng(document.querySelector("#dessin")).then(function (dataUrl) {
    var blob = b64toBlob(dataUrl);
    const blobURL = URL.createObjectURL(blob);

    let link = document.createElement("a");

    link.href = blobURL;
    link.download = "test.png";
    link.click();
  });
});
//todo -------------------------------------------------------------------------------------------------------------------------------
// todo ---------------------------------------------------------------------------- NODE JS --------------------------------------->
// todo -----------------------------------------------------------------------------------------------------------------------------

var download = require("downloadjs");

// todo transform blob url
function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/png" });
}

/* htmlToImage.toPng(document.querySelector("html")).then(function (dataUrl) {
  var blob = b64toBlob(dataUrl);
  const blobURL = URL.createObjectURL(blob);

  let link = document.createElement("a");

  link.href = blobURL;
  link.download = "test.png";
  link.click();
}); */
/* window.location.href = "https://supernetwork.netlify.app" */

// todo PHASER ------------------------------------------------------------

class Acceuil extends Phaser.Scene {
  constructor() {
    super("Acceuil");
  } // nom de la scene

  //TODO ------- PRELOAD -----

  preload() {
    this.load.image("fond", "./asset/jeu/img/fond.png"); // import fond de scene
  }
  //TODO ------- CREATE -----

  create() {
    const touche = this.input.keyboard.addKeys("Z,S,Q,D,A,B,C,E,F,G,H,I,J,K,L,M,N,O,P,R,T,U,V,W,X,Y,ESC,SPACE"); // creation des touches

    const camera = this.cameras.main; // creation d'une camera
    camera.fadeIn(1500, 1);

    const touchesclavierFLECHES = this.input.keyboard.createCursorKeys(); // creation des touches fléchés

    this.background = this.add.image(160, 720, "fond");

    // todo ------------- Colisions ---------------------->
  } // fin de create ()
  //TODO ------- UPDATE -----

  update() {} // fin update()

  //TODO ------- FIN DE SCENE -----
}

var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  pixelArt: true,
  resolution: window.devicePixelRatio,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [Acceuil],
};

var game = new Phaser.Game(config);
