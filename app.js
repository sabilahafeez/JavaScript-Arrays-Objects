//BASIC
//********************************************************************** */
// Access Methods
// Question 1
// How will you access the third position of the following array ?
let arr = [5, 10, 15];
console.log(arr[2]);

//Question 2
//How will you access the second element, degree from the following object ?

let obj = { name: "Maimoona", degree: "MBBS" };
console.log(obj.degree);


//Question 3
//How will you access all elements of the following array using loops ?
//USING FOR LOOP
let arr1 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
//USING FOR EACH LOOP
arr1.forEach(function(element) {
    console.log(element);
})

//Question 4
//How will you access all elements of the following object using loops ?
//for in loop
let obj1 = { name: "Maimoona", degree: "MBBS", age: 25 };
for (a in obj1) {
    console.log(a + ":" + obj1[a]);
}
//for of loop
for (let [key, value] of Object.entries(obj1))
    console.log(`${key}: ${value}`)
    //for loop
let variable = Object.keys(obj1)
for (let e = 0; e < variable.length; e++) {
    console.log(variable[e] + ":" + obj1[variable[e]])
}
//INTERMEDIATE
//***************************************************************** */
//Students' Names and Hobbies Data

// Given an array of students:

let students = [{
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];
// Print the following to the console:

//     Console Output:
//     Hobbies of Amna
// 1. eating
// 2. cooking

// Hobbies of Daniyal
// 1. arts
// 2. shopping

// Hobbies of Fahad
// 1. coding
// 2. cooking

// Hobbies of Hajra
// 1. sleep
// 2. reading
for (let d = 0; d < students.length; d++) {
    console.log("Hobbies of " + students[d]["name"])
    for (let c = 0; c < students[d].hobbies.length; c++) {
        console.log(c + 1 + " " + students[d].hobbies[c])
    }
} //************************************************************************** */
// EXTENSIVE STUDENTS DATA

// Given this array of Students

let students1 = [{
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];
//question 1 .........name,gender,city,score of each student
console.log("Name,Gender,City and score of each student is as follows: ")
for (let i = 0; i < students1.length; i++) {
    console.log("Name: " + students1[i]["name"] + "\n ", "Gender: " + students1[i]["gender"] + "\n ", "City: " + students1[i].address["city"] + "\n ", "Score:" + students1[i]["admissionTestScore"]);
}


//question 2...........Print names of female students only.
console.log("Names of female students are: ")
for (let i = 0; i < students1.length; i++) {
    if (students1[i]["gender"] == "f") {
        console.log(students1[i]["name"]);
    }
}

//question 3.............Print names of male students only.
console.log("Names of male students are: ")
for (let i = 0; i < students1.length; i++) {
    if (students1[i]["gender"] == "m") {
        console.log(students1[i]["name"]);
    }
}
//question 4....Print names of students who have passed the admission test. Passing marks are 50.
console.log("Students who have passed the exam are:");
for (let a = 0; a < students1.length; a++) {

    if (students1[a]["admissionTestScore"] > 50) {
        console.log(students1[a]["name"])
    }
}
//question 5.....Print names of eligible students only (students who have internet and live in Karachi are eligible)
console.log("Students who are eligible are:  ");
for (let i = 0; i < students1.length; i++) {
    if (students1[i]["hasInternet"] == true && students1[i]["address"]["city"] == "Karachi") {
        console.log(students1[i]["name"])
    }
}
//question 6..Print address of each student in this format:
//Amna 's address:
//Gulistan - e - Johar in Karachi, Pakistan
for (let i = 0; i < students1.length; i++) {
    console.log(students1[i]["name"] + "'s" + " " + "address:\n")
    console.log(students1[i].address.ilaqa + " " + "in" + " " + students1[i].address.city + "," + " " + students1[i].address.country)
}
//question 7..Print names and phone number of students who have Ufone.

for (let i = 0; i < students1.length; i++) {
    if ((students1[i].phoneNo).slice(2, 4) >= 30 && (students1[i].phoneNo).slice(2, 4) < 40) {
        console.log(students1[i].name + ":" + " " + students1[i].phoneNo);
    }
}
//question 8...Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
//Group A: name1, name2
//Group B: name3, name4, name5
let groupA = "";
let groupB = "";

for (let q = 0; q < students1.length; q++) {
    if (students1[q]["hasJob"] == true) {
        groupA += students1[q]["name"] + ", ";
    } else {
        groupB += students1[q]["name"] + ", ";
    }
}
console.log(groupA);
console.log(groupB);


//question 9....Print age of each student in the below format:
//Amna 's age is 29 years
for (let w = 0; w < students1.length; w++) {
    let currentDate = new Date();
    let diffInYears = Math.floor((currentDate - students1[w]["dob"]) / (1000 * 60 * 60 * 24 * 365));
    students1[w]['age'] = diffInYears;
    console.log(students1[w]["name"] + "'s" + " " + "age is" + " " + diffInYears + " " +
        "Years")
}

//question 10....Print the name of the oldest student
let oldestAge = 0;
for (let z = 0; z < students1.length; z++) {
    if (students1[z]["age"] > oldestAge) {
        oldestAge = students1[z]["age"];
        if (students1[z]["age"] == oldestAge) {
            nameOfOldestStudent = students1[z]["name"]
        }
    }
}
console.log("Name of the Oldest student is: " + " " + nameOfOldestStudent + " " + "and his age: is " + oldestAge);
//****************************************************************** */
//VIDEOS DATA TASK
//Use this array of Youtube videos(You can add more video Object to this array):

let videos = [{
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny, javascript",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
];
//Write the following programs in Javascript.
//Question1.... Add at least 10 more videos to the above array and before writing the following programs in JS.


newVideos = [{
        title: "English Grammer Course For Beginners ",
        lengthInMinutes: 135,
        category: "Education",
        uploadDate: new Date("10-01-2017"),
        tags: "grammer english articles",
        features: ["Purchased", "HD"],
        viewCount: 3900,
        rating: 4.2
    },
    {
        title: "Python For Beginners",
        lengthInMinutes: 360,
        category: "Education",
        uploadDate: new Date("02-18-2019"),
        tags: "python, loops, functions",
        features: ["Purchased", "HD"],
        viewCount: 390000,
        rating: 4.7
    },
    {
        title: "5 Day Rainy Snacks",
        lengthInMinutes: 14,
        category: "food",
        uploadDate: new Date("03-5-2016"),
        tags: "rain, snacks, food",
        features: ["Live", "360°", "HDR"],
        viewCount: 2700,
        rating: 4.2
    }, {
        title: "How to cook",
        lengthInMinutes: 10,
        category: "food",
        uploadDate: new Date("10-9-2019"),
        tags: "snacks, meal",
        features: ["Live", "360°", "HDR"],
        viewCount: 9000,
        rating: 4.1
    }, {
        title: "Baby Sitting",
        lengthInMinutes: 5,
        category: "mothercare",
        uploadDate: new Date("08-25-2020"),
        tags: "baby, mother, care",
        features: ["Purchased", "HD"],
        viewCount: 800,
        rating: 4.3
    }, {
        title: "Maths For Students",
        lengthInMinutes: 19,
        category: "Education",
        uploadDate: new Date("08-24-2020"),
        tags: "maths, concepts",
        features: ["Purchased", "HD"],
        viewCount: 10000,
        rating: 4.8
    }, {
        title: "Learn AI ",
        lengthInMinutes: 20,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "AI, python, deep learning",
        features: ["Purchased", "HD"],
        viewCount: 7000,
        rating: 4.5
    }, {
        title: "Online Teaching",
        lengthInMinutes: 8,
        category: "Education",
        uploadDate: new Date("08-22-2020"),
        tags: "teaching, books, concepts",
        features: ["Purchased", "HD"],
        viewCount: 6987,
        rating: 4.6
    }, {
        title: "Hacking Tricks",
        lengthInMinutes: 4,
        category: "Tech",
        uploadDate: new Date("11-10-2018"),
        tags: "hacking, tech",
        features: ["Purchased", "HD"],
        viewCount: 900,
        rating: 4.7
    }, {
        title: "Top 10 Pakistani Dramas",
        lengthInMinutes: 3,
        category: "Entertainment",
        uploadDate: new Date("08-23-2020"),
        tags: "drama, entertainment",
        features: ["Purchased", "HD"],
        viewCount: 11000,
        rating: 4.4
    },
]

//SOLUTION BY PUSH METHOD
for (let x = 0; x < newVideos.length; x++) {
    videos.push(newVideos[x]);
}
console.log(videos);

//Question 2..Print each video in this format:

// Title: Photoshop tutorial
// Length: 70 minutes
// Category: Education
// Views: 4, 700
// Uploaded On: 22 - July - 2019
// Rating:

for (let x = 0; x < videos.length; x++) {
    console.log("Title: " + videos[x].title + "\n" + "Length: " + videos[x].lengthInMinutes + "\n" + "Category: " + videos[x].category + "\n" +
        "Views: " + videos[x].viewCount + "\n" + "Uploaded On: " + videos[x].uploadDate + "\n" + "Rating: " + videos[x].rating)
}
//Question 3..Print titles of all short ( less than 3 minutes ) videos.
console.log("Short videos which are less than 3 minutes are: ")
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes < 3) {
        console.log(i + ": " + videos[i].title);
    }
}
//Question 4..Print titles of all long ( greater than 20 minutes ) videos.
console.log("Long videos which are greater than 20 minutes are: ")
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 20) {
        console.log(i + 1 + ": " + videos[i].title);
    }
}
//Question 5..Print titles of all medium length videos.
console.log("Medium length videos which are greater than 3 minutes and less than 20 minutes are: ")
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 3 && videos[i].lengthInMinutes < 20) {
        console.log(i + ": " + videos[i].title);
    }
}
//Question 6..Print title of the longest video.
let longestVideo = 0;
for (let a = 0; a < videos.length; a++) {
    if (videos[a].lengthInMinutes > longestVideo) {
        longestVideo = videos[a].lengthInMinutes;
        console.log("Longest Video is: " + videos[a].title);
    }
}

