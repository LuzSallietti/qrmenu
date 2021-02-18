let wifiData = document.getElementById('wifiData'),
    wifiBtn = document.querySelector('#wifiBtn'),
    wifiConfirm = document.getElementById('wifiConfirm'),
    exampleCategory = document.getElementById('exampleCategory'),
    categoryProducts = document.getElementById('categoryProducts')
    closeCategoryDetail = document.getElementById('closeCategoryDetail');


function displayNoneAnimation (trigger, element){

trigger.addEventListener('click', function () {
  
  if (element.classList.contains('hidden')) {
    element.classList.remove('opacity-0','hidden');
    setTimeout(function () {
      element.classList.remove('invisible');
    }, 20);
  } else {
    element.classList.add('invisible');    
    element.addEventListener('transitionend', function(e) {
      element.classList.add('opacity-0','hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
  
}, false);
}

displayNoneAnimation(wifiBtn, wifiData);
displayNoneAnimation(wifiConfirm, wifiData);
displayNoneAnimation(exampleCategory, categoryProducts);
displayNoneAnimation(closeCategoryDetail, categoryProducts);


