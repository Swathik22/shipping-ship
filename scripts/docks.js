import { getDocks,getHaulers} from "./database.js";

let docksList=getDocks();
docksList.sort((a,b)=>a.location.localeCompare(b.location));

export const dockListHTML=()=>{
    let docksHTML=`<ul>`;

    for(const dock of docksList)
    {
        docksHTML+=`<li data-type="dock"
                        data-dockid="${dock.id}"
                        data-docklocation="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }
    docksHTML+=`</ul>`

    return docksHTML;
}

document.addEventListener("click",(clickEvent)=>{
    const clickedElement=clickEvent.target;
    if(clickedElement.dataset.type=="dock"){
        const haulersList=getHaulers();
        let haulerName={name:"nothing"}
        let dockid=clickedElement.dataset.dockid;
        for(const hauler of haulersList)
        {
            if(parseInt(dockid)===hauler.dockId)
            {
                haulerName.name=hauler.name;
            }
        }
        window.alert(`${clickedElement.dataset.docklocation} dock is currently unloading ${haulerName.name}`)
}
})