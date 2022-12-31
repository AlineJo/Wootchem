export function createContentCard(contentObj) {

    const _CC_title = contentObj.title
    const _CC_season = contentObj.season
    const _CC_episode = contentObj.episode
    const _CC_website = contentObj.website
    const _CC_src = contentObj.src
    const _CC_desc = contentObj.desc

    const mContentCard = document.createElement("div")
    mContentCard.id = "idContentCard"
    mContentCard.classList.add("card", "sgContentCard", "mb-3", "bg-dark", "sgMarginBottom_32")

    const mRowDiv = document.createElement("div")
    mRowDiv.classList.add("row", "row", "g-0")

    const mColDiv_1 = document.createElement("div")
    mColDiv_1.classList.add("col-md-4")

    const mAnimeImg = document.createElement("img")
    mAnimeImg.id = "idAnimeImg"
    mAnimeImg.src = _CC_src
    mAnimeImg.classList.add("img-fluid", "rounded-start")

    mColDiv_1.appendChild(mAnimeImg)


    const mColDiv_2 = document.createElement("div")
    mColDiv_2.classList.add("col-md-8")

    const mCardBody = document.createElement("div")
    mCardBody.classList.add("card-body")

    const mAnimeTitle = document.createElement("h5")
    mAnimeTitle.id = "idAnimeTitle"
    mAnimeTitle.classList.add("card-title")
    mAnimeTitle.innerText = _CC_title

    const mAnimeDescription = document.createElement("p")
    mAnimeDescription.id = "idAnimeDescription"
    mAnimeDescription.classList.add("card-text", "sgMarginTop_32")
    mAnimeDescription.innerText = _CC_desc

    const mButtonsRow = document.createElement("div")
    mButtonsRow.classList.add("d-flex", "flex-row")

    const mAnimeSeason = document.createElement("div")
    mAnimeSeason.id = "idAnimeSeason"
    mAnimeSeason.classList.add("btn", "btn-success", "sgMarginRight_16")
    mAnimeSeason.innerText = _CC_season

    const mAnimeEpisode = document.createElement("div")
    mAnimeEpisode.id = "idAnimeEpisode"
    mAnimeEpisode.classList.add("btn", "btn-primary", "sgMarginRight_16")
    mAnimeEpisode.innerText = _CC_episode

    const mAnimeWebsite = document.createElement("div")
    mAnimeWebsite.id = "idAnimeWebsite"
    mAnimeWebsite.classList.add("btn", "btn-warning")
    mAnimeWebsite.innerText = _CC_website


    mColDiv_1.appendChild(mAnimeImg)

    mButtonsRow.appendChild(mAnimeSeason)
    mButtonsRow.appendChild(mAnimeEpisode)
    mButtonsRow.appendChild(mAnimeWebsite)

    mCardBody.appendChild(mAnimeTitle)
    mCardBody.appendChild(mAnimeDescription)
    mCardBody.appendChild(mButtonsRow)

    mColDiv_2.appendChild(mCardBody)

    mRowDiv.appendChild(mColDiv_1)
    mRowDiv.appendChild(mColDiv_2)

    mContentCard.appendChild(mRowDiv)

    return mContentCard
}