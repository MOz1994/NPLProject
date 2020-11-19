import { postData } from "../src/client/js/app"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing posting data functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("it shold post data correctly after receiving it from api", () => {
        // Define the input for the function, if any, in the form of variables/array
        const input = [
            { polarity: "P", confidence: "83", subjectivity: "SUBJECTIVE" },
            { polarity: "NEU", confidence: "74", subjectivity: "SUBJECTIVE" }
        ];
        const output = [{ polarity: "P", confidence: "83", subjectivity: "SUBJECTIVE" }];
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(postData(input)).toEqual(output);
    })
});