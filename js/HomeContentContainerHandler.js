
import { createContentCard } from "../global/TemplateContentCard.js"
import { fetchContentWatchingNow } from "./fetchWatchingNow.js"

const _ContentContainerToWatch = document.getElementById("idContentContainerToWatch")
const _ContentContainerNow = document.getElementById("idContentContainerNow")
const _ContentContainerDone = document.getElementById("idContentContainerDone")

initContent()

function initContent() {

    fetchContentWatchingNow()



}

export function fetchContentWatchingNowHandler(content) {

    content.forEach(c => {
        populateContent(c)
    });

}

function populateContent(contentObj) {
    const newContentCard = createContentCard(contentObj)
    newContentCard.onclick = function () {
        window.open(contentObj.website_link, '_blank');
    }


    switch(contentObj.status){
        case "to_watch" : _ContentContainerToWatch.appendChild(newContentCard);
        break;

        case "now" : _ContentContainerNow.appendChild(newContentCard);
        break;

        case "done" : _ContentContainerDone.appendChild(newContentCard);
        break;

    }

    
}


