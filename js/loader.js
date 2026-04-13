// window.addEventListener('load', function () {
//   var el = document.getElementById('loader'); // match the HTML ID
//   if (!el) return;

//   // Wait 2 seconds before starting fade-out
//   setTimeout(function () {
//     el.style.transition = 'opacity 0.5s ease';
//     el.style.opacity = '0';

//     // After fade-out, hide the element completely
//     setTimeout(function () {
//       el.style.display = 'none';
//     }, 500); // match the transition duration
//   }, 2000); // 2-second initial delay
// });
window.addEventListener('load', function () {
  var el = document.getElementById('loader');
  if (!el) return;

  setTimeout(function () {
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = '0';

    setTimeout(function () {
      el.style.display = 'none';
    }, 500);
  }, 300);
});


