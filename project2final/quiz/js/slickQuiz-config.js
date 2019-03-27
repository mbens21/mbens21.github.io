// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "National Parks Quiz",
        "main":    "<p>Find out how much you know with this quiz!</p>",
        "results": "<h5>Learn More</h5><p>Visit each national park's page on the National Park Service's website to find out more!</p>",
        "level1":  "Fantastic!",
        "level2":  "Great!",
        "level3":  "Not bad!",
        "level4":  "You can do better . . .",
        "level5":  "Go back and review!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which park preserves more than 10,000 hydrothermal features including hot springs, mudpots, fumaroles, travertine terraces, and geysers?",
            "a": [
                {"option": "Yosemite",      "correct": false},
                {"option": "Yellowstone",     "correct": true},
                {"option": "Glacier",      "correct": false},
                {"option": "Zion",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Not quite.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which is the most visited national park?",
            "a": [
                {"option": "Grand Teton",               "correct": false},
                {"option": "Great Smoky Mountains",   "correct": true},
                {"option": "Grand Canyon",               "correct": false},
                {"option": "Acadia", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Not quite.</span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
           "q": "Which national park has granite rock formations that appear to be on fire during sunset?",
            "a": [
                {"option": "Acadia",    "correct": false},
                {"option": "Yosemite",     "correct": true},
                {"option": "Glacier",      "correct": false},
                {"option": "Grand Teton",   "correct": false} // no comma here
               
            ],
            "correct": "<p><span>Brilliant!</span></p>",
            "incorrect": "<p><span>Not Quite.</span></p>" // no comma here
        },
        { // Question 4
            "q": "Which national park joins and colloborates with Waterton Lakes National Park in Alberton, Canada to form the world's first international peace park?",
            "a": [
                {"option": "Great Smoky Mountains",    "correct": false},
                {"option": "Glacier",     "correct": true},
                {"option": "Acadia",      "correct": false},
                {"option": "Grand Canyon",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Not quite.</span></p>" // no comma here
        },
        { // Question 5
            "q": "Which national park has one of the world's largest volcanoes under it?",
            "a": [
                {"option": "Glacier",    "correct": false},
                {"option": "Zion",     "correct": false},
                {"option": "Yellowstone",      "correct": true},
                {"option": "Grand Teton",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>Not quite.</span></p>" // no comma here
        } // no comma here
    ]
};
