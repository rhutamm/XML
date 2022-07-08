
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
                 
        listarMuseos (this);

    } 
}; 

xhr.open("GET", "../../museos.xml", true);
xhr.send(); 

function listarMuseos (objXML){
    
    let respXML = objXML.responseXML;    

    let lista = respXML.getElementsByTagName('museo');

    let tabla = document.querySelector('#listado tbody');

    if (lista.length < 1){

        let fila = document.createElement('tr');    
        let celda = document.createElement('td');

        celda.setAttribute('colspan', '6');
        celda.textContent = 'No existen museos para visualizar';

        fila.appendChild(celda);

        tabla.appendChild(fila);
    }    

    
    for (let i=0; i<lista.length; i++){
        let museo         = document.createElement('tr');    
        let nombreMuseo   = document.createElement('td');
        let webMuseo      = document.createElement('td');
        let localMuseo    = document.createElement('td');
        let descMuseo     = document.createElement('td');
        let añoMuseo      = document.createElement('td');  
           
        console.log(lista[i].getElementsByTagName('nombre')[0].textContent);
        nombreMuseo.textContent = lista[i].getElementsByTagName('nombre')[0].textContent; 

        console.log(lista[i].getElementsByTagName('website')[0].textContent);
        webMuseo.textContent = lista[i].getElementsByTagName('website')[0].textContent;   
        
        console.log(lista[i].getElementsByTagName('localizacion')[0].getAttribute('cuidad'));
        localMuseo.textContent = lista[i].getElementsByTagName('localizacion')[0].getAttribute('cuidad') + ' ' + 
                       lista[i].getElementsByTagName('localizacion')[0].getAttribute('pais');

        console.log(lista[i].getElementsByTagName('descripcion')[0].textContent);
        descMuseo.textContent = lista[i].getElementsByTagName('descripcion')[0].textContent;   

        console.log(lista[i].getElementsByTagName('año')[0].textContent);
        añoMuseo.textContent = lista[i].getElementsByTagName('año')[0].textContent;   

        museo.appendChild(nombreMuseo);
        museo.appendChild(webMuseo);
        museo.appendChild(localMuseo);
        museo.appendChild(descMuseo);
        museo.appendChild(añoMuseo);
    
        tabla.appendChild(museo);
    }

}