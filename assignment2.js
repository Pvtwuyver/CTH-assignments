
var ImageURL = [
    "http://www.moillusions.com/wp-content/uploads/photos1.blogger.com/blogger/5639/2020/400/hitchcock.jpg", 
     "http://www.movingpaintings.co.uk/USERIMAGES/pollock%20no.1%20(2).jpg",
     "http://www.007.com/bond50bluray.com/html/images/gunBarrell.png",
     "https://www.seeklogo.net/wp-content/uploads/2012/11/biohazard-logo-vector.png",
     "https://www.simyo.nl/blog/wp-content/uploads/2015/04/spotify-icon-logo-vector.png",
     "http://veenstradejong.nl/wp-content/uploads/2012/01/logo-mercedes.png",
     "http://data.learnpad.co/organizations/8734/globe3.png?date=1397037915&size=90094",
     "http://www.officialpsds.com/images/thumbs/Star-Wars-Death-Star-psd72402.png",
     "http://www.techtastic.nl/wp-content/uploads/2015/01/logo-valentines.png",
     "http://vectorlogofree.com/wp-content/uploads/2013/01/batman-arts-logo-vector-400x400.png"
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
    

    


    
  
