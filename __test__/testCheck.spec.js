import { checkForInput } from "../src/client/js/check"

describe("Testing posting data functionality", () => {
    let url = "https://edition.cnn.com/2020/11/18/business/kfc-restaurant-redesign/index.html";
    let urlF = "nsk";


    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("it shold post data correctly after receiving it from api", async() => {
        // Define the input for the function, if any, in the form of variables/array
        const input = checkForInput(url);


        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(input).toBe(true);
        expect(input).toBeDefined();

    })
    test("check valid URL", async() => {
        // Define the input for the function, if any, in the form of variables/array
        const input = checkForInput(urlF);


        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher

        expect(input).toBe(false);

    })

});