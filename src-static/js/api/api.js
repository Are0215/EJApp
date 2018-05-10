import fetch from 'isomorphic-fetch';
//const DOMAIN = "dev.encuentrojuvenil.co";//dev
const DOMAIN = window.location.origin;//app
//const DOMAIN = "192.168.1.15:8000";//local

let endpoint = "";
var api = {
    apiAuth:{
        async getApiAuth(){
            let options = {
                credentials: "same-origin",
            } 
            endpoint=`${DOMAIN}/api/apiauth/`;
            const response = await fetch(
                endpoint,
                options
            );
            const data = await response.json();
            return data;
        }

    },
    inscriptions:{
        async getInscriptionList(){
            let searchParams = window.location.search;
            let options = {
                credentials: "same-origin"
            } 
            endpoint = `${DOMAIN}/api/inscriptions/${searchParams}`;
            const response = await fetch(
                endpoint,
                options
            );
            const data = await response.json();
            return data;
        },
        async getYoungDetail(){
            const params = window.location.search;
            let options = {
                credentials: "same-origin"
            } 
            endpoint = `${DOMAIN}/api/inscriptions/details/${params}`;
            const response = await fetch(
                endpoint,
                options
            );
            const data = await response.json();
            return data;

        }      

    },
    parents:{
        async getParentsList(){
            const params = window.location.search;
            let options = {
                credentials: "same-origin"
            } 
            const response = await fetch(
                `${DOMAIN}/api/parentlist/${params}`,
                options
            );
            const data = await response.json();
            return data;

        }
    },
    brothers:{
        async getBrothersList(){
            const params = window.location.search;
            let options = {
                credentials: "same-origin"
            } 
            const response = await fetch(
                `${DOMAIN}/api/brotherslist/${params}`,
                options
            );
            const data = await response.json();
            return data;

        }
    },
    areas: {
        async getAreasList() {
            let options = {
                credentials: "same-origin"
            } 
            const response = await fetch(
                `${DOMAIN}/api/areas/`,
                options
            );
            const data = await response.json();
            return data;
        }
    }

}
export default api;