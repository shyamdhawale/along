var loopAssets = [
  { contentUrl: "http://lorempixel.com/200/200/abstract/", contentType: "image/jpg", mediaType:"IMAGE", timer: 7000},
  { contentUrl: "http://www.w3schools.com/html/mov_bbb.mp4", contentType: "video/mp4", mediaType: "VIDEO", timer: 7000},
  { contentUrl: "http://lorempixel.com/200/200/people/", contentType: "image/jpg", mediaType:"IMAGE", timer: 5000},
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


///// end here


//var previewContainer = $(".previews-container");
var previewContainer = document.querySelector(".previews-container");
var curIndex = 1;


appendMediaElement(loopAssets[0]);
//changeMedia1(loopAssets[0]);

// removed the setInterval but kept the function
function changeMedia() {
  if(curIndex >= loopAssets.length) {
    // modified this so it would display the first image/video when looping
    curIndex = 0;
  }
  appendMediaElement(loopAssets[curIndex]);
   
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
  } else if(asset.source == "rss"){
    var ele = document.createElement("h1")
    ele.innerHTML = asset.title;
    previewContainer.replaceChild(ele,previewContainer.children[0]); 
    // mediaEl = '<h1 id="lp-preview-rss"> ' + asset.title +'<h1>'
    // previewContainer.innerHTML = mediaEl;
    //console.log(asset);
    setTimeout("changeMedia()", 10000);
    //
  } else if(asset.mediaType == "VIDEO") {
    mediaEl = "<video id='lp-preview-video' autoplay muted controls >";
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