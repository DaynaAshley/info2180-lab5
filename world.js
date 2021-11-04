document.addEventListener('DOMContentLoaded', () => {
    let search= document.querySelector('#lookup');
    let searchcity= document.querySelector('#lookup_cities');

    searchcity.addEventListener('click', () => myFunction1());
    search.addEventListener('click', () => myFunction());
    

    function myFunction() {
        let lstresult=document.querySelector('#result');
        let p=document.querySelector('#country').value;
        p = p.trim();
        let request = new XMLHttpRequest();
       
        let country=sanitize(p);
      
        request.onreadystatechange = function() {
            printFunction(request, lstresult);
        }
        request.open('GET', `world.php?country=${country}&context=country`);
        request.send();
    }

    function myFunction1() {
        let lstresult=document.querySelector('#result');
        let p=document.querySelector('#country').value;
        p = p.trim();
        let request = new XMLHttpRequest();
       
        let country=sanitize(p);
       
        request.onreadystatechange = function() {
            printFunction(request, lstresult);
        }
        request.open('GET', `world.php?country=${country}&context=cities`);
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

    function sanitize(string) {
        let map = {'&': '','<': '', '>': '', '"': '',"'": '',"/": ''};
        let reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
      }


});