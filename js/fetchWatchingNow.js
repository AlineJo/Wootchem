import {API_URL_WATCHING_NOW, HTTP_METHOD_GET_NO_CACHE } from "../global/API_URLs.js";
import { fetchContentWatchingNowHandler } from "./HomeContentContainerHandler.js";

export function fetchContentWatchingNow() {
    let content = []

    fetch(API_URL_WATCHING_NOW, HTTP_METHOD_GET_NO_CACHE)
        .then(response => {

            //on response convert the response data into json
            response.json()

                //after converting, wait for the promise data and then handel it
                .then(data => {
                    content = data
                    fetchContentWatchingNowHandler(content)
                })
                .catch(error => {
                    content = [{errorMsg: error}]
                    fetchContentWatchingNowHandler(content)
                });

        });



}