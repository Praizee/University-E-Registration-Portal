alert("You are advised to view this page on a desktop/laptop")


// Specify the desired device width for testing
var desiredWidth = 1150; // Replace with the desired width in pixels

// Check if the device width is less than the desired width
var isMobileWidth = window.innerWidth < desiredWidth;

// Check if the user agent matches mobile devices
var isMobileUserAgent = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Combine both checks
var isMobile = isMobileWidth || isMobileUserAgent;

if (isMobile) {
    // Actions for mobile devices
    alert("Mobile devices are currently not supported.");
    window.stop(); // Stop further loading/rendering of the page
}

// Continue with the regular page loading and functionality



// function divprint() {
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
// }

// alert("You are advised to view this page on a desktop/laptop")
// alert("Mobile ")

//Start of Tawk.to Script

//End of Tawk.to Script


// WhatsApp script

// Specify the URL of the WhatsApp integration script
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?27319';

// Create a script element
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;

// Define the options for the WhatsApp chat widget
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

// Callback function to be executed when the WhatsApp script is loaded
s.onload = function () {
    CreateWhatsappChatWidget(options);
};

// Insert the WhatsApp script element into the document
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);

// End of Whatsapp Script
