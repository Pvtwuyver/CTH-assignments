

var r;
var dataparsedlength;

var urlArray = []; 
function getQuery() {
    var query = prompt("What kind of images would you like to rotate?","" );
    if (query !== null) {
        urlArray = [];
        document.getElementById("demo").innerHTML =
            "Showing images with tag *" + query +"* from the Europeana.eu database" ; 
            
        var myRequest = new XMLHttpRequest();
            
        var method = "GET";
            
        var url = "http://www.europeana.eu/api/v2/search.json?wskey=6eZaaGMqH&query=" + query + "&start=1&rows=96&profile=standard";
            
        myRequest.open(method, url);
        myRequest.send();
            
        console.log(document);
    
        var r = 0;
        if (Math.random() < 0.25) {
            r = 90;
            } 
        else if (Math.random() < 0.5){
            r = -90;
        } else if(Math.random() < 0.75){
            r = 180;
        } else{
            r= 0;
        }
        
       
        myRequest.onreadystatechange = function(){
            if (myRequest.readyState === 4) {
                var data = myRequest.response;
                var dataParsed = JSON.parse(data);
                 
                for (var i=0; i < dataParsed.items.length; i++){
                    console.log(dataparsedlength);
                   if (dataParsed.items[i].edmPreview != undefined){
                        urlArray.push(dataParsed.items[i].edmPreview[0]);
                    }
                }
                document.getElementById('image').src = urlArray[0];
                $('#image')[0].style.transform = "rotate("+r+"deg)"; 
                dataparsedlength= urlArray.length;
            } else {
                console.log(myRequest.readyState);
            }
            
        };
    }
}
var n = 0; 
var nextImage = function() {
    if (n < dataparsedlength-1){ 
        n = n+1;
    } else {
         n=0;
    }
    if (Math.random() < 0.25) {
        r = 90;
    } else if (Math.random() < 0.5){
        r = -90;
    } else if(Math.random() < 0.75){
        r = 180;
    } else{
        r= 0;
    }
    document.getElementById('image').src = urlArray[n];
    $('#image')[0].style.transform = "rotate("+r+"deg)";
};
           
var prevImage = function() {
    if (n > 0) {
        n = n-1;
    } else {
        n=(dataparsedlength-1);
    }
    if (Math.random() < 0.25) {
        r = 90;
    } else if (Math.random() < 0.5){
        r = -90;
    } else if(Math.random() < 0.75){
        r = 180;
    } else{
        r= 0;
    }
    console.log(n);
    document.getElementById('image').src = urlArray[n];
    $('#image')[0].style.transform = "rotate("+r+"deg)";
};
                        
var turnImage = function() {
    if (r < 270){ 
        r = r + 90;
    } else {
        r=0;
    }
    $('#image')[0].style.transform = "rotate("+r+"deg)";
};
    
var guessImage = function() {
    if (r !== 0) {
        alert("SORRY!!\nThat is incorrect\nPlease try again!");
    } else {
        alert("EXCELLENT!\nYou must be a Rotation Wizzard?");
    }
};       
            
 
