function makePayment() {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-c634a9a4a8cd9bfcd4d639cdf75ff9f1-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: 2000,
        currency: "NGN",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "thebellstech23@gmail.com",
            phone_number: "09012345678",
            name: "The Bells Tech",
        },
        customizations: {
            title: "E-Payments",
            description: "Payment for an Course Registration",
            logo: "https://e-registration-portal.netlify.app/images/cropped-Bells-Logo.2png.png",
            // logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    });
}