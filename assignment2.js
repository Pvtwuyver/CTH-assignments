
var ImageURL = [
    "http://www.moillusions.com/wp-content/uploads/photos1.blogger.com/blogger/5639/2020/400/hitchcock.jpg", 
     "http://www.movingpaintings.co.uk/USERIMAGES/pollock%20no.1%20(2).jpg",
     "http://www.ilike.org.uk/images/this-way-down.gif",
     "http://vector-magz.com/wp-content/uploads/2013/08/decepticon-logo-vector2.jpg",
     "https://www.simyo.nl/blog/wp-content/uploads/2015/04/spotify-icon-logo-vector.png",
     "http://veenstradejong.nl/wp-content/uploads/2012/01/logo-mercedes.png",
     "http://blog.sndimg.com/cook/Singer/los-pollos-hermanos.jpg",
     "http://blog.lewispr.com/content/uploads/2011/07/milleniumfalcon2.jpg",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Piet_Mondriaan_Victory_Boogie_Woogie.jpg/400px-Piet_Mondriaan_Victory_Boogie_Woogie.jpg",
     "http://cdnstatic.visualizeus.com/thumbs/da/42/batman,superhero-da429d250853370466ce9afd6d4a6237_h.jpg"
];

var r = 0;
if (Math.random() < 0.25) {
    r = 90;
    } 
    else if (Math.random() < 0.5){
    r = -90;
    }
    else if(Math.random() < 0.75){
    r = 180;
    }
    else{
    r= 0;
    }

var i = Math.floor(Math.random() * 10);
console.log(i);

document.getElementById('image').src = ImageURL[i];
$('#image')[0].style.transform = "rotate("+r+"deg)";

var nextImage = function() {
   if (i < 9){ 
        i = i+1;
        } 
    else {
        i=0;
        }
    if (Math.random() < 0.25) {
        r = 90;
        } 
    else if (Math.random() < 0.5){
        r = -90;
        }
    else if(Math.random() < 0.75){
        r = 180;
        }
    else{
        r= 0;
        }
    document.getElementById('image').src = ImageURL[i];
    $('#image')[0].style.transform = "rotate("+r+"deg)";
    };

var turnImage = function() {
        if (r < 270){ 
            r = r + 90;
            } 
        else {
            r=0;
            }
    $('#image')[0].style.transform = "rotate("+r+"deg)";
    console.log(r);
    };
    
var guessImage = function() {
    if (r !== 0) {
        alert("SORRY!!\nThat is incorrect\nPlease try again!");
    } else {
        alert("EXCELLENT!\nYou must be a Rotation Wizzard?");
        }
       };
    

    


    
  
