
const fetch = require('node-fetch')

function check(url, invocationParameters,  expectedResultData, expectedResultStatus) {

    const checkResult = { // this is the object you need to set and return
        urlChecked: url,
        resultData: null,
        resultStatus: null,
        statusTestPassed: null,
        resultDataAsExpected: null
    }
	
	var string = '';
	var a = Object.keys(invocationParameters)
	if(a.length>0) {
		string += '?' + a[0] + '=' + invocationParameters[a[0]];
		for(let i=1; i<a.length; i++) {
			string += '&' + a[i] + '=' + invocationParameters[a[i]];
		}
		checkResult.urlChecked += string
	}
	
	
	async function get(checkResult.urlChecked) {
		console.log('\n\ngetting ' + checkResult.urlChecked + '\n')
		try {
			const response = await fetch(checkResult.urlChecked);
			const json = await response.json();
			console.log(json)
		} catch (error) {
			console.log(error);
		}
	};
	
}


// funzione che confronta due oggetti semplici e verifica se actual contiene tutti gli attributi di expected, e se per
// questi ha gli stessi valori
function compareResults(expected, actual) {
    if (!expected) return true //always ok if there are no expectations
    if (!actual) return false
    for (let e of Object.keys(expected)) {
        if (actual[e]===undefined || expected[e]!=actual[e]  ) return false
    }
    return true
}

module.exports = check