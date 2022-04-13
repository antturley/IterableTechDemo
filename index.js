var _iaq = _iaq || [];
var click = 0;

// Identify the user and set some fields on their Iterable profile 
function identifyUser() {
    _iaq.push(['identify', document.getElementById('email').value, {
        "firstName": "Anthony",
        "isWebUser": true,
        "SA_WebUser_Test_Key": "completed"
    }]);    
}

// Track a click event, passing a click count (from the current session)
// that will be stored in the event's dataFields property
function trackEvent() {
    //Used this call to set the identity 
    _iaq.push(['identify', document.getElementById('email').value, {"firstName": "Anthony"}]);
    //Create new custom event via track
    try{
    _iaq.push(['track', 'webSATestEvent', {
        "platform": "web",
        "isTestEvent":true,
        "url":"https://iterable.com/sa-test/Anthony",
        "secret_code_key": "Code_2022"
    }]);
   } catch (error) {
      console.log(error); 
   }
}

//Not working - Try hitting the template endpoint from xhr instead and pass
//api key to header
function getHtmlContent(){
    _iaq.push(['identify','antturley@gmail.com', {"firstName": "Anthony"}]);
    _iaq.push(['getSentMessages', {
        "email":"antturley@gmail.com",
        "userid":"",
        "limit":10,
        "campaignIds":"",
        "startDateTime":"",
        "endDateTime":"",
        "excludeBlastCampaigns":false,
        "messageMedium":"InApp"
    }, getMessage()]);

}

 function getMessage(msg){
    let ele = document.getElementById('success');
    ele.innerHTML = toString(msg) != null ? "N/A" : msg;
}


// Replace <API key> with an Iterable API key (of type JavaScriptSDK)
_iaq.push(['account', 'ff288e91e5f9442cb6ce6ea238886298']);
   
(function () {
   var b = document.createElement('script'); 
   b.type = 'text/javascript'; b.async = true;
   b.src = 'https://js.iterable.com/analytics.js';
   var a = document.getElementsByTagName('script')[0]; 
   a.parentNode.insertBefore(b, a);
})();
   