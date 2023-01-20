import {API_URL_ADD_CONTENT_ITEM, HTTP_METHOD_POST_NO_CACHE } from "../global/API_URLs.js";





export function fetchPostAddContent() {

    if (verify()) {
        let jsonRequestBody = getJsonRequestBody()

        //fetch data from api using GET method
        fetch(API_URL_ADD_CONTENT_ITEM, HTTP_METHOD_POST_NO_CACHE(jsonRequestBody))
            .then(response => {

                //on response convert the response data into json
                response.json()

                    //after converting, wait for the promise data and then handel it
                    .then(data => {
                        handelPostAddResponse(data);
                    })
                    .catch(error => {
                        // handle the error
                    });

            });
    }

}

function verify() {
    const errorFormSeasonCurrent = document.getElementById("idErrorFormSeasonCurrent");
    errorFormSeasonCurrent.classList.remove("valid-feedback")
 

    return false;
}


function getJsonRequestBody() {

    var jsonRequestBody = {}
    jsonRequestBody.title;
    jsonRequestBody.website;
    jsonRequestBody.status;
    jsonRequestBody.description;
    jsonRequestBody.website_link;
    jsonRequestBody.img_src;
    jsonRequestBody.season_current;
    jsonRequestBody.season_count;
    jsonRequestBody.episode_current;
    jsonRequestBody.episode_count;

    return jsonRequestBody
}


function handelPostAddResponse(data) {

}