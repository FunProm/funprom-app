export const getRandomNudge = function () {
    const nudges = [
        {
            type: "nudge",
            title: "Completing PROM improves overall quality of life!",
            text: "Patients who have completed their PROMs regularly are known to enjoy a higher quality of life! Thanks to the detailed info provided by them, their doctors better know how to adjust the patient's individual treatment.",
            imageUrl: "https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628_1280.jpg",
            number: "nudge"
        },
        {
            type: "nudge",
            title: "Taking PROMs improves patient-provider communication!",
            text: "A good relationship between doctors and patients is paramount for a speedy and successful recovery, and taking PROMs encourages your health care providers to monitor your progress more closely and foster mutual understanding.",
            imageUrl: "https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722_1280.jpg",
            number: "nudge"
        },
        {
            type: "nudge",
            title: "Taking PROMs leads to less frequent hospitalization and admission to the ER!",
            text: "Patients who dilligently complete their PROMs are admitted to the hospital less frequently. Let's all work together for you to spend more time with your loved ones sooner.",
            imageUrl: "https://cdn.pixabay.com/photo/2017/10/03/01/12/family-2811003_1280.jpg",
            number: "nudge"
        }];

    return nudges[getRandomInt(0, nudges.length)];
}

export const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const categories = [
    {
        "id": "1",
        "description": "General"
    },
    {
        "id": "2",
        "description": "During the past week:"
    },
    {
        "id": "3",
        "description": "For the following questions please circle the number between 1 and 7 that best applies to you"
    },
    {
        "id": "4",
        "description": "During the past four weeks:"
    },
    {
        "id": "5",
        "description": "During the past 7 days:"
    }
];

export const mapCategoryToString = function (category) {
    return categories.find(item => item.id === category)?.description
}
