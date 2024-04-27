import cipher from "../Images/cipherchase.avif";
import typesprint from "../Images/typesprint.webp";
import logic from "../Images/logicleague.avif";
import codequest from "../Images/codequest.avif";
import quiz from "../Images/quiz.avif";
import hunt from "../Images/huntthehint.avif";
import ipl from "../Images/ipl.avif";
import freefire from "../Images/freefire.jpg";
import bgmi from "../Images/bgmi.avif";

const eventsData = [
  {
    id: "BLIND-CODING",

    title: "BLIND CODING",
    entry_fee: "Rs. 40/- per head",
    rules: [
      "Individual participation only.",
      "Participants must code without syntax highlighting or error detection tools.",
      "Advance to Round 2 by successfully passing Round 1's compilation check.",
      "Respected guidelines will be  provided by coordinators.",
    ],
    description:
      "Enter the realm of Blind Coding, where true coding prowess is put to the test! Participants will face a series of coding questions and must write efficient code blindly, without the aid of syntax highlighting or error detection tools. After submitting their code, participants will check the compilation results to proceed to Round 2. Only those who successfully pass Round 1 will advance to face even more challenging coding tasks in Round 2, where they will compete for top honors and prizes. Get ready to code with confidence and precision in this ultimate test of skill and ingenuity!",
    img: cipher,
    cash_prize: "Rs.300/-",

    team: "Individual",
    type: "tech",
    registration_link: "https://forms.gle/aQErx8h6kzc32FUG6",
    learn_more:
      "https://docs.google.com/document/d/1E-Z2GXzysU1Vhs09iim38awDCXa-R6EX/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  {
    id: "ONE-PIECE",

    title: "ONE PIECE-Code Hunt",
    entry_fee: "Rs  30 per head",
    rules: [
      "Teams must consist of 3-4 members..",
      "No electronic gadgets allowed during the contest.",
      "Follow instructions provided by coordinators strictly",
      "Respect the designated boundaries and rules of the event area.",
    ],
    description:
      "Get ready for an exhilarating adventure as you and your teammate dive into the ultimate treasure hunt challenge! Race against time to uncover hidden clues scattered throughout the designated area. Each clue will lead you closer to the final code, testing your teamwork, problem-solving skills, and quick thinking. Be prepared to navigate through various challenges and obstacles as you decode the mystery within the given timeframe..",
    cash_prize: "Rs 300",
    team: "3-4 members",
    registration_link: "https://forms.gle/GN7WFJWnQRrDdTxg6",
    type: "tech",
    img: typesprint,
    learn_more:
      "https://docs.google.com/document/d/1JStMHYvnOT1Rpofvu7r_FQa1ih4o2Qh0/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  {
    id: "Prompt-Palooza-COMPETITIVE-PROMPTING",
    title: "Prompt Palooza-Competitive Prompting",

    entry_fee: "40/- per head",
    description:
      "Welcome to Competitive Prompting, where observation meets intuition in an exhilarating guessing game! Participants will be presented with a series of images, each hiding a prompt that they must decipher. From abstract shapes to intricate patterns, participants must rely on their keen eye and quick thinking to guess the correct prompt associated with each image. With each correct guess, participants earn points, but beware - incorrect guesses could cost you valuable points. Prepare to test your perception and mental agility in this captivating contest of wit and imagination!.",
    rules: [
      "Individual participation only",
      "Guesses must be submitted in the designated format provided by coordinators.",
      "Respect guidelines provided by coordinators.",
    ],
    cash_prize: "300/-",
    registration_link: "https://forms.gle/ZCxpJSwnqkdai6dW9",
    img: logic,
    team: "Individual",
    type: "tech",
    learn_more:
      "https://docs.google.com/document/d/1QYVjYxgSD8tzHbrO2VBhJLSnFnpDs08F/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  {
    id: "Code-Carnival-Code-Marathon",
    title: "Code Carnival-Code Marathon",

    entry_fee: "Single- Rs 40 || Duo- Rs  60 ",
    type: "tech",
    description:
      "Step right up and test your coding prowess at the Code Carnival! This thrilling contest offers a blend of quiz questions, debugging challenges, and output finding exercises that will push your programming skills to the limit. Whether you're a seasoned coder or just starting your journey, prepare for an exhilarating experience as you tackle a variety of coding puzzles and showcase your ability to think on your feet. From unraveling complex algorithms to deciphering tricky syntax errors, the Code Carnival promises non-stop excitement and learning for all participants.",

    rules: [
      "Team participation: 1-2 participants.",
      "Respect guidelines provided by coordinators.",
      "Solutions must be submitted briefly.",  
    ],
    cash_prize: "1st Place: Rs.300 || 2nd Place: Rs.200",
    img: codequest,
    team: "1-2 members",
    registration_link: "https://forms.gle/PGhxsut7MX1LBrtF7",
    learn_more:
      "https://docs.google.com/document/d/10mmvep5TNWKOi2WiJmkkyM2prqYJOD98/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  
  {
    id: "Spooky-story-slam",
    title: "Spooky story slam",
    type: "Non-Tech",
    entry_fee: "₹29/-",
    rules: [
      "Stick to the theme: ghosts, monsters, and things that go bump in the night.",
      "Each storyteller gets one chance to spook the crowd—make it count!",
      "Creativity is the key.",
      "Themes are provided.",
      "The stories must be related with their theme.",
      "The task should be completed within the given  time.",
    ],
    description:
      "Unleash your inner storyteller and share the tale that will send shivers down spines! The Spooky Story Slam is a chilling competition where participants tell their original, short horror stories for a chance to win frightful fame and fabulous prizes.",
    team: "Individual",
    img: quiz,
    cash_prize: "₹80/-",
    registration_link: "https://forms.gle/RxboKuhsJ22JCXmq9",
    learn_more:
      "https://docs.google.com/document/d/1A0OHnHkv_Zr8T7h6iO32z7yyhCzAvYBq/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  
  {
    id: "Mystery-Box",
    title: "Mystery Box",
    type: "Non-Tech",
    entry_fee: "₹29/-",

    rules: [
      "The task should be completed within the given time.",
      "Only single hand is allowed to pick item from Mystery-Box.",
      "Other players should be silent while playing.",
      "Have fun and embrace the thrill of the unknown item.",
    ],
    description: `Enter the realm of fear with the Mystery Box Horror Game. Players take turns delving into the darkness, describing chilling sensations to guess the hidden items. Incorrect guesses unleash terrifying consequences. Can you brave the suspense and emerge victorious, or will you fall prey to the horrors within?`,
    cash_prize: "Suprise Gift",
    team: "Individual",
    img: hunt,
    registration_link: "https://forms.gle/mHUv9ntjnkAzuR9y5",
    learn_more:
      "https://docs.google.com/document/d/1sxTyJqatsJVjqpm7uLQAh4nWA_3NSDoV/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  
  {
    id: "Escape-the-crypt",
    type: "Non-Tech",
    title: "Escape the Crypt",
    entry_fee: "₹49/-",
    description: `Depths of Dread is a spine-chilling horror-themed game where players find themselves trapped in an ancient crypt filled with dark secrets and malevolent forces. As they navigate the eerie corridors and dimly lit chambers, they must solve cryptic puzzles, evade sinister entities, and uncover the truth behind the crypt's sinister history to escape its claustrophobic grasp. With every step, the tension mounts, and players must summon all their courage and wits to survive the nightmarish depths of the crypt and emerge victorious—if they can.`,
    rules: [
      "Explore the crypt, solve puzzles, and overcome challenges to escape.",
      "Manage resources wisely and beware of time constraints.",
      "Cooperate with others (optional) to increase chances of success.",
      "Victory is achieved by escaping the crypt within the allotted time.",
      "Watch out for risks and consequences along the way.",
    
    ],
    img: ipl,
    team: "Team of 2 Participants at max",
    cash_prize: "₹120/-",
    registration_link: "https://forms.gle/NpzimcZyAzyTdQ5y7",
    learn_more:
    "https://docs.google.com/document/d/1XM2bLDMazFNeqnkgv5UH9IZVH8LTqkdq/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  
  {
    id: "Haunted-Dart",
    type: "Non-Tech",
    title: "Haunted Dart",
    entry_fee: "₹29/-",
    rules: [
      "Only throw the haunted darts with your non-dominant hand to intensify the ghostly experience.",
      "Only 3 chances are given.",
      "Person who burst out balloons will be disqualified.",
      "The task should be completed within the given  time.",
      "Aim true for terrifyingly high scores.",
    ],
    description:
      "Welcome to the spine-chilling world of our Haunted Dart Event! Prepare to test your aim amidst a backdrop of eerie shadows and ghostly whispers. Dare to step up, take aim, and face the haunted targets lurking in the darkness. Do you have what it takes to conquer the ghostly challenge?",
    cash_prize: "Surprise Gift",
    img: freefire,
    team: "Individual",
    registration_link: "https://forms.gle/pRM6eTByKyhymoTv5",
    learn_more:
      "https://docs.google.com/document/d/13VLE6JQCkiTLQVC-5xhUrPQK6umNnhZX/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
  {
    id: "Haunted-portrait-challenge",
    type: "Non-Tech",
    title: "Haunted portrait challenge",
    entry_fee: "₹29/-",
    rules: [
      "No speaking allowed while participating in the haunted portrait challenge.",
      "The task should be completed within the given  time.",
      "Spooky prompt will be provided.",
      "Required things are given.",
      "The art must match with given prompt.",
    ],
    description:
      "Welcome to the Haunted Portrait Challenge! Get ready to unleash your creativity and face your fears as we delve into the realm of the supernatural. In this thrilling event, participants will be provided with paper, pencils, and a series of spooky prompts, ranging from haunted houses to ghosts and monsters. Your task? To bring these eerie visions to life on paper within a set time limit. Are you ready to embark on this hair-raising artistic journey?",
    cash_prize: "Surprise Gift",
    img: bgmi,
    team: "Individual",
    registration_link: "https://forms.gle/XDaM6LF8m4w79FmN9",
    learn_more:
      "https://docs.google.com/document/d/1AJEVMq5KW0apmM7lQ58YHRjGQDeHGEj7/edit?usp=sharing&ouid=110991151014579958941&rtpof=true&sd=true",
  },
];

export default eventsData;
