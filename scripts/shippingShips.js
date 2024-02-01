import { getShippingShips,getHaulers } from "./database.js";

const shippingShipsList=getShippingShips();
shippingShipsList.sort((a,b)=>a.name.localeCompare(b.name));

export const shippingShipListHTML=()=>{
    let shippingShipsHTML=`<ul>`;

    for(const shippingShip of shippingShipsList)
    {
        shippingShipsHTML+=`<li data-type="ship" 
                            data-haulerid="${shippingShip.haulerId}" 
                            data-shipname="${shippingShip.name}">
                            ${shippingShip.name}</li>`
    }
    shippingShipsHTML+=`</ul>`

    return shippingShipsHTML;
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
       
        if(itemClicked.dataset.type=="ship")
        {
            let haulerId=itemClicked.dataset.haulerid;   
            let haulingShipList=getHaulers();     
            let haulingShip ={name:"Incorrect"}
            for(const hauler of haulingShipList)
            {
                if(parseInt(haulerId)===hauler.id){
                    haulingShip.name=hauler.name;
                }
            }
            window.alert(`${itemClicked.dataset.shipname} is being hauled by ${haulingShip.name}`)
           
        }
    })