//Question 7..Print titles of all "Educational" videos
videos.forEach(function(element) {
    if (element.category == "Education")
        console.log(element.title)
})

//Question 8..Print titles of all videos with tag "Javascript"
for (let i = 0; i < videos.length; i++) {
    // if (undefined !== videos[i].tags) {
    if (((videos[i].tags).split(", ")).includes("javascript")) {
        console.log(videos[i].title)
    }
}
//}
//Question 9..Print titles of all videos with HD feature

for (let a = 0; a < videos.length; a++) {
    // a = pehla object
    if ((videos[a].features).indexOf("HD") != -1) {
        console.log(videos[a].title);
    }
}


/**Videos By Time */
//Question10 ..Print titles of all videos uploaded today
let todayVideos = [];
let weekVideos = [];
let monthVideos = [];
let yearVideos = [];
let today = new Date();
for (let i = 0; i < videos.length; i++) {
    const uploadDate = videos[i].uploadDate;
    const uploadDay = uploadDate.getDay() == 0 ? 6 : uploadDate.getDay() - 1;
    const thisDay = today.getDay() == 0 ? 6 : today.getDay() - 1;
    const uploadedMonday = uploadDate.getDate() - uploadDay;
    const thisMonday = today.getDate() - thisDay;
    if (today.getDate() == uploadDate.getDate() && today.getMonth() == uploadDate.getMonth() && today.getFullYear() == uploadDate.getFullYear()) {
        todayVideos.push(videos[i].title);
    }
    if (uploadedMonday == thisMonday && today.getMonth() == uploadDate.getMonth() && today.getFullYear() == uploadDate.getFullYear()) {
        weekVideos.push(videos[i].title);
    }
    if (today.getMonth() == uploadDate.getMonth() && today.getFullYear() == uploadDate.getFullYear()) {
        monthVideos.push(videos[i].title);
    }
    if (today.getFullYear() == uploadDate.getFullYear()) {
        yearVideos.push(videos[i].title);
    }
}
console.log("\n --- ---- ----- ------\n Videos uploaded today: \n --- ---- ----- ------\n");
for (let i = 0; i < todayVideos.length; i++) {
    console.log(todayVideos[i]);
}
//Question 11.. Print titles of all videos uploaded this week
console.log("\n --- ---- ----- ------\n Videos uploaded this week: \n --- ---- ----- ------\n");
for (let i = 0; i < weekVideos.length; i++) {
    console.log(weekVideos[i]);
}
//Question 12..Print titles of all videos uploaded this month
console.log("\n --- ---- ----- ------\n Videos uploaded this month: \n --- ---- ----- ------\n");
for (let i = 0; i < monthVideos.length; i++) {
    console.log(monthVideos[i]);
}
//Question 13..Print titles of all videos uploaded this year
console.log("\n --- ---- ----- ------\n Videos uploaded this year: \n --- ---- ----- ------\n");
for (let i = 0; i < yearVideos.length; i++) {
    console.log(yearVideos[i]);
}
//Question 14..Sort the array in ascending order of number of views and print the titles
console.log("Titles of vidoes sorted in ascending order according to viewCount!!")
let sortedVideosOnViews = videos.sort((a, b) => (a.viewCount > b.viewCount) ? 1 : -1);
for (let i = 0; i < sortedVideosOnViews.length; i++) {
    console.log(sortedVideosOnViews[i].title);
}
// //Question 15..Sort the array in ascending order of rating and print the titles
console.log("Titles of vidoes sorted in ascending order according to Rating!!")
let sortedVideosOnRating = videos.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
for (let i = 0; i < sortedVideosOnRating.length; i++) {
    console.log(sortedVideosOnRating[i].title);
}
//-- -- -- -- -- -- -- -- -- --
//**************ADVANCED******************
//The Recipe Card
// Never forget another recipe!

