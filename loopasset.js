var loopAssets1 = [
  // { contentUrl: "http://lorempixel.com/200/200/abstract/", contentType: "image/jpg", mediaType:"IMAGE", timer: 7000},
   // { contentUrl: "https://gmail.com", source: "web", timer: 7000},
  // { contentUrl: "http://www.w3schools.com/html/mov_bbb.mp4", contentType: "video/mp4", mediaType: "VIDEO", timer: 7000},
  
  //{ contentUrl: "http://lorempixel.com/200/200/people/", contentType: "image/jpg", mediaType:"IMAGE", timer: 5000},
  //{ contentUrl: "MP_POLICE-MASK-KHATARO.MP4", contentType: "video/mp4", mediaType:"VIDEO", timer: 5000},
  //{ contentUrl: "MP_POLICE-MASK-KHATARO.MP4", contentType: "video/mp4", mediaType:"VIDEO", timer: 5000},

///// for rss data 
  {
    "source": "rss",
    "title": "ब्रेकिंग..! सोयाबीनच्या निकृष्ट बियाणांची विक्री; औरंगाबादच्या कंपनीविरोधात बार्शी तालुक्‍यात गुन्हा ",
    
  },
  {
    "source": "rss",
    "title": "अबब..! शहरातील 45 हजार वाहनचालकांनी मोडला नियम..! पोलिसांनी केला \"एवढा' दंड",
    
  },
  {
    "source": "rss",
    "title": "अक्कलकोट तालुक्‍यात कोरोनाचा कहर; मंगळवारी आढळले तब्बल 16 रुग्ण ",
    
  },
  {
    "source": "rss",
    "title": "पोलिस कारवाईतील ढिलाईमुळे होतेय \"या' तालुक्‍यातील कोरोना रुग्णसंख्येत वाढ ",
    
  },
  {
    "source": "rss",
    "title": "\"या' माजी आमदाराने दिला इशारा : पुन्हा लॉकडाउन लादाल तर खबरदार..!",
    
  },
  {
    "source": "rss",
    "title": "शहराचे माजी महापौर म्हणतात, कोरोनामुळे नव्हे तर उपासमारीने मरण येणे सर्वांत वाईट! ",
   
  },
  {
    "source": "rss",
    "title": "धक्कादायक..! प्रधानमंत्री पीक विमा योजनेमधून \"या' पिकाला वगळल्याने शेतकऱ्यांसमोर मोठे संकट ",
   
  },
  {
    "source": "rss",
    "title": "कोरोनात भर म्हणून की काय, \"पंचवीस चार'वर पंतप्रधान मोदींच्या \"या' योजनेचा उडाला बोजवारा ",
  
  },
  {
    "source": "rss",
    "title": "\"बार्टी'ची अशीही सामाजिक बांधिलकी; समतादूत लावताहेत मंगल परिणय सोहळे ",
   
  }
];
  var rssdata = null;
  function test (){
  $.getJSON("/along/news-rss.json", function( data ) {
    rssdata = data;
  // $.each( data, function(i, item ) {
  //   loopAssets.push(data[i]);
  // });
   }); 
  console.log("Update json data");
  setTimeout(test, 60000);
  //location.reload();
  }
 

///// end here

console.log(rssdata);

//var previewContainer = $(".previews-container");
var previewContainer = document.querySelector(".previews-container");
var previewContainer1 = document.querySelector(".previews-container1");
var curIndex = 1;

function jpanel (){
  //setTimeout(console.log("wainting"), 100000);
  dev2 : appendMediaElement(rssdata[0]);
  // dev1 : appendMediaElement1(loopAssets[0]);
}


// appendMediaElement(loopAssets[0]);
// appendMediaElement1(loopAssets[0]);
//changeMedia1(loopAssets[0]);

// removed the setInterval but kept the function
function changeMedia() {
  if(curIndex >= rssdata.length) {
    // modified this so it would display the first image/video when looping
    curIndex = 0;
  }
  // console.log(rssdata[curIndex]);
  appendMediaElement(rssdata[curIndex]);
   
  curIndex++;
};

function changeMedia1() {
  if(curIndex >= loopAssets.length) {
    // modified this so it would display the first image/video when looping
    curIndex = 0;
  }
  appendMediaElement1(loopAssets[curIndex]);
   
  curIndex++;
};




