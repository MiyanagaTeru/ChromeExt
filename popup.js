function LocateElements(e){
  chrome.tabs.executeScript(null,
      {code:"var els = document.body.querySelectorAll('"+ e.target.id +"');for (i=0; i <els.length; i++){ els[i].setAttribute('style', 'border: 2px solid blue;'); console.log(els[i]);} console.log(els.length + ' results found')"});
}

document.addEventListener('DOMContentLoaded', function () {
  var locateBtns = document.querySelectorAll('div');
  for (i=0; i <locateBtns.length; i++){ 
	locateBtns[i].addEventListener('click', LocateElements);
  }


});
