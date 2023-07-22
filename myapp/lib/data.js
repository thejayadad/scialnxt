import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
    {
      "_id": userIds[0],
      "firstName": "test",
      "lastName": "me",
      "email": "aaaaaaa@gmail.com",
      "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/man-wearing-blue-and-black-hat-4561457/",
      "friends": [],
      "location": "San Fran, CA",
      "occupation": "Software Engineer",
      "viewedProfile": 14561,
      "impressions": 888822,
      "createdAt": 1115211422,
      "updatedAt": 1115211422,
      "__v": 0
    },
    {
      "_id": userIds[1],
      "firstName": "Steve",
      "lastName": "Ralph",
      "email": "thataaa@gmail.com",
      "password": "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/a-man-standing-on-stairs-while-wearing-jacket-4561375/",
      "friends": [],
      "location": "New York, CA",
      "occupation": "Degenerate",
      "viewedProfile": 12351,
      "impressions": 55555,
      "createdAt": 1595589072,
      "updatedAt": 1595589072,
      "__v": 0
    },
    {
      "_id": userIds[2],
      "firstName": "Some",
      "lastName": "Guy",
      "email": "someguy@gmail.com",
      "password": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
      "picturePath": "https://www.pexels.com/photo/portrait-of-smiling-young-man-4474659/",
      "friends": [],
      "location": "Canada, CA",
      "occupation": "Data Scientist Hacker",
      "viewedProfile": 45468,
      "impressions": 19986,
      "createdAt": 1288090662,
      "updatedAt": 1288090662,
      "__v": 0
    },
    {
      "_id": userIds[3],
      "firstName": "Whatcha",
      "lastName": "Doing",
      "email": "whatchadoing@gmail.com",
      "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/woman-smiling-while-wearing-blue-blazer-and-striped-dress-3905334/",
      "friends": [],
      "location": "Korea, CA",
      "occupation": "Educator",
      "viewedProfile": 41024,
      "impressions": 55316,
      "createdAt": 1219214568,
      "updatedAt": 1219214568,
      "__v": 0
    },
    {
      "_id": userIds[4],
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "janedoe@gmail.com",
      "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/woman-in-white-shirt-and-blue-denim-jeans-4475311/",
      "friends": [],
      "location": "Utah, CA",
      "occupation": "Hacker",
      "viewedProfile": 40212,
      "impressions": 7758,
      "createdAt": 1493463661,
      "updatedAt": 1493463661,
      "__v": 0
    },
    {
      "_id": userIds[5],
      "firstName": "Harvey",
      "lastName": "Dunn",
      "email": "harveydunn@gmail.com",
      "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/bearded-man-smiling-and-wearing-brown-coat-4561394/",
      "friends": [],
      "location": "Los Angeles, CA",
      "occupation": "Journalist",
      "viewedProfile": 976,
      "impressions": 4658,
      "createdAt": 1381326073,
      "updatedAt": 1381326073,
      "__v": 0
    },
    {
      "_id": userIds[6],
      "firstName": "Carly",
      "lastName": "Vowel",
      "email": "carlyvowel@gmail.com",
      "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/woman-smiling-behind-window-4667786/",
      "friends": [],
      "location": "Chicago, IL",
      "occupation": "Nurse",
      "viewedProfile": 1510,
      "impressions": 77579,
      "createdAt": 1714704324,
      "updatedAt": 1642716557,
      "__v": 0
    },
    {
      "_id": userIds[7],
      "firstName": "Jessica",
      "lastName": "Dunn",
      "email": "jessicadunn@gmail.com",
      "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      "picturePath": "https://www.pexels.com/photo/woman-smiling-in-blue-and-white-button-up-shirt-4474639/",
      "friends": [],
      "location": "Washington, DC",
      "occupation": "A Student",
      "viewedProfile": 19420,
      "impressions": 82970,
      "createdAt": 1369908044,
      "updatedAt": 1359322268,
      "__v": 0
    },
    {
        "_id": userIds[8],
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "alice.smith@example.com",
        "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        "picturePath": "https://www.pexels.com/photo/woman-in-yellow-long-sleeve-shirt-holding-her-chin-4502714/",
        "friends": [],
        "location": "Seattle, WA",
        "occupation": "Graphic Designer",
        "viewedProfile": 21541,
        "impressions": 54829,
        "createdAt": 1626177962,
        "updatedAt": 1626177962,
        "__v": 0
      },
      {
        "_id": userIds[9],
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        "picturePath": "https://www.pexels.com/photo/photo-of-woman-wearing-white-blouse-4778626/",
        "friends": [],
        "location": "San Francisco, CA",
        "occupation": "Product Manager",
        "viewedProfile": 31259,
        "impressions": 92745,
        "createdAt": 1588749762,
        "updatedAt": 1588749762,
        "__v": 0
      },
      {
        "_id": userIds[10],
        "firstName": "Emma",
        "lastName": "Johnson",
        "email": "emma.johnson@example.com",
        "password": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        "picturePath": "https://www.pexels.com/photo/woman-in-yellow-turtleneck-sweater-4502725/",
        "friends": [],
        "location": "Los Angeles, CA",
        "occupation": "Content Writer",
        "viewedProfile": 11268,
        "impressions": 33465,
        "createdAt": 1598396162,
        "updatedAt": 1598396162,
        "__v": 0
      },
      {
        "_id": userIds[11],
        "firstName": "Michael",
        "lastName": "Brown",
        "email": "michael.brown@example.com",
        "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        "picturePath": "https://www.pexels.com/photo/bearded-man-wearing-gray-coat-4502741/",
        "friends": [],
        "location": "New York, NY",
        "occupation": "Photographer",
        "viewedProfile": 47829,
        "impressions": 24786,
        "createdAt": 1559321362,
        "updatedAt": 1559321362,
        "__v": 0
      },
      {
        "_id": userIds[12],
        "firstName": "Olivia",
        "lastName": "Martinez",
        "email": "olivia.martinez@example.com",
        "password": "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        "picturePath": "https://www.pexels.com/photo/photo-of-woman-wearing-black-top-3772820/",
        "friends": [],
        "location": "Miami, FL",
        "occupation": "Social Media Manager",
        "viewedProfile": 94568,
        "impressions": 78531,
        "createdAt": 1645292162,
        "updatedAt": 1645292162,
        "__v": 0
      }
  ];
  
  export const donuts = [
    {
      "_id": new mongoose.Types.ObjectId(),
      "userId": userIds[1],
      "firstName": "Steve",
      "lastName": "Ralph",
      "location": "New York, CA",
      "description": "Some really long random description",
      "picturePath": "https://www.pexels.com/photo/woman-standing-on-pavement-and-man-sitting-on-skateboard-on-road-4561425/",
      "userPicturePath": "https://www.pexels.com/photo/a-man-standing-on-stairs-while-wearing-jacket-4561375/",
      "likes": [
        [userIds[0], true],
        [userIds[2], true],
        [userIds[3], true],
        [userIds[4], true]
      ],
      "comments": [
        "random comment",
        "another random comment",
        "yet another random comment"
      ]
    },
    {
      "_id": new mongoose.Types.ObjectId(),
      "userId": userIds[3],
      "firstName": "Whatcha",
      "lastName": "Doing",
      "location": "Korea, CA",
      "description": "Another really long random description. This one is longer than the previous one.",
      "picturePath": "https://www.pexels.com/photo/person-in-black-scoop-neck-top-raising-left-hand-3993235/",
      "userPicturePath": "https://www.pexels.com/photo/woman-smiling-while-wearing-blue-blazer-and-striped-dress-3905334/",
      "likes": [
        [userIds[7], true],
        [userIds[4], true],
        [userIds[1], true],
        [userIds[2], true]
      ],
      "comments": [
        "one more random comment",
        "and another random comment",
        "no more random comments",
        "I lied, one more random comment"
      ]
    },
    {
      "_id": new mongoose.Types.ObjectId(),
      "userId": userIds[4],
      "firstName": "Jane",
      "lastName": "Doe",
      "location": "Utah, CA",
      "description": "This is the last really long random description. This one is longer than the previous one.",
      "picturePath": "https://www.pexels.com/photo/side-view-of-woman-wearing-blue-hijab-standing-in-corridor-4475648/",
      "userPicturePath": "https://www.pexels.com/photo/woman-in-white-shirt-and-blue-denim-jeans-4475311/",
      "likes": [
        [userIds[1], true],
        [userIds[6], true],
        [userIds[3], true],
        [userIds[5], true]
      ],
      "comments": [
        "one more random comment",
        "I lied, one more random comment",
        "I lied again, one more random comment",
        "Why am I doing this?",
        "I'm bored"
      ]
    },
    {
      "_id": new mongoose.Types.ObjectId(),
      "userId": userIds[5],
      "firstName": "Harvey",
      "lastName": "Dunn",
      "location": "Los Angeles, CA",
      "description": "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
      "picturePath": "https://www.pexels.com/photo/woman-in-yellow-dress-4475770/",
      "userPicturePath": "https://www.pexels.com/photo/bearded-man-smiling-and-wearing-brown-coat-4561394/",
      "likes": [
        [userIds[1], true],
        [userIds[6], true],
        [userIds[3], true]
      ],
      "comments": [
        "I lied again, one more random comment",
        "Why am I doing this?",
        "I'm bored",
        "I'm still bored",
        "All I want to do is play video games",
        "I'm going to play video games"
      ]
    },
    {
      "_id": new mongoose.Types.ObjectId(),
      "userId": userIds[6],
      "firstName": "Carly",
      "lastName": "Vowel",
      "location": "Chicago, IL",
      "description": "Just a short description. I'm tired of typing. I'm going to play video games now.",
      "picturePath": "https://www.pexels.com/photo/woman-sitting-on-table-while-holding-cup-4502713/",
      "userPicturePath": "https://www.pexels.com/photo/woman-smiling-behind-window-4667786/",
      "likes": [
        [userIds[1], true],
        [userIds[3], true],
        [userIds[5], true],
        [userIds[7], true]
      ],
      "comments": [
        "I lied again, one more random comment",
        "Why am I doing this?",
        "Man I'm bored",
        "What should I do?",
        "I'm going to play video games"
      ]
    },
    {
      "_id": new mongoose.Types.ObjectId(),
      "userId": userIds[7],
      "firstName": "Jessica",
      "lastName": "Dunn",
      "location": "Washington, DC",
      "description": "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
      "picturePath": "https://www.pexels.com/photo/woman-wearing-eyeglasses-4502716/",
      "userPicturePath": "https://www.pexels.com/photo/woman-smiling-in-blue-and-white-button-up-shirt-4474639/",
      "likes": [
        [userIds[1], true],
        [userIds[2], true]
      ],
      "comments": [
        "Can I play video games now?",
        "No let's actually study",
        "Never mind, I'm going to play video games",
        "Stop it.",
        "Michael, stop it."
      ]
    },
    {
        "_id": new mongoose.Types.ObjectId(),
        "userId": userIds[1],
        "firstName": "John",
        "lastName": "Doe",
        "location": "San Francisco, CA",
        "description": "Just another day in the city!",
        "picturePath": "https://www.pexels.com/photo/man-holding-mug-in-front-of-easel-4502773/",
        "userPicturePath": "https://www.pexels.com/photo/photo-of-woman-wearing-white-blouse-4778626/",
        "likes": [
          [userIds[0], true],
          [userIds[2], true],
          [userIds[3], true],
          [userIds[4], true]
        ],
        "comments": [
          "Lovely picture!",
          "That's amazing!",
          "Wish I was there!"
        ]
      },
      {
        "_id": new mongoose.Types.ObjectId(),
        "userId": userIds[3],
        "firstName": "Michael",
        "lastName": "Brown",
        "location": "New York, NY",
        "description": "A beautiful sunset over the city skyline.",
        "picturePath": "https://www.pexels.com/photo/photo-of-man-standing-on-grey-boulder-4777837/",
        "userPicturePath": "https://www.pexels.com/photo/bearded-man-wearing-gray-coat-4502741/",
        "likes": [
          [userIds[2], true],
          [userIds[4], true],
          [userIds[1], true],
          [userIds[0], true]
        ],
        "comments": [
          "Stunning view!",
          "New York is magical!",
          "Great shot!"
        ]
      },
      {
        "_id": new mongoose.Types.ObjectId(),
        "userId": userIds[4],
        "firstName": "Olivia",
        "lastName": "Martinez",
        "location": "Miami, FL",
        "description": "Exploring the beautiful beaches of Miami.",
        "picturePath": "https://www.pexels.com/photo/beautiful-beauty-blonde-carefree-417324/",
        "userPicturePath": "https://www.pexels.com/photo/photo-of-woman-wearing-black-top-3772820/",
        "likes": [
          [userIds[1], true],
          [userIds[0], true],
          [userIds[3], true],
          [userIds[5], true]
        ],
        "comments": [
          "Miami vibes!",
          "Wish I could be there!",
          "Looks like a dream!"
        ]
      },
      {
        "_id": new mongoose.Types.ObjectId(),
        "userId": userIds[1],
        "firstName": "William",
        "lastName": "Garcia",
        "location": "Chicago, IL",
        "description": "Enjoying the city lights from the rooftop.",
        "picturePath": "https://www.pexels.com/photo/man-in-black-leather-jacket-standing-near-street-4777298/",
        "userPicturePath": "https://www.pexels.com/photo/smiling-man-wearing-white-t-shirt-4778625/",
        "likes": [
          [userIds[1], true],
          [userIds[4], true],
          [userIds[3], true]
        ],
        "comments": [
          "Amazing view!",
          "Chicago is a beautiful city!",
          "Love this picture!"
        ]
      },
      {
        "_id": new mongoose.Types.ObjectId(),
        "userId": userIds[11],
        "firstName": "Sophia",
        "lastName": "Lopez",
        "location": "Los Angeles, CA",
        "description": "Hiking up to the Hollywood sign!",
        "picturePath": "https://www.pexels.com/photo/woman-wearing-green-shirt-4467771/",
        "userPicturePath": "https://www.pexels.com/photo/portrait-of-smiling-young-woman-4498340/",
        "likes": [
          [userIds[1], true],
          [userIds[3], true],
          [userIds[5], true],
          [userIds[7], true]
        ],
        "comments": [
          "What a great hike!",
          "LA has so much to offer!",
          "Fantastic photo!"
        ]
      },
      {
        "_id": new mongoose.Types.ObjectId(),
        "userId": userIds[10],
        "firstName": "James",
        "lastName": "Taylor",
        "location": "Seattle, WA",
        "description": "Enjoying the rainy weather in Seattle!",
        "picturePath": "https://www.pexels.com/photo/man-in-black-crew-neck-t-shirt-sitting-on-concrete-slab-4777293/",
        "userPicturePath": "https://www.pexels.com/photo/photo-of-man-in-black-jacket-and-black-beanie-4777699/",
        "likes": [
          [userIds[1], true],
          [userIds[2], true]
        ],
        "comments": [
          "Seattle looks cozy!",
          "Love the rainy vibe!",
          "Great shot!"
        ]
      }
  ];
  