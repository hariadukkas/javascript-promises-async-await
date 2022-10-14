const fetchWithTimeout = function (delay){
    return new Promise(resolve => setTimeout(resolve,delay))
}
module.exports = {fetchWithTimeout}