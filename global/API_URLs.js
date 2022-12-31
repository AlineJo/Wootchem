export const HTTP_METHOD_GET_NO_CACHE = {
    method: 'GET', headers: { 'Cache-Control': 'no-cache' }
}


export function HTTP_METHOD_POST_NO_CACHE(jsonRequestObj) {

    const httpObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        // your expected POST request payload goes here
        body: JSON.stringify(jsonRequestObj)
    };
    return httpObj;
}

//Domain
const PROD_DOMAIN = "Wootchem";
const STAG_DOMAIN = "staging-Wootchem";

const domain = PROD_DOMAIN;

//api-urls 
export const API_URL_WATCHING_NOW = 'http://localhost/expprojects/' + domain + 'php/get-watching-now.php';
