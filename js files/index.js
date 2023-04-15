function divprint() {
    /*	$('#divstresult').print({
        globalStyles: true,
        mediaPrint: false,
        stylesheet: null,
        noPrintSelector: ".no-print",
        iframe: true,
        append: null,
        prepend: null,
        manuallyCopyFormValues: true,
        deferred: $.Deferred(),
        timeout: 750,
        title: null,
        doctype: '<!doctype html>'
}); */
    //MM_openBrWindow('receipt/clearance.php','Receipt','width=400');
}

alert("You are advised to view this page on a desktop/laptop")

//Start of Tawk.to Script

//End of Tawk.to Script


// WhatsApp script

var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?27319';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "Chat",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "20",
        "marginRight": "50",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "The Bells University",
        "brandSubTitle": "Typically replies within a day",
        "brandImg": "../images/cropped-Bells-Logo.2png.png",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, I have a question about ...",
        "backgroundColor": "#0a5f54",
        "ctaText": "Start Chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "2349028923853"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);

// End of Whatsapp Script