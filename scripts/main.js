import { haulerListHTML } from "./haulers.js"
import { shippingShipListHTML } from "./shippingShips.js"
import {dockListHTML} from "./docks.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${haulerListHTML()}
    </section>    
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShipListHTML()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${dockListHTML()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML

