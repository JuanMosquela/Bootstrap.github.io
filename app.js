var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Te ayudamos a cumplir tus sueños.')
  .pauseFor(300)
  .deleteChars(10)  
  .start();