function appendMediaElement(asset) {
  var mediaEl = "";
  if(asset.mediaType == "IMAGE") {
    mediaEl =  '<img id="lp-preview-image" src="' + asset.contentUrl + '">';
    previewContainer.innerHTML = mediaEl;
    // image: go to the next media after 5 seconds
    //console.log(asset.timer);
    setTimeout("changeMedia()", asset.timer);
    // added another json
  } else if(asset.source == "News Story Feeds"){
    var ele = document.createElement("p")
    ele.innerHTML = asset.title;
    ele.classList.add("rss-title");
    ele.classList.add("rss-background");
    previewContainer.replaceChild(ele,previewContainer.children[0]); 
    // mediaEl = '<h1 id="lp-preview-rss"> ' + asset.title +'<h1>'
    // previewContainer.innerHTML = mediaEl;
    //console.log(asset);
    setTimeout("changeMedia()", 10000);
    //
  }else if(asset.source == "web"){
    var ele = document.createElement("iframe")
    ele.src = asset.contentUrl;
    ele.scrolling = "no";
    ele.frameBorder="0";
    ele.width = "300px";
    ele.height = "200px";
    previewContainer.replaceChild(ele,previewContainer.children[0]); 
    // mediaEl = '<h1 id="lp-preview-rss"> ' + asset.title +'<h1>'
    // previewContainer.innerHTML = mediaEl;
    //console.log(asset);
    setTimeout("changeMedia()", 10000);
    //
  } else if(asset.mediaType == "VIDEO") {
    mediaEl = "<video id='lp-preview-video' autoplay muted  >";
    mediaEl += "<source src='"+ asset.contentUrl + "' type='" + asset.contentType + "'>";
    mediaEl += "</video>";
    //previewContainer.html(mediaEl);
    previewContainer.innerHTML = mediaEl;
    var myVideo = document.querySelector('#lp-preview-video')
    myVideo.onloadedmetadata = function() {
      //console.log('metadata loaded!');
      //console.log(this.duration);//this refers to myVideo
    };
      
    // video: go to the next media when the video ends
    document.querySelector('#lp-preview-video').addEventListener("ended", function(e) {
      changeMedia();
    });
  }
}

function appendMediaElement1(asset) {
  var mediaEl = "";
  if(asset.mediaType == "IMAGE") {
    mediaEl =  '<img id="lp-preview-image1" src="' + asset.contentUrl + '">';
    previewContainer1.innerHTML = mediaEl;
    // image: go to the next media after 5 seconds
    //console.log(asset.timer);
    setTimeout("changeMedia1()", asset.timer);
    // added another json
  } else if(asset.source == "rss"){
    var ele = document.createElement("h1")
    ele.innerHTML = asset.title;
    previewContainer1.replaceChild(ele,previewContainer1.children[0]); 
    // mediaEl = '<h1 id="lp-preview-rss"> ' + asset.title +'<h1>'
    // previewContainer.innerHTML = mediaEl;
    //console.log(asset);
    setTimeout("changeMedia1()", 10000);
    //
  } else if(asset.source == "web"){
    var ele = document.createElement("iframe")
    ele.src = asset.contentUrl;
    ele.scrolling = "no";
    ele.frameBorder="0";
    ele.width = "600px";
    ele.height = "400px";
    previewContainer1.replaceChild(ele,previewContainer1.children[0]); 
    // mediaEl = '<h1 id="lp-preview-rss"> ' + asset.title +'<h1>'
    // previewContainer.innerHTML = mediaEl;
    console.log(asset);
    setTimeout("changeMedia1()", 30000);
    //
  } else if(asset.mediaType == "VIDEO") {
    mediaEl = "<video id='lp-preview-video1' autoplay muted  >";
    mediaEl += "<source src='"+ asset.contentUrl + "' type='" + asset.contentType + "'>";
    mediaEl += "</video>";
    //previewContainer.html(mediaEl);
    previewContainer1.innerHTML = mediaEl;
    var myVideo = document.querySelector('#lp-preview-video1')
    myVideo.onloadedmetadata = function() {
      //console.log('metadata loaded!');
      //console.log(this.duration);//this refers to myVideo
    };
      
    // video: go to the next media when the video ends
    document.querySelector('#lp-preview-video1').addEventListener("ended", function(e) {
      changeMedia1();
    });
  }
}
