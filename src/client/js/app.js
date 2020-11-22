// Event listener to add function to existing HTML DOM element
/* istanbul ignore next */
document.getElementById('submit').addEventListener('click', performAction);

function performAction(event) {
    let formText = document.getElementById('newsUrl').value
        /* istanbul ignore next */
    Client.checkForInput(formText)



    getWeather().then(function(data) {

    });


}
/* Function to GET Web API Data*/
const getWeather = async() => {
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
            console.log(data)
            Client.postData('http://localhost:3000/wData', { polarity: data.score_tag, confidence: data.confidence, subjectivity: data.subjectivity })
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



const updateUI = async() => {
    const request = await fetch('http://localhost:3000/all');
    try {

        const allData = await request.json();
        let i = (allData.length - 1);
        document.getElementById('Polarity').innerHTML = "Polarity: " + allData[i].polarity;
        document.getElementById('confidence').innerHTML = "Confidence: " + allData[i].confidence;
        document.getElementById('SUBJECTIVE').innerHTML = "Subjectivity: " + allData[i].subjectivity;

    } catch (error) {
        console.log("error", error);
    }
}


export { performAction }