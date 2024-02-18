$(function () {

    "use strict";

    // init the validator
    $('#ajax-contact').validator();
});

window.addEventListener("load", (e) => {

    const form = document.querySelector(".form");
    const username = document.querySelector("#name");
    const phoneNumber = document.querySelector("#phone");
    const alert = document.querySelector("#msgSubmit");
    const token = "6731341139:AAE9BGGDWZi7njyv41E28FLpYEJ-tEgSdk0";
    const chat_id = -4136167768;

    function complateFunc() {
        alert.classList.remove('hidden')
        count = setTimeout(() => {
            alert.classList.add('hidden');
        }, 3500);
    }


    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (username.value.length < 3 || phoneNumber.value.length < 9) {
            return
        }

        const textMessage = `Jo'natuvchi ma'lumotlari:%0A <b>Ism: </b>${username.value} %0A <b>Telefon: </b> ${phoneNumber.value}`;
        const URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${textMessage}&parse_mode=html`;


        try {
            const res = await fetch(URL);
            const data = await res.json();

            username.value = null;
            phoneNumber.value = null;
        } catch (error) {
            console.log(error);
        }
        complateFunc()
    })
});

