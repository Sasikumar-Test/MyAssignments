function launchBrowser(BrowserName){
    let result
    if(BrowserName==='Chrome')

        {
            result = 'Chrome'
        }
        else
        {
            result = 'Different Browser'
        }
        console.log(result)
}
function runTests(testType){

    switch(testType)
    {
        case "smoke":
        console.log("This is smoke test")
        break
        case "sanity":
            console.log("This is sanity")
        break
        case "regression":
            console.log("This is regression")
        break
        default:
            console.log("Smoke")
            break
    }

}
launchBrowser('firefox')
runTests("regression")
