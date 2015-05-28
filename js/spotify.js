// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
$(document).ready(function() {

function getArtist(e) {
  console.log('getArtist')
  debugger
  var regions = [];
  // this is AJAX stuff 
  // --- Mathida stuff starts ----
  // $.ajax( {
  //   type: 'GET',
  //   url: 'https://restcountries.eu/rest/v1/all'
  // }).done(function(response){
  //   console.log(response);
  // })
  // --- Mathilda stuff ends ----

  // 4 lines above added, line below deleted!!!
  var request = ajaxRequest('GET', 'https://restcountries.eu/rest/v1/all');

  request.onreadystatechange = function() {
    if(successfulRequest(request)) {
      regionSelect.innerHTML = '';
      // console.log(request.response);
      var response = JSON.parse(request.response);
      for (var i = 0; i < response.length; i++) {
        if(regions.indexOf(response[i].region) === -1 && response[i].region.length >= 1) {
          regions.push(response[i].region);
          // createElement creates a HTML tag for us
          optionRegion = document.createElement('option');
          optionRegion.setAttribute('value', response[i].region);
          optionRegion.innerHTML = response[i].region;
          regionSelect.appendChild(optionRegion);
        }
      }
      var optionDefault = document.createElement('option');
      optionDefault.setAttribute('value', 'default');
      optionDefault.innerHTML = '-- select your region --';
      regionSelect.insertBefore(optionDefault, regionSelect.firstChild);

    }
  }
}




//  --- define stuff in here ------------------
  var getArtist;
  // define the vars
  getArtist = document.getElementById('search-keyword')

  // event listeneres
  artistSelectBox.addEventListener('change', getArtist);
  
});