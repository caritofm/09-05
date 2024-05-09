import { getPersonajes } from "./peticiones/getPersonjes.js";

const crearCard = ( results = []) => {

    
    let personajesRow = document.getElementById("personajesRow");

    //let personajesRow2 = document.getElementById("personajesRow");

    

    results.map((result)=>{

        const {id, name, image, species, status, location} = result;
        const { name : nameLocation} = location;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-sm-12");
        divCol.classList.add("col-xs-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src= image;
        img.alt= ` image  de $(name)`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("text-title");
        title.textContent = ` Nombre: ${name}`;

        const subtitle = document.createElement("p");
        subtitle.classList.add("text-title");
        subtitle.textContent = `Especie : ${species}`;

        const subtitle2 = document.createElement("p");
        subtitle2.classList.add("text-title");
        subtitle2.textContent = `Status : ${status}`;

        const nLocation = document.createElement("p");
        nLocation.classList.add("text-title");
        nLocation.textContent = `Localizacion ${nameLocation}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn", "btn-success");
        btnVer.textContent = "Ver más";
        btnVer.addEventListener("click", ()=> {
            console.log(`el id es: ${id}`);
            console.log(`El nombre es ${name}`);
            console.log(`La imagen es ${image}`);
            console.log(`La especie es ${species}`);
            console.log(`El estado es : ${status}`);
            console.log(`La localizacion es : ${nameLocation}`);

        });

        divCol.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(title);
        divBody.appendChild(subtitle);
        divBody.appendChild(subtitle2)
        divBody.appendChild(nLocation);
        divBody.appendChild(btnVer);

        personajesRow.appendChild(divCol);

    })
}

getPersonajes()
.then( (data) => {
    crearCard(data);
})
// .catch((error)=>{
//     console.log(`El error es: ${error}`)

// })
