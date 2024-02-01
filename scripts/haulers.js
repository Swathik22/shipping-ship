import { getHaulers,getShippingShips } from "./database.js";

const haulersList=getHaulers();
haulersList.sort((a,b)=>a.name.localeCompare(b.name));

document.addEventListener("click", (clickHauler)=>{
    const haulerClickedElement= clickHauler.target;
    if(haulerClickedElement.dataset.type=="hauler"){
        const haulerId=haulerClickedElement.dataset.haulersid;
        let counter=0;
        const shippingShipList=getShippingShips();
        for(const ship of shippingShipList){
            if(ship.haulerId===parseInt(haulerId)){
                counter++;
            }
        }
        window.alert(`The hauler is carrying ${counter} shipping ships`);
    }
})


export const haulerListHTML=()=>{
    let haulersHTML=`<ul>`;

    for(const hauler of haulersList)
    {
        haulersHTML+=`<li data-type="hauler" data-haulersId=${hauler.id}>${hauler.name}</li>`
    }
    haulersHTML+=`</ul>`

    return haulersHTML;
}