function checkForInput(input) {
    //taken from (https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url)

    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    if (pattern.test(input)) {
        return (true);
    } else {
        /* istanbul ignore next */
        alert("Please Enter URL in correct format, like (www.example.com/)");
        return false;
    }




}
export { checkForInput }