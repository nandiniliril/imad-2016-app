// counter code
var button = document.getElementById('counter');

button.onclick = function (){
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystagechange = function (){
        if (request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        // Not done
    };
    //Make the request
    request.open('GET', 'http://nandiniliril.imad.hasura-app.io/counter', true);
    request.send(null);
};