   var myRequest = new XMLHttpRequest();
            
            var method = "GET";
            var query = "fietsen";
            var url = "http://www.europeana.eu/api/v2/search.json?wskey=6eZaaGMqH&query=" + query + "&start=1&rows=96&profile=standard";
            
            myRequest.open(method, url);
            myRequest.send();
            
            console.log(document);
            
           myRequest.onreadystatechange = function(){
                if (myRequest.readyState === 4) {
                    var data = myRequest.response;
                    var dataParsed = JSON.parse(data);
                    
                    for (var i=0; i < dataParsed.items.length; i++)
                        console.log(dataParsed.items[i].edmPreview);
                    
                } else {
                    console.log(myRequest.readyState);
                }
            }
            