//     Create an object to hold information on your favorite recipe.It should have properties
// for title(a string), servings(a number), and ingredients(an array of strings).
// On separate lines(one console.log statement
//         for each), log the recipe information so it looks like:
//     Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

recipe = { title: "Mole", servings: 2, ingredients: ["cinnamon", "cumin", "cocoa "] }

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients: ")
for (i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}
//********************* */
// The Reading List
// Keep track of which books you read and which books you want to read!

//     Create an array of objects, where each object describes a book and has properties
// for the title(a string), author(a string), and alreadyRead(a boolean indicating
//     if you read it yet).
books = [{ title: "Harry Potter", author: "J.K Rowling", alreadyread: true },
    { title: "La-hasil", author: "Umaira Ahmed", alreadyread: true },
    { title: "Mushaf", author: "Umaira Ahmed", alreadyread: true },
    { title: "Secrets", author: "XYZ", alreadyread: false },
]

// // Iterate through the array of books.For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (let a = 0; a < books.length; a++) {
    console.log("\"" + books[a].title + " " + " by" + " " + books[a].author + "\"" + ".")
}
// Now use an
// if /
// else statement to change the output depending on whether you read it yet or not.If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and
// if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyread === true) {
        console.log("You already read " + " " + "\"" + books[i].title + " " + " by" + " " + books[i].author + "\"" + ".");
    } else {
        console.log("You still need to read" + " " + "\"" + books[i].title + " " + " by" + " " + books[i].author + "\"" + ".");
    }
}