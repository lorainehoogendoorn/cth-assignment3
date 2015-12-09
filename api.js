var myRequest = new XMLHttpRequest();
 
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=e2SADEkVG&query=Maurits+Cornelis+Escher&qf=image+&start=1&rows=24&profile=standard";
            
myRequest.open(method, url);
myRequest.send();
          
myRequest.onreadystatechange = function () {
if (myRequest.readyState === 4){
    var data = myRequest.response;
    var dataParsed = JSON.parse(data);
    console.log(dataParsed);
    var i;                    
    for (i=0; i < dataParsed.items.length; i++){
    images[i]=dataParsed.items[i].edmPreview[0];
    }
    
} else { console.log(myRequest.readyState); }

                    };