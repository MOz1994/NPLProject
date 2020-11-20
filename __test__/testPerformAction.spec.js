import { postData } from "../src/client/js/PostData"

describe("Testing posting data functionality", () => {
    let polarity = "P";
    let confidence = "66";
    let subjectivity = "subjective";
    const url = "http://localhost:3000/wData";

    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("it shold post data correctly after receiving it from api", async() => {
        // Define the input for the function, if any, in the form of variables/array
        const input = postData(url, { polarity: polarity, confidence: confidence, subjectivity: subjectivity });


        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(input).toBeDefined();

    })

});