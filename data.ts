import { DifficultyT } from "@/types/types";

type Riddle = {
  id: number;
  displayOrder: number;
  difficulty: DifficultyT;
  question: string;
  answer: string;
  hint: string | null;
  image?: string;
};

export const riddles: Riddle[] = [
  {
    id: 1,
    displayOrder: 1,
    difficulty: "medium",
    question:
      "A woman shoots her husband, holds him underwater for 5 minutes, then hangs him. But 5 minutes later they go out for dinner together. How?",
    answer:
      "She's a photographer. She shot a photo, developed it underwater, and hung it to dry.",
    hint: "Think about different meanings of these words.",
  },
  {
    id: 2,
    displayOrder: 2,
    difficulty: "easy",
    question:
      "If it takes 5 machines 5 minutes to make 5 t-shirts, how long will it take 100 machines to make 100 t-shirts?",
    answer:
      "5 minutes. Each machine makes one t-shirt in 5 minutes, so 100 machines will make 100 t-shirts in the same 5 minutes.",
    hint: "Think about how many t-shirts each machine produces.",
  },
  {
    id: 3,
    displayOrder: 3,
    difficulty: "sherlock",
    question:
      "A blind man is alone on a deserted island. He has two blue pills and two red pills. He must take exactly one red pill and one blue pill, or he will die. How can he take the correct dose?",
    answer:
      "He makes halves of every pill and consumes that half while keeping the one half aside for each of the pill. This 4 halves will make exactly what he needs to stay alive.",
    hint: "Each pill has a groove that makes it easy to split.",
    image: "5",
  },

  {
    id: 4,
    displayOrder: 4,
    difficulty: "easy",
    question:
      "What English word retains the same pronunciation, even after you take away four of its five letters?",
    answer: "Queue",
    hint: "Think about people standing in a line",
  },
  {
    id: 5,
    displayOrder: 5,
    difficulty: "easy",
    question:
      "What has keys but no locks, space but no room, and you can enter but can't go inside?",
    answer: "A keyboard",
    hint: "You use it every day with your computer.",
  },

  {
    id: 6,
    displayOrder: 6,
    difficulty: "medium",
    question:
      "I am four times as old as my daughter. After 20 years, I shall be twice as old as her. How old are we now?",
    answer: "I am 40 and my daughter is 10.",
    hint: null,
  },
  {
    id: 7,
    displayOrder: 7,
    difficulty: "sherlock",
    question:
      "The man who invented it doesn't want it. The man who bought it doesn't need it. The man who needs it doesn't know it. What is it?",
    answer: "A coffin",
    hint: "A dead man",
  },

  {
    id: 8,
    displayOrder: 8,
    difficulty: "easy",
    question: "What has an eye but cannot see?",
    answer: "A needle",
    hint: "Used for sewing.",
  },
  {
    id: 9,
    displayOrder: 9,
    difficulty: "medium",
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "A map",
    hint: "I can fit in your hand.",
  },
  {
    id: 10,
    displayOrder: 10,
    difficulty: "medium",
    question: "What has hands and a face, but can't hold anything or smile?",
    answer: "A clock",
    hint: "It constantly runs.",
  },
  {
    id: 11,
    displayOrder: 11,
    difficulty: "easy",
    question: "What is full of holes but still holds water?",
    answer: "A sponge",
    hint: null,
  },
  {
    id: 12,
    displayOrder: 12,
    difficulty: "easy",
    question: "What has to be broken before you can use it?",
    answer: "An egg",
    hint: null,
  },
  {
    id: 13,
    displayOrder: 13,
    difficulty: "medium",
    question: "What belongs to you, but your friends use it more?",
    answer: "Your name",
    hint: "It's what people call you.",
  },
  {
    id: 14,
    displayOrder: 14,
    difficulty: "easy",
    question: "What word is spelled incorrectly in every dictionary?",
    answer: "Incorrectly",
    hint: "Think literally about the question.",
  },

  {
    id: 15,
    displayOrder: 15,
    difficulty: "easy",
    question: `A father and son were in a car accident where the father was killed. The ambulance brought the son to the hospital. In the operating room, a doctor came in and looked at the little boy and said "It's difficult for me to operate on him, he is my son". Who is the doctor?`,
    answer: "The boy's mother",
    hint: "Consider gender roles.",
  },

  {
    id: 16,
    displayOrder: 16,
    difficulty: "easy",
    question: "What is always coming, but never arrives?",
    answer: "Tomorrow",
    hint: "A concept of time.",
  },
  {
    id: 17,
    displayOrder: 17,
    difficulty: "hard",
    question:
      "What is taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody?",
    answer: "Pencil lead (graphite)",
    hint: "You use me for writing.",
  },
  {
    id: 18,
    displayOrder: 18,
    difficulty: "medium",
    question: "What can you hold in your right hand, but never in your left?",
    answer: "Your left hand",
    hint: "Try to physically do it.",
  },
  {
    id: 19,
    displayOrder: 19,
    difficulty: "sherlock",
    question: "What question can you never answer 'yes' to?",
    answer: "Are you asleep yet?",
    hint: "The act of answering contradicts the question.",
  },
  {
    id: 20,
    displayOrder: 20,
    difficulty: "hard",
    question: "What has many teeth but cannot bite?",
    answer: "A comb",
    hint: "Used for hair.",
  },
  {
    id: 21,
    displayOrder: 21,
    difficulty: "easy",
    question: "I have a tail and a head, but no body. What am I?",
    answer: "A coin",
    hint: null,
  },
  {
    id: 22,
    displayOrder: 22,
    difficulty: "medium",
    question: "What has a neck but no head, and wears a cap?",
    answer: "A bottle",
    hint: "It holds liquid.",
  },
  {
    id: 23,
    displayOrder: 23,
    difficulty: "medium",
    question: "What has a heart that doesn't beat?",
    answer: "An artichoke",
    hint: "It's a vegetable.",
  },
  {
    id: 24,
    displayOrder: 24,
    difficulty: "sherlock",
    question:
      "A man rides into town on Friday, stays three days, and leaves on Friday. How?",
    answer: "His horse's name is Friday",
    hint: "The word 'Friday' can be more than a day.",
  },
  {
    id: 25,
    displayOrder: 25,
    difficulty: "medium",
    question:
      "If you are running a race and pass the person in 2nd place, what place are you in?",
    answer: "2nd place",
    hint: "Think about what passing the person in 2nd place means.",
  },
  {
    id: 26,
    displayOrder: 26,
    difficulty: "easy",
    question: "What has keys but can't open locks?",
    answer: "A piano (or keyboard)",
    hint: "Musical instrument.",
  },
  {
    id: 27,
    displayOrder: 27,
    difficulty: "easy",
    question: "What is so fragile that just saying its name breaks it?",
    answer: "Silence",
    hint: null,
  },
  {
    id: 28,
    displayOrder: 28,
    difficulty: "hard",
    question: "I have no life, but I can die. What am I?",
    answer: "A battery",
    hint: "I provide power.",
  },
  {
    id: 29,
    displayOrder: 29,
    difficulty: "medium",
    question: "What has an ear but cannot hear?",
    answer: "A cornfield (or corn on the cob)",
    hint: "A plant.",
  },
  {
    id: 30,
    displayOrder: 30,
    difficulty: "easy",
    question:
      "A man is walking in the rain without an umbrella or a hood. His clothes are soaked, but not a single hair on his head is wet. How is this possible?",
    answer: "He is bald",
    hint: "Think about what is *not* on his head.",
  },
  {
    id: 31,
    displayOrder: 31,
    difficulty: "easy",
    question: "What has a ring but no finger?",
    answer: "A telephone",
    hint: "It rings.",
  },
  {
    id: 32,
    displayOrder: 32,
    difficulty: "medium",
    question: "What runs around the whole yard without moving?",
    answer: "A fence",
    hint: "It marks a boundary.",
  },
  {
    id: 33,
    displayOrder: 33,
    difficulty: "easy",
    question: "What has four legs, but can't walk?",
    answer: "A table",
    hint: "Used for dining.",
  },
  {
    id: 34,
    displayOrder: 34,
    difficulty: "hard",
    question:
      "I am tall when I am young, and I am short when I am old. What am I?",
    answer: "A candle",
    hint: "I get consumed as I work.",
  },
  {
    id: 35,
    displayOrder: 35,
    difficulty: "medium",
    question: "What gets wetter the more it dries?",
    answer: "A towel",
    hint: "You use it after a shower.",
  },
  {
    id: 36,
    displayOrder: 36,
    difficulty: "hard",
    question: "The more you take, the more you leave behind. What are they?",
    answer: "Footsteps",
    hint: "You make them when you walk.",
  },
  {
    id: 37,
    displayOrder: 37,
    difficulty: "medium",
    question:
      "What runs but never walks, has a mouth but never talks, has a bed but never sleeps?",
    answer: "A river",
    hint: "A body of water.",
  },
  {
    id: 38,
    displayOrder: 38,
    difficulty: "hard",
    question: "What can go up a chimney down, but can't go down a chimney up?",
    answer: "An umbrella",
    hint: "It changes shape when used.",
  },
  {
    id: 39,
    displayOrder: 39,
    difficulty: "sherlock",
    question:
      "You come across a fork in the road. To your left is Truth-Town, where everyone tells the truth, and to your right is Liar-Town, where everyone lies. You need to go to Truth-Town, but you don't know which way it is. There is a resident from one of the villages at the fork. You can ask only one question. What should you ask?",
    answer:
      "Ask: 'Which direction do you live in?' Both truth-tellers and liars will point toward Truth-Town.",
    hint: "Ask a question where lying and truth-telling give the same result.",
    image: "39",
  },
  {
    id: 40,
    displayOrder: 40,
    difficulty: "medium",
    question: "I can fill a room, but I take up no space. What am I?",
    answer: "Light",
    hint: "The opposite of darkness.",
  },
  {
    id: 41,
    displayOrder: 41,
    difficulty: "hard",
    question: "What begins with T, ends with T, and has T in it?",
    answer: "Teapot",
    hint: "You use me to serve tea.",
  },
  {
    id: 42,
    displayOrder: 42,
    difficulty: "sherlock",
    question:
      "Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don't know if Anne is married. Is a married person looking at an unmarried person?",
    answer:
      "Yes. If Anne is married, she looks at unmarried George. If Anne is unmarried, married Jack looks at her.",
    hint: "Consider both possibilities for Anne.",
  },
  {
    id: 43,
    displayOrder: 43,
    difficulty: "medium",
    question:
      "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?",
    answer: "An echo",
    hint: "You hear me when you shout.",
  },
  {
    id: 44,
    displayOrder: 44,
    difficulty: "medium",
    question:
      "I have no life, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    answer: "Fire",
    hint: "Used for cooking or warmth.",
  },
  {
    id: 45,
    displayOrder: 45,
    difficulty: "medium",
    question: "What is white when it is dirty, and black when it is clean?",
    answer: "A blackboard",
    hint: "Used in a classroom.",
  },
  {
    id: 46,
    displayOrder: 46,
    difficulty: "easy",
    question:
      "What five-letter word becomes shorter when you add two letters to it?",
    answer: "Short (becomes 'shorter')",
    hint: "Think about the spelling of the word.",
  },
  {
    id: 47,
    displayOrder: 47,
    difficulty: "medium",
    question: "What goes up and down but doesn't move?",
    answer: "Stairs Or Ladder",
    hint: "You use me to change floors.",
  },
  {
    id: 48,
    displayOrder: 48,
    difficulty: "hard",
    question:
      "A man is washing a window on a 25 story building. He jumps from the window but doesn't get hurt. How?",
    answer:
      "He was cleaning the window from the outside, and jumps inside the apartment",
    hint: "Think which side of the window he's cleaning",
  },
  {
    id: 49,
    displayOrder: 49,
    difficulty: "easy",
    question:
      "I am an ancient invention that allows people to see through walls. What am I?",
    answer: "A window",
    hint: "It lets in light.",
  },
  {
    id: 50,
    displayOrder: 50,
    difficulty: "medium",
    question:
      "Two fathers and two sons are sitting on a bench, yet there are only three people sitting. How?",
    answer: "They are a grandfather, a father, and a son.",
    hint: "One person is both a father and a son.",
  },

  {
    id: 51,
    displayOrder: 51,
    difficulty: "easy",
    question: "What can you catch, but not throw?",
    answer: "A cold",
    hint: "A sickness.",
  },
  {
    id: 52,
    displayOrder: 52,
    difficulty: "medium",
    question: "What has a spine but no bones?",
    answer: "A book",
    hint: "You read me.",
  },
  {
    id: 53,
    displayOrder: 53,
    difficulty: "hard",
    question:
      "I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?",
    answer: "A key",
    hint: "Used in a lock.",
  },
  {
    id: 54,
    displayOrder: 54,
    difficulty: "easy",
    question: "What can travel around the world while staying in the corner?",
    answer: "A stamp",
    hint: "Used for letters.",
  },
  {
    id: 55,
    displayOrder: 55,
    difficulty: "medium",
    question:
      "What begins with 'e', ends with 'e', and contains only one letter?",
    answer: "An envelope",
    hint: "Used to send mail.",
  },
  {
    id: 56,
    displayOrder: 56,
    difficulty: "hard",
    question: "What has an ear, but no body?",
    answer: "A jug",
    hint: "It holds liquid and has a handle.",
  },
  {
    id: 57,
    displayOrder: 57,
    difficulty: "easy",
    question:
      "What is the only word in the dictionary that is always spelled wrong?",
    answer: "Wrong",
    hint: null,
  },
  {
    id: 58,
    displayOrder: 58,
    difficulty: "medium",
    question: "What has many needles but doesn't sew?",
    answer: "A pine tree",
    hint: "It grows in the forest.",
  },
  {
    id: 59,
    displayOrder: 59,
    difficulty: "hard",
    question:
      "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?",
    answer: "He's playing Monopoly",
    hint: "This isn't about real life transportation.",
  },
  {
    id: 60,
    displayOrder: 60,
    difficulty: "sherlock",
    question:
      "You have a 5-liter and a 3-liter bowl, and have access to plenty of water in a pond. How would you measure exactly 4 liters?",
    answer:
      "Fill 5L → pour to 3L (2L left). Empty 3L, pour 2L into it. Fill 5L again → pour to 3L (4L left in 5L bowl).",
    hint: "Use the 5L bowl as your measuring tool. Think step by step.",
  },
  {
    id: 61,
    displayOrder: 61,
    difficulty: "sherlock",
    question:
      "There is a lightbulb inside a closet. The door is closed, and you cannot see if the light is on or off through the door. However, you know the light is off to start. Outside of the closet, there are three light switches. One of the door light switches controls the lightbulb in the closet. You can flip the switches however you want, but once you open the door, you can no longer touch the switches. How do you figure out without a doubt which of the three light switches controls the light?",
    answer:
      "Turn switch 1 ON for 5 minutes, turn OFF. Turn switch 2 ON. Open door. If light ON = switch 2. If OFF but warm = switch 1. If OFF and cold = switch 3.",
    hint: "A hot bulb tells you something even when it's off.",
    image: "61",
  },
  {
    id: 62,
    displayOrder: 62,
    difficulty: "medium",
    question: "What kind of room has no doors or windows?",
    answer: "A mushroom",
    hint: "It is a fungus.",
  },
  {
    id: 63,
    displayOrder: 63,
    difficulty: "hard",
    question:
      "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?",
    answer: "Your shadow",
    hint: "I disappear in the dark.",
  },
  {
    id: 64,
    displayOrder: 64,
    difficulty: "easy",
    question:
      "How can you write down eight eights so that they add up to one thousand?",
    answer: "888 + 88 + 8 + 8 + 8 = 1000.",
    hint: "Different ways of adding 8s by combining them as groups",
  },
  {
    id: 65,
    displayOrder: 65,
    difficulty: "medium",
    question: "What can you keep after giving it to someone?",
    answer: "Your word (a promise)",
    hint: "It's not a physical object.",
  },
  {
    id: 66,
    displayOrder: 66,
    difficulty: "hard",
    question: "What is it that no one wants, but no one wants to lose?",
    answer: "A lawsuit",
    hint: "A legal dispute.",
  },
  {
    id: 67,
    displayOrder: 67,
    difficulty: "hard",
    question:
      "A baseball and a bat cost $110. If the bat costs $100 more than the ball, how much does the ball cost?",
    answer: "$5 for the ball, $105 for the bat",
    hint: "Think in terms of - what if ball price is $0 to start with?",
  },
  {
    id: 68,
    displayOrder: 68,
    difficulty: "easy",
    question:
      "An old man wanted to leave all of his money to one of his three sons, but he didn't know which one he should give it to. He gave each of them a few coins and told them to buy something that would be able to fill their living room. The first man bought straw, but there was not enough to fill the room. The second bought some sticks, but they still did not fill the room. The third man bought two things that filled the room, so he obtained his father's fortune. What were the two things that the man bought?",
    answer:
      "The wise son bought a candle and a box of matches. After lighting the candle, the light filled the entire room.",
    hint: null,
  },
  {
    id: 69,
    displayOrder: 69,
    difficulty: "hard",
    question:
      "Two men are in a desert. One is dead. The alive man has his backpack open, the dead man's is closed. What is in the dead man's backpack?",
    answer: "A parachute",
    hint: "They were in the air.",
  },
  {
    id: 70,
    displayOrder: 70,
    difficulty: "easy",
    question: "What is the best way to get out of a locked closet?",
    answer: "Stop imagining (or stop thinking about it)",
    hint: "A classic trick question.",
  },
  {
    id: 71,
    displayOrder: 71,
    difficulty: "easy",
    question: "What word contains dozens of letters?",
    answer: "Mailbox (or Postbox, or dozen)",
    hint: "Think about how letters are used.",
  },
  {
    id: 72,
    displayOrder: 72,
    difficulty: "medium",
    question:
      "I have roots that nobody sees. I am taller than trees. Up I go, and yet never grow. What am I?",
    answer: "A mountain",
    hint: "A large landform.",
  },

  {
    id: 73,
    displayOrder: 73,
    difficulty: "easy",
    question: "What has four fingers and a thumb, but is not alive?",
    answer: "A glove",
    hint: "You wear me on your hand.",
  },

  {
    id: 74,
    displayOrder: 74,
    difficulty: "hard",
    question:
      "I am something people love or hate. I change people's appearances and thoughts. If a person takes care of themselves I will go up even higher. To some people, I will fool them. To others, I am a mystery. Some people might want to try and hide me but I will show. No matter how hard people try I will Never go down. What am I?",
    answer: "Age",
    hint: "I constantly increase.",
  },

  {
    id: 75,
    displayOrder: 75,
    difficulty: "hard",
    question:
      "A woman marries ten different men in her life, but was never divorced, widowed, or a polygamist. How?",
    answer:
      "She was a Justice of the Peace (or clergyman, etc.) who married them to others.",
    hint: "Think about the *role* she plays in a marriage ceremony.",
  },

  {
    id: 76,
    displayOrder: 76,
    difficulty: "easy",
    question: "What is it that given one, you'll have either two or none?",
    answer: "A choice",
    hint: "It involves decision.",
  },
  {
    id: 77,
    displayOrder: 77,
    difficulty: "medium",
    question:
      "What is shorter than the rest, but when you're satisfied, you bring it up.",
    answer: "Your thumb",
    hint: "A body part for a common gesture.",
  },

  {
    id: 78,
    displayOrder: 78,
    difficulty: "medium",
    question: "What can you bury, but not in the earth?",
    answer: "Grudges",
    hint: "An emotional burden.",
  },
  {
    id: 79,
    displayOrder: 79,
    difficulty: "medium",
    question:
      "What is the beginning of eternity, the end of time and space, the beginning of every end, and the end of every place?",
    answer: "The letter 'E'",
    hint: "Look at the spelling of the words.",
  },
  {
    id: 80,
    displayOrder: 80,
    difficulty: "hard",
    question:
      "What is so light that even the world's strongest man couldn't hold it for more than a few minutes?",
    answer: "Breath",
    hint: "It is something you expel.",
  },
  {
    id: 81,
    displayOrder: 81,
    difficulty: "medium",
    question:
      "I fly without wings, I cry without eyes. Whenever I go, darkness flies. What am I?",
    answer: "A cloud",
    hint: "I bring rain.",
  },
  {
    id: 82,
    displayOrder: 82,
    difficulty: "hard",
    question:
      "There are 9 coins, all except one are the same weight, the odd one is heavier than the rest. You must determine which is the odd one out using an old fashioned balance. You may use the balance only twice. Explain how this can be done.",
    hint: "Divide into groups of 3. Use process of elimination.",
    answer:
      "Weigh 3 coins vs 3 coins. The heavier group (or remaining 3) contains the heavy coin. Weigh 1 vs 1 from that group. If balanced, the third is heavy.",
  },
  {
    id: 83,
    displayOrder: 83,
    difficulty: "sherlock",
    question: `Four logicians are imprisoned and given a chance to go free. They are lined up so that Logician 1 sees 2 and 3, Logician 2 sees 3, Logician 3 sees no one, and Logician 4 is separated by a wall and sees no one. Two red hats and two blue hats are placed on their heads. They cannot turn, speak, peek, or touch the hats. If one logician can state their hat color with absolute certainty, all four go free. Can they escape, and who speaks with which color?`,
    answer: `Yes. Logician 2 can deduce their hat color. If Logician 1 sees two hats of the same color on 2 and 3, they would speak. If Logician 1 stays silent, it means Logicians 2 and 3 have different colors. Seeing Logician 3's hat, Logician 2 can then deduce their own hat color with certainty.`,
    hint: `Pay attention to who can see which hats and use logical deduction based on silence.`,
    image: "83",
  },

  {
    id: 84,
    displayOrder: 84,
    difficulty: "easy",
    question:
      "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "The letter M",
    hint: null,
  },
  {
    id: 85,
    displayOrder: 85,
    difficulty: "sherlock",
    question:
      "There are three identical boxes in front of you, but only one of them has a prize inside. Each box is labeled with a statement, but only one of the statements is true.\n\nBox 1 says: Prize is in this box.\nBox 2 says: Prize is not in this box.\nBox 3 says: Prize is not in Box 1.\n\nCan you identify which box has the prize?",
    answer: "The prize is in Box 2. And the statement on Box 3 is right",
    hint: "The central clue is that **only one** of the three statements on the boxes is true. Use this rule to test each box's statement and eliminate the cases that result in a contradiction (i.e., where two statements end up being true).",
    image: "85",
  },

  {
    id: 86,
    displayOrder: 86,
    difficulty: "easy",
    question:
      "Five apples are in a basket. How do you divide them among five girls so that each girl gets an apple, but one apple remains in the basket?",
    hint: null,
    answer: "Give the fifth girl her apple in the basket.",
  },

  {
    id: 87,
    displayOrder: 87,
    difficulty: "hard",
    question:
      "A hotel owner needs to be able to pay a guest any exact amount of gold coins from 1 to 31 grams (representing the day of the month they visit). To minimize the number of coins he carries, he has five gold coins of different weights. What are the weights of these five coins?",
    hint: "Think about how computers count, or how you can combine these coins to make the number 31.",
    answer:
      "16, 8, 4, 2, and 1 grams. These weights (powers of two) allow you to create any combination up to 31 by using a binary system. For example, 14 grams = 8 + 4 + 2, and 31 grams = 16 + 8 + 4 + 2 + 1.",
    image: "87",
  },

  {
    id: 88,
    displayOrder: 88,
    difficulty: "medium",
    question:
      "To enter a secured building, a guard asks you a number and you must reply with the correct answer. The guard asks '12', and the guest replies '6'. The guard asks '6', and the guest replies '3'. The guard asks you '10', and you reply '5'. The guard does not allow you to enter. Why was your answer wrong, and what should you have said?",
    hint: "The rule is not mathematical. Count something visible about the number.",
    answer:
      "The correct answer should have been 3. The rule is to reply with the number of letters in the word form of the number the guard says. '12' (Twelve) has 6 letters. '6' (Six) has 3 letters. '10' (Ten) has 3 letters.",
  },
  {
    id: 89,
    displayOrder: 89,
    difficulty: "easy",
    question: "What weighs more, a pound of feathers or a pound of stones?",
    answer: "The same. They both weigh a pound!",
    hint: null,
  },
  {
    id: 90,
    difficulty: "easy",
    displayOrder: 90,
    question:
      "Sometimes I am born in silence, Other times, no. I am unseen, But I make my presence known. In time, I fade without a trace. I harm no one, but I am unpopular with all. What am I?",
    hint: "Related to indigestion",
    answer: "A fart",
  },
  {
    id: 91,
    displayOrder: 91,
    difficulty: "medium",
    question:
      "In an archery competition, a contestant must score exactly 100 points. The available point values on the target are 16, 17, 23, 24, 39, and 40. There is no limit to the number of arrows you can shoot. Which combination of shots results in a final score of 100?",
    hint: "You will need a total of six arrows, and you should use only two of the available point values.",
    answer:
      "Two arrows hitting 16 points and four arrows hitting 17 points. (2 * 16) + (4 * 17) = 32 + 68 = 100.",
    image: "89",
  },
  {
    id: 92,
    displayOrder: 92,
    difficulty: "hard",
    question:
      "You have snooker balls reading 1, 3, 5, 7, 9, 11, 13 and 15. Which 3 balls would you pick so their sum becomes 30?",
    hint: "One ball can be made an even number",
    answer: "11 + 13 + 6 (turn the 9 ball upside down to make 6)",
    image: "86",
  },
  {
    id: 93,
    displayOrder: 93,
    difficulty: "hard",
    question:
      "What is greater than God and more evil than the devil? The poor have it, the rich need it, and if you eat it you'll die. What is it?",
    answer: "Nothing",
    hint: "It is the absence of something.",
  },
  {
    id: 94,
    displayOrder: 94,
    difficulty: "easy",
    question:
      "If you drop me, I'm sure to crack. Give me a smile, and I'll always smile back. What am I?",
    answer: "A mirror",
    hint: "Reflection",
  },
  {
    id: 95,
    displayOrder: 95,
    difficulty: "easy",
    question: "What two things can you never eat for breakfast?",
    answer: "Lunch and dinner.",
    hint: null,
  },
  {
    id: 96,
    difficulty: "easy",
    displayOrder: 96,
    question:
      "The first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire word signifies a great woman. What is the word?",
    hint: "Actor",
    answer: "Heroine",
  },
  {
    id: 97,
    displayOrder: 97,
    difficulty: "medium",
    question:
      "There are two bodies on the floor. They are surrounded by water and broken glass. How did they die?",
    hint: "They are not human bodies",
    answer:
      "The bodies were goldfish because their fishbowl got knocked over onto the floor and broke.",
  },
  {
    id: 98,
    displayOrder: 98,
    difficulty: "hard",
    question:
      "Four people need to cross a dilapidated bridge at night. They have only one torch, and the bridge can only hold two people at a time. The crossing times are 1 minute, 2 minutes, 5 minutes, and 10 minutes. When two people cross together, they must move at the pace of the slower person. How quickly can all four people get across?",
    hint: "The fastest way requires the two slowest people (5 and 10) to cross together, and the fastest person (1) must act as the primary torch courier.",
    answer:
      "17 minutes. The key is for the two slowest people (5 and 10) to cross together to save time. \n\n**Steps:**\n1. (1 and 2) cross together (takes 2 min).\n2. (1) returns with the torch (takes 1 min).\n3. (10 and 5) cross together (takes 10 min).\n4. (2) returns with the torch (takes 2 min).\n5. (1 and 2) cross together (takes 2 min).\n\nTotal Time: 2 + 1 + 10 + 2 + 2 = 17 minutes.",
    image: "98",
  },

  {
    id: 99,
    displayOrder: 99,
    difficulty: "medium",
    question:
      "A farmer must cross a river and take with him a wolf, a sheep, and a head of cabbage. He has a small boat that can only carry himself and one other item (either the wolf, the sheep, or the cabbage) at a time. If left alone, the wolf will eat the sheep, and the sheep will eat the cabbage. How can the farmer get all three across the river safely?",
    hint: "The solution requires seven total crossings, and one item must temporarily be brought back across the river.",
    answer:
      "The key is to never leave the wolf and sheep, or the sheep and cabbage, unsupervised. \n\n**Steps:**\n1. Take the **Sheep** across.\n2. Return alone.\n3. Take the **Wolf** across.\n4. Bring the **Sheep** back.\n5. Take the **Cabbage** across.\n6. Return alone.\n7. Take the **Sheep** across.\n\nAll items are safely on the other side.",
  },

  {
    id: 100,
    displayOrder: 100,
    difficulty: "medium",
    question:
      "There is a dead man in the middle of a field, nothing is around him and there are no footprints of any sort. There is an unopened package next to him. How did he die?",
    hint: "As he approached the field he knew he was going to die.",
    answer: "Failed Parachute",
  },
];
