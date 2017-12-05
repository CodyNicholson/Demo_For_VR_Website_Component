function customEnterVR () {
  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }
}

button.addEventListener('click', customEnterVR);
