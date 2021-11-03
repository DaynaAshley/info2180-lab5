document.addEventListener('DOMContentLoaded', () => {
    let search= document.querySelector('#lookup');
    search.addEventListener('click', () => myFunction());
    

    function myFunction() {
        let lstresult=document.querySelector('#result');
        let p=document.querySelector('#country').value;

        let request = new XMLHttpRequest();
       
        let alias=p;
 
      
        request.onreadystatechange = function() {
            printFunction(request, lstresult);
        }
        request.open('GET', `world.php?country=${alias}`);
        request.send();
    }

 

    function printFunction(request, lstresult) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                lstresult.innerHTML = request.responseText;
            } else {
                alert('Error Code- Information not found');
            }
        }
    }
});