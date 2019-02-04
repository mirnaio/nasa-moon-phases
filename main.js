const todaysDate = convertDate()

$(document).ready(function(){
  console.log(todaysDate)
  loadInitial()
});

function loadInitial() {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=G2Om3XscQQ5ISgFMa7SH4Do7FBwOc21H1GrA5CL6`)
    .then(resp => {
      resp.json().then( data => {
        displayPhoto(data)
        getQuote()
    })
  })
}

function displayPhoto(data) {
  const photo = `<img src="${data.url}"> <i> <figcaption>NASA Photo of the Day: ${data.title} </figcaption> </i>`
  const explanation = data.explanation
  const fillerGIF = `<img src="https://media.giphy.com/media/WTJRO18sPHdNm/giphy.gif">`
  if (data.media_type === "image") {
    $('#two').append(photo)
  }
  else {
    $('#two').append(fillerGIF)
  }
  $('#two').append(explanation)
}

function getQuote() {
  const maxLength = titles.length - 1
  const titleIndex = getRandomInt(0, maxLength)
  const addQuoteToPage = '<h1>"' + titles[titleIndex].title + '"</h1>' + '<i> <p align="right" size="6">' + "Emily Dickinson" + '</p> </i>'
  let oneQuotePerDay
  $('#two').append(addQuoteToPage)
}

//////////////////////mathematical computations///////////////////////////////

function convertDate() {
  const newDate = new Date();
  const yyyy = newDate.getFullYear().toString();
  let mm = (newDate.getMonth()+1).toString();
  let dd  = newDate.getDate().toString();
  const altMm = '0' + mm
  const altDd = '0' + dd

  if(mm.length === 1){
    mm = altMm
  }
  if (dd.length === 1){
    dd = altDd
  }
  const date = yyyy + '-' + mm + '-' + dd
  return date
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


  ////////////////Keep For Reference//////////////////////////
  // $(window).scroll(function() {
  //   var theta = $(window).scrollTop() / 10 % Math.PI;
  //   $('#leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
  //   $('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
  // });

  ///////////////HTML FOR ABOVE////////////////////////////
  //  <div id="container">
  //   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/gear2.svg" alt id="leftgear">
  //   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/gear2.svg" alt id="rightgear">
  // </div>


  ////////////////// Meteor Functions Below ////////////////////////

  // function showMeteors(meteorURL){
    //   fetch(meteorURL)
    //     .then(resp => {
      //       resp.json().then( data => {
        //         const meteorMin = Math.round(data.estimated_diameter.feet.estimated_diameter_min)
        //         const meteorMax = Math.round(data.estimated_diameter.feet.estimated_diameter_max)
        //         let addMeteorToPage = '<p> Name: ' + data.name + '</p>'
        //         if (data['is_potentially_hazardous_asteroid'] === 'true'){
          //           addMeteorToPage += '<p id="hazardWarning">Potentially Hazardous</p>'
          //         }
          //         addMeteorToPage += ('<p>Min: ' + Math.round(meteorMin) + 'ft Max: ' + Math.round(meteorMax) + 'ft</p>')
          //         $('#two').append(addMeteorToPage)
          //       })
          //     })
          // }
          //
          // function getMeteors() {
            //   const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + todaysDate + '&end_date=' + todaysDate + '&api_key=G2Om3XscQQ5ISgFMa7SH4Do7FBwOc21H1GrA5CL6'
            //   fetch(url)
            //     .then(resp => {
              //       resp.json().then( data => {
                //         console.log(data)
                //         meteorIterator(data)
                //       })
                //   })
                // }
                //
                // function meteorIterator(data){
                  //   const meteorArray = data.near_earth_objects[todaysDate];
                  //   meteorArray.map (meteor =>
                    //    showMeteors(meteor.links.self)
                    //   )
                    // }
