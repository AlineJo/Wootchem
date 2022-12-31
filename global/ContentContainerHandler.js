
import { createContentCard } from "./TemplateContentCard.js"

const _ContentContainerToWatch = document.getElementById("idContentContainerToWatch")

initContent()

function initContent() {

    for (var i = 0; i < 3; i++) {
        populateContent(i)
    }

}

function populateContent(index) {
    const newContentCard = createContentCard(getContentObj(index))
    _ContentContainerToWatch.appendChild(newContentCard)
}


function getContentObj(index) {

    const contentObj_1 = {
        title: "Drifters",
        season: "Season 2",
        episode: "Episode 1/24",
        website: "Website 9anime",
        src: "https://m.media-amazon.com/images/M/MV5BYmQ2YmU0YzEtYWE5OS00MjU4LThmZDQtZGNhNTE5Y2MwODg1XkEyXkFqcGdeQXVyMTUwMjI0MTI@._V1_.jpg",
        desc: "Various historical fighters are summoned from across time to wage war on each other, with the fate of the world in the balance."
    }

    const contentObj_2 = {
        title: "VINLAND SAGA",
        season: "Season 1",
        episode: "Episode 1/24",
        website: "Website 9anime",
        src: "https://flxt.tmsimg.com/assets/p17127060_b_v9_aa.jpg",
        desc: "Young Thorfinn longs for an adventure far from his home in Iceland. One day, his father saves the life of a runaway slave found buried in the snow."
    }

    const contentObj_3 = {
        title: "Castlevania",
        season: "Season 1/4",
        episode: "Episode 1/24",
        website: "Website 9anime",
        src: "https://pics.filmaffinity.com/castlevania-175848376-large.jpg",
        desc: "A vampire hunter fights to save a besieged city from an army of otherworldly beasts controlled by Dracula himself. Inspired by the classic video games."
    }

    const contentArray = [contentObj_1, contentObj_2, contentObj_3]

    return contentArray[index]
}


