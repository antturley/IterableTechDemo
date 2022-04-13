var _iaq = _iaq || [];
var click = 0;

// Identify the user and set some fields on their Iterable profile 
function identifyUser() {
    _iaq.push(['identify', document.getElementById('email').value, {
        "firstName": "Anthony",
        //"isWebUser": true,
        //"SA_WebUser_Test_Key": "completed"
    }]);
    //Added to this method becuase the second method would not
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

// Track a click event, passing a click count (from the current session)
// that will be stored in the event's dataFields property
function trackEvent() {
    _iaq.push(['identify', document.getElementById('email').value, {
        "firstName": "Anthony",
        //"isWebUser": true,
        //"SA_WebUser_Test_Key": "completed"
    }]);
    //Added to this method becuase the second method would not
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

(function (){
    _iaq.push(['getMessages', {
        "messageMedium":"InApp",
        "email":"antturley@gmail.com",
        "limit": 10
    }]);
});

// Replace <API key> with an Iterable API key (of type JavaScriptSDK)
_iaq.push(['account', 'ff288e91e5f9442cb6ce6ea238886298']);
   
(function () {
   var b = document.createElement('script'); 
   b.type = 'text/javascript'; b.async = true;
   b.src = 'https://js.iterable.com/analytics.js';
   var a = document.getElementsByTagName('script')[0]; 
   a.parentNode.insertBefore(b, a);
})();
   