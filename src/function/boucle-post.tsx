
import axios from "axios";


function boucle_post() {
        axios.get('https://character-database.becode.xyz/description')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
            console.log("WOOO");
            })
}
 console.log(boucle_post());