
import { createContentCard } from "../global/TemplateContentCard.js"
import { fetchAllContent } from "./FetchAllContent.js"
import { fetchPostAddContent } from "./AddNewContentItem.js"

const _ContentContainerToWatch = document.getElementById("idContentContainerToWatch")
const _ContentContainerNow = document.getElementById("idContentContainerNow")
const _ContentContainerDone = document.getElementById("idContentContainerDone")

initContent()
initClickables()

function initContent() {
    fetchAllContent()
}

export function fetchAllContentHandler(content) {

    content.forEach(c => {
        populateContent(c)
    });

}

function populateContent(contentObj) {
    const newContentCard = createContentCard(contentObj)
    newContentCard.onclick = function () {
        window.open(contentObj.website_link, '_blank');
    }


    switch (contentObj.status) {
        case "to_watch": _ContentContainerToWatch.appendChild(newContentCard);
            break;

        case "now": _ContentContainerNow.appendChild(newContentCard);
            break;

        case "done": _ContentContainerDone.appendChild(newContentCard);
            break;

    }


}

function initClickables() {
    const queueTitleToWatch = document.getElementById("idQueueTitleToWatch")
    const queueTitleNow = document.getElementById("idQueueTitleNow")
    const queueTitleDone = document.getElementById("idQueueTitleDone")
    
    const btnAddContent = document.getElementById("idBtnAddContent")

    queueTitleToWatch.onclick = function () { toggleModal() }
    queueTitleNow.onclick = function () { toggleModal() }
    queueTitleDone.onclick = function () { toggleModal() }
    queueTitleDone.onclick = function () { toggleModal() }

    btnAddContent.onclick = function () { fetchPostAddContent() }

}

function toggleModal() {
    $(function () {
        $('#idInsertNewContentModal').modal('toggle');
    });
}


