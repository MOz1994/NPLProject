// Personal API Key for OpenWeatherMap API
// let apiKey = process.env.apiKeyw;

// Event listener to add function to existing HTML DOM element
document.getElementById('submit').addEventListener('click', performAction);
// TODO-Async GET

/* Function called by event listener */
function performAction(event) {


    // let url = document.getElementById('newsUrl').value;


    // let baseURL = 'http://api.meaningcloud.com/sentiment-2.1?key=' + key + '&lang=en&model=general&url=' + url;
    getWeather().then(function(data) {

    });


}
/* Function to GET Web API Data*/
const getWeather = async() => { //baseurl inside async
    let url = document.getElementById('newsUrl').value;

    const request = await fetch('http://localhost:3000/key');
    try {
        const allData = await request.json();

        let baseURL = 'http://api.meaningcloud.com/sentiment-2.1?key=' + allData.apikey + '&lang=en&model=general&url=' + url;



        ///////
        const res = await fetch(baseURL)
        try {
            const data = await res.json();
            /* Function to POST data */

            postData('http://localhost:3000/wData', { polarity: data.score_tag, confidence: data.confidence, subjectivity: data.subjectivity })
                .then(
                    updateUI()
                )
        } catch (error) {
            console.log('error', error);
        }
    } catch (error) {
        console.log('error', error);

    }

};

//post method
const postData = async(url = '', data = {}) => {
        // console.log(data)
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        try {
            const newData = await response.json();
            return newData
        } catch (error) {
            console.log('error', error);
        }
    }
    /* Function to GET Project Data */

const updateUI = async() => {
    const request = await fetch('http://localhost:3000/all');
    try {

        const allData = await request.json();
        let i = (allData.length - 1);
        document.getElementById('Polarity').innerHTML = allData[i].polarity;
        document.getElementById('confidence').innerHTML = allData[i].confidence;
        document.getElementById('SUBJECTIVE').innerHTML = allData[i].subjectivity;

    } catch (error) {
        console.log("error", error);
    }
}

// const getkey = async() => {
//     const request = await fetch('/key');
//     try {

//         const allData = await request.json();
//         return allData.apikey;

//     } catch (error) {
//         console.log("error", error);
//     }
// }
export { performAction }