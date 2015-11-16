  var myRequest = new XMLHttpRequest();
            
            var method = "GET";
            var query = "fietsen";
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
                        }
                        else if(Math.random() < 0.75){
                        r = 180;
                        }
                        else{
                        r= 0;
                        }
           
var urlArray = []; 
           
           myRequest.onreadystatechange = function(){
                if (myRequest.readyState === 4) {
                    var data = myRequest.response;
                    var dataParsed = JSON.parse(data);
                    
                    for (var i=0; i < dataParsed.items.length; i++){
                    
                        console.log(dataParsed.items[i].edmPreview[0]);
                        urlArray.push(dataParsed.items[i].edmPreview[0]);
                         console.log(urlArray);
                         document.getElementById('image').src = urlArray[0];
                         $('#image')[0].style.transform = "rotate("+r+"deg)";
                        }
                    } else {
                    console.log(myRequest.readyState);
                }
            };
            
var n = 0; 
var nextImage = function() {
                   if (n < 95){ 
                        n = n+1;
                        } 
                    else {
                        n=0;
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
                    document.getElementById('image').src = urlArray[n];
                    $('#image')[0].style.transform = "rotate("+r+"deg)";
                    };
           
var prevImage = function() {
                         if (n > 0) {
                            n = n-1;
                            } 
                        else {
                            n=95;
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
                        document.getElementById('image').src = urlArray[n];
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
                };
    
var guessImage = function() {
                if (r !== 0) {
                    alert("SORRY!!\nThat is incorrect\nPlease try again!");
                } else {
                    alert("EXCELLENT!\nYou must be a Rotation Wizzard?");
                    }
                   };       
            
            
 