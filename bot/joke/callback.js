var mongodb = require('mongodb');
var mongoC = mongodb.MongoClient;

module.exports = function(callback, slackData) {

  // Mongo db data - Start
  var dbName = 'heroku_mzb1clx9',
      dbUser = 'getJoke',
      dbUserPassword = 'Testas123',
      dbUrl = 'ds037005.mongolab.com:37005';
  // Mongo db data - End

  mongoC.connect('mongodb://' + dbUser + ':' + dbUserPassword + '@' + dbUrl + '/' + dbName, function (err, db) {
      var collection = db.collection('jokes');
      var randomJokeId = Math.floor((Math.random() * 371) + 1);

      //
      var jokesdb = [
  {
    "id": 0,
    "joke": "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.\n",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 1,
    "joke": "When I get naked in the bathroom, the shower usually gets turned on.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 2,
    "joke": "A recent study has found that women who carry a little extra weight live longer than the men who mention it.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 3,
    "joke": "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 4,
    "joke": "When wearing a bikini, women reveal 90 % of their body... men are so polite they only look at the covered parts.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 5,
    "joke": "I want to die peacefully in my sleep, like my grandfather.. Not screaming and yelling like the passengers in his car.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 6,
    "joke": "I find it ironic that the colors red, white, and blue stand for freedom until they are flashing behind you.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 7,
    "joke": "I think my neighbor is stalking me as she's been googling my name on her computer. I saw it through my telescope last night.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 8,
    "joke": "Just read that 4,153,237 people got married last year, not to cause any trouble but shouldn't that be an even number?",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 9,
    "joke": "I changed my password to \"incorrect\". So whenever I forget what it is the computer will say \"Your password is incorrect\".",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 10,
    "joke": "Artificial intelligence is no match for natural stupidity.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 11,
    "joke": "Life is all about perspective. The sinking of the Titanic was a miracle to the lobsters in the ship's kitchen.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 12,
    "joke": "Isn't it great to live in the 21st century? Where deleting history has become more important than making it.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 13,
    "joke": "Politicians and diapers have one thing in common. They should both be changed regularly, and for the same reason.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 14,
    "joke": "Strong people don't put others down. They lift them up and slam them on the ground for maximum damage.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 15,
    "joke": "That awkward moment when you leave a store without buying anything and all you can think is \"act natural, you're innocent\".",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 16,
    "joke": "You know you're ugly when it comes to a group picture and they hand you the camera.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 17,
    "joke": "I hate when I am about to hug someone really sexy and my face hits the mirror.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 18,
    "joke": "You're not fat, you're just... easier to see.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 19,
    "joke": "My therapist says I have a preoccupation with vengeance. We'll see about that.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 20,
    "joke": "Is your ass jealous of the amount of shit that just came out of your mouth?",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 21,
    "joke": "If i had a dollar for every girl that found me unattractive, they would eventually find me attractive.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 22,
    "joke": "I named my hard drive \"dat ass\" so once a month my computer asks if I want to 'back dat ass up'.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 23,
    "joke": "Yo're so ugly, when your mom dropped you off at school she got a fine for littering.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 24,
    "joke": "Apparently I snore so loudly that it scares everyone in the car I'm driving.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 25,
    "joke": "Money talks ...but all mine ever says is good-bye.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 26,
    "joke": "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 27,
    "joke": "There are few things I enjoy more than picking an argument with my girlfriend when she has the hiccups.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 28,
    "joke": "Wifi went down during family dinner tonight. One kid started talking and I didn't know who he was.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 29,
    "joke": "My girlfriends dad asked me what I do. Apparently, \"your daughter\" wasn't the right answer.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 30,
    "joke": "There are three kinds of people: Those who can count and those who can't.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 31,
    "joke": "Your birth certificate is an apology letter from the condom factory.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 32,
    "joke": "When I call a family meeting I turn off the house wifi and wait for them all to come running.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 33,
    "joke": "A clean house is the sign of a broken computer.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 34,
    "joke": "A conclusion is the part where you got tired of thinking.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 35,
    "joke": "If you see me smiling it's because I'm thinking of doing something evil or naughty. If you see me laughing it's because I've already done it.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 36,
    "joke": "I'm looking at the serving size of Laughing Cow cheese and I see why the cow is laughing.",
    "dateLastRead": "2015-12-31T03:36:21.738Z"
  },
  {
    "id": 37,
    "joke": "Your family tree must be a cactus because everybody on it is a prick.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 38,
    "joke": "Relationships are a lot like algebra.  Have you ever looked at your X and wondered Y?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 39,
    "joke": "My ex wrote to me: Can you delete my number? I responded: Who is this?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 40,
    "joke": "I hate people who use big words just to make themselves look perspicacious.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 41,
    "joke": "I used to think I was indecisive, but now I'm not too sure.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 42,
    "joke": "I sometimes watch birds and wonder \"If I could fly who would I shit on?\"",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 43,
    "joke": "If you think nobody cares whether you're alive, try missing a couple of payments.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 44,
    "joke": "Before having a kid the most important thing to ask yourself is \"Am I ready to watch the exact same cartoon on repeat for the next 4 years?\"",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 45,
    "joke": "Wife: \"I look fat. Can you give me a compliment?\" Husband: \"You have perfect eyesight.\"",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 46,
    "joke": "Never tell your problems to anyone...20% don't care and the other 80% are glad you have them...",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 47,
    "joke": "Waitress: 'Do u have any questions about the menu?' Me: 'What kind of font is this?'",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 48,
    "joke": "My wife and I were happy for twenty years. Then we met.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 49,
    "joke": "You're the reason the gene pool needs a lifeguard.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 50,
    "joke": "I started out with nothing, and I still have most of it.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 51,
    "joke": "Why is there so much blood in my alcohol system?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 52,
    "joke": "The difference between \"Girlfriend\" and \"Girl Friend\" is that little space in between we call the \"Friend Zone\".",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 53,
    "joke": "When an employment application asks who is to be notified in case of emergency, I always write, \"A very good doctor\".",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 54,
    "joke": "What's six inches long, two inches wide, and drives women wild? Money.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 55,
    "joke": "Love is telling someone to go to hell and worrying about them getting there safely.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 56,
    "joke": "If I ever need a heart transplant, I'd want my ex's. It's never been used.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 57,
    "joke": "Is google a woman? Because it won't let you finish your sentence without coming up with other suggestions.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 58,
    "joke": "Isn't it weird how when a cop drives by you feel paranoid instead of protected.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 59,
    "joke": "My favorite mythical creature? The honest politician.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 60,
    "joke": "I would give my dad what he really wants on Father's Day, but I can't afford to move out yet.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 61,
    "joke": "I like birthdays, but I think too many can kill you.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 62,
    "joke": "My wife is so negative. I remembered the car seat, the stroller, AND the diaper bag. Yet all she can talk about is how I forgot the baby.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 63,
    "joke": "Children in the back seats of cars cause accidents, but accidents in the back seats of cars cause children.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 64,
    "joke": "If you can smile when things go wrong, you have someone in mind to blame.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 65,
    "joke": "What's worse than waking up at a party and finding a penis drawn on your face? Finding out it was traced.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 66,
    "joke": "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 67,
    "joke": "If you're not supposed to eat at night, why is there a light bulb in the refrigerator?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 68,
    "joke": "Love is like peeing yourself – everyone can see but only you feel the warmth.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 69,
    "joke": "Going to church doesn't make you a Christian any more than standing in a garage makes you a car.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 70,
    "joke": "Like a flat tire.......how I'm rolling this morning.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 71,
    "joke": "What lies at the bottom of the ocean and twitches? A nervous wreck.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 72,
    "joke": "What's a nice ghoul like you doing in a crypt like this?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 73,
    "joke": "This must be the 8th castle because I just found my princess.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 74,
    "joke": "\"Could you take a couple steps back. I have a nut allergy.\"",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 75,
    "joke": "You might not be a Bulls fan, but I know you felt it when this D rose.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 76,
    "joke": "Life is like toilet paper, you're either on a roll or taking shit from some asshole.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 77,
    "joke": "Don't you love nature, despite what it did to you?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 78,
    "joke": "Never break someone's heart because they have only one inside...break their bones because they have 206 of them.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 79,
    "joke": "When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 80,
    "joke": "Intelligence is like an underwear. It is important that you have it, but not necessary that you show it off.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 81,
    "joke": "Never laugh at your girlfriends choices... your one of them.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 82,
    "joke": "Childs experience: if a mother is laughing at the fathers jokes, it means they have guests.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 83,
    "joke": "I bought a vacuum cleaner six months ago and so far all it's been doing is gathering dust.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 84,
    "joke": "Thieves had broken into my house and stolen everything except my soap, shower gel, towels and deodorant. Dirty Bastards.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 85,
    "joke": "People say money is not the key to happiness, but I always figured if you had enough money, you can have a key made.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 86,
    "joke": "Success is like pregnancy. Everybody congratulates you but nobody knows how many times you got fucked to achieve it.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 87,
    "joke": "The last airline I flew charged for everything. Except for the bad service. That was free.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 88,
    "joke": "Five Secrets of Successful People:1. Don't 2. Tell 3. Anyone 4. Your 5. Secrets",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 89,
    "joke": "Me: *sneaks out of the house* *drives to another state* *hides in a cave* *quietly opens a bag of chips* My kids: Can we have some?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 90,
    "joke": "Who doesn't eat on Thanksgiving? A turkey because it is always stuffed.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 91,
    "joke": "You must have been born on a highway because that's where most accidents happen.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 92,
    "joke": "How did I escape Iraq? Iran.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 93,
    "joke": "Join the Army, meet interesting people, and kill them.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 94,
    "joke": "I can't believe I got fired from the calendar factory. All I did was take a day off.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 95,
    "joke": "What do you do if a blonde throws a grenade at you? Pull the pin and throw it back. ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 96,
    "joke": "I eat my tacos over a Tortilla. That way when stuff falls out, BOOM, another taco.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 97,
    "joke": "Telling a girl to calm down works about as well as trying to baptize a cat.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 98,
    "joke": "Why is it everything I love is either unhealthy, addicting or has multiple restraining orders against me?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 99,
    "joke": "Nothing is fool proof to a sufficiently talented fool.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 100,
    "joke": "I need to start paying closer attention to stuff. Found out today my wife and I have separate names for the cat.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 101,
    "joke": "Outvoted 1-1 by my wife again.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 102,
    "joke": "I'm emotionally constipated. I haven't given a shit in days.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 103,
    "joke": "The lesson of Halloween is that pretending to be something you're not will lead to a sweet reward.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 104,
    "joke": "Ever stop to think, and forget to start again?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 105,
    "joke": "The best things in life are free *plus shipping and handling*",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 106,
    "joke": "Take my advice — I'm not using it.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 107,
    "joke": "Women might be able to fake orgasms. But men can fake a whole relationship.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 108,
    "joke": "You so ugly when who were born the doctor threw you out the window and the window threw you back.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 109,
    "joke": "A fine is a tax for doing wrong. A tax is a fine for doing well.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 110,
    "joke": "Just changed my Facebook name to ‘No one' so when I see stupid posts I can click like and it will say ‘No one likes this'.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 111,
    "joke": "What's the difference between snowmen and snowladies? Snowballs ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 112,
    "joke": "How do you make holy water? You boil the hell out of it.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 113,
    "joke": "I am a nobody, nobody is perfect, therefore I am perfect.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 114,
    "joke": "Why did the blonde get excited after finishing her puzzle in 6 months? -- The box said 2-4 years!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 115,
    "joke": "What do you call a bear with no teeth? -- A gummy bear!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 116,
    "joke": "I once farted in an elevator, it was wrong on so many levels.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 117,
    "joke": "If con is the opposite of pro, it must mean\nCongress is the opposite of progress?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 118,
    "joke": "I wondered why the frisbee was getting bigger, and then it hit me.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 119,
    "joke": "My mom never saw the irony in calling me a son-of-a-bitch.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 120,
    "joke": "If 4 out of 5 people SUFFER from diarrhea; does that mean that one enjoys it?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 121,
    "joke": "Why did the blonde tip-toe past the medicine cabinet? -- She didn't want to wake up the sleeping pills!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 122,
    "joke": "I used to like my neighbors, until they put a password on their Wi-Fi.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 123,
    "joke": "What's the difference between a smart man and a stupid man? Nothing. They both think they know everything.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 124,
    "joke": "For anyone who think a woman's place is in the kitchen, remember that's where the knives are kept.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 125,
    "joke": "Stalking is when two people go for a long romantic walk together but only one of them knows about it.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 126,
    "joke": "Never argue with a fool, they will lower you to their level, and then beat you with experience.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 127,
    "joke": "What do you call a fat psychic? A four chin teller.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 128,
    "joke": "If practice makes perfect, and nobody's perfect, why practice?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 129,
    "joke": "Doctor: You're overweight.\nPatient: I think I want a second opinion.\nDoctor: You're also ugly.\n",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 130,
    "joke": "Why do farts smell? So deaf people can enjoy them too.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 131,
    "joke": "Light travels faster than sound. This is why some people appear bright until they speak.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 132,
    "joke": "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 133,
    "joke": "How did the blonde die while raking leaves? She fell out of the tree.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 134,
    "joke": "What did the fish say when he swam into the wall? -- \nDamn",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 135,
    "joke": "What's the difference between a porcupine and a Porsche? -- The porcupine has the pricks on the outside.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 136,
    "joke": "Why did the duck go to rehab? Because he was a quack addict!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 137,
    "joke": "The early bird might get the worm, but the second mouse gets the cheese. ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 138,
    "joke": "Why is Christmas just like a day at the office? You do all the work and the fat guy with the suit gets all the credit. ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 139,
    "joke": "What did the ocean say to the beach? Nothing, it just waved.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 140,
    "joke": "Politicians and diapers have one thing in common. They should both be changed regularly, and for the same reason.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 141,
    "joke": "Why can't an idiot dial 911? -- He can't find the 11 on the phone!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 142,
    "joke": "How do you seduce a fat woman? Piece of cake.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 143,
    "joke": "What do you call a sheep with no legs?\nA cloud.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 144,
    "joke": "What do you call a blonde with a brain? A golden retriever. ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 145,
    "joke": "If at first you don't succeed, destroy all evidence that you tried.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 146,
    "joke": "What do you call two fat people having a chat? -- A heavy discussion",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 147,
    "joke": "I say no to alcohol, it just doesn't listen.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 148,
    "joke": "Why did the skeleton go to the party alone? -- He had no body to go with him!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 149,
    "joke": "What happens when you get scared half to death twice?",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 150,
    "joke": "How can you tell when a lawyer is lying? -- \nHis lips are moving. ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 151,
    "joke": "What did the blonde say when she found out she was pregnant? I wonder if it's mine. ",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 152,
    "joke": "I want to die peacefully in my sleep, like my grandfather. Not screaming and yelling like the passengers in his car.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 153,
    "joke": "What do you do if a idiot throws a grenade at you? -- Pull the pin and throw it back at him!",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 154,
    "joke": "Why does the blonde have the biggest boobs in the sixth grade? Because she's 18.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 155,
    "joke": "When a man opens the car door for his wife, you can be sure of one thing, either the car is new or the wife is.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 156,
    "joke": "Did you hear about the guy who lost his left arm and leg in a car crash? -- He's all right now.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 157,
    "joke": "I'm not saying she's fat. But if I had to name 5 of the fattest people I know. She'd be three of them.",
    "dateLastRead": "2015-12-31T03:36:21.739Z"
  },
  {
    "id": 158,
    "joke": "Always remember you're unique, just like everyone else.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 159,
    "joke": "Three blondes walk into a building. You'd think one of them would've seen it...",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 160,
    "joke": "The sole purpose of a child's middle name is so they can tell when they're really in trouble.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 161,
    "joke": "What's the difference between roast beef and pea soup? -- Anyone can roast beef.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 162,
    "joke": "What do you call a cow with no legs? -- Ground beef.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 163,
    "joke": "Q: Why did the blond get fired from the banana plantation?\n\nA: Because she threw out all the bent ones.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 164,
    "joke": "Crime doesn't pay? Does that mean my job is a crime?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 165,
    "joke": "How many divorced men does it take to change a lightbulb? -- Who cares? They never get the house anyway.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 166,
    "joke": "What do you call a deer with no eyes? No eye deer.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 167,
    "joke": "How do you confuse a blonde? Put her in a circle and tell her to go to the corner. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 168,
    "joke": "Why don't cannibals eat clowns? -- Because they taste funny.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 169,
    "joke": "What did the duck say when it bought lipstick? Put it on my bill.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 170,
    "joke": "A sandwich walks into a bar. The barman says: \"Sorry, we don't serve food in here.\"",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 171,
    "joke": "What's 6 inches long, has a head on it and drives women crazy? $100 bill",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 172,
    "joke": "I haven't spoken to my wife for 18 months- I don't like to interrupt her.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 173,
    "joke": "Scientists have discovered a food that diminishes a woman's sex drive by 90%. It's called a wedding cake.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 174,
    "joke": "I pretend to work here, they pretend to pay me.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 175,
    "joke": "He who laughs last thinks slowest.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 176,
    "joke": "Right now I'm having amnesia and deja vu at the same time! I think I've forgotten this before?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 177,
    "joke": "I had a dream I was eating a giant marshmallow, when I woke up my pillow was missing!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 178,
    "joke": "What did the elephant say to the naked man? How do you breathe through something so small?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 179,
    "joke": "Women are like roads. The more curves they have, the more dangerous they are. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 180,
    "joke": "Never iron a four leaf clover. You don't want to press your luck.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 181,
    "joke": "In arguments a woman has the last word. Anything a man says after that is the beginning of a new argument.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 182,
    "joke": "Why are men like parking spaces? The good ones are already taken! ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 183,
    "joke": "What do you call a fish with no eyes? --\nA fsh",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 184,
    "joke": " How did the blonde die drinking milk? The cow fell on her.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 185,
    "joke": "My girlfriend hates when I make jokes about her weight. She needs to lighten up.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 186,
    "joke": "When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 187,
    "joke": "Irish saying - There are only three kinds of men who don't understand women: young men, old men, and middle aged men.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 188,
    "joke": "I bet the butcher $50 that he couldn't reach the meat on the top shelf. He said, \"No, the steaks are too high.\"",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 189,
    "joke": "Have you ever smelled mothballs? How did you get his little legs apart?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 190,
    "joke": "Sex is not the answer. Sex is the question. \"Yes\" is the answer.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 191,
    "joke": "Did you hear what happened to the blonde hockey team? They drowned in spring training.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 192,
    "joke": "I thought I wanted a career, turns out I just wanted paychecks.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 193,
    "joke": "Why did the cookie go to the hospital? -- Because he felt crummy!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 194,
    "joke": "Two snowmen are standing in a field. One says to the other : \"Funny, I smell carrots too\".",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 195,
    "joke": "Q. What's a man's idea of a balanced diet?\nA. Beer in each hand!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 196,
    "joke": "What are the three words guaranteed to humiliate men everywhere? 'Hold my purse.'",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 197,
    "joke": "Where do you get virgin wool? -- Ugly sheep.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 198,
    "joke": "How did the blonde try to kill the bird? She threw it off the cliff!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 199,
    "joke": "Why did the duck get arrested? Because he was selling quack!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 200,
    "joke": "Q: How can you tell when a FAX had been sent from a blonde?\nA: There is a stamp on it.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 201,
    "joke": "Why do hummingbirds hum? Because they don't know the words. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 202,
    "joke": "Fat people are harder to kidnap.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 203,
    "joke": "I get plenty of exercise - jumping to conclusions, pushing my luck, and dodging deadlines.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 204,
    "joke": "Team work is important; it helps to put the blame on someone else.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 205,
    "joke": "What did the janitor say when he came out of the closet? “Supplies!”",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 206,
    "joke": "Why do men get married? So they don't have to hold-in their stomachs any more. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 207,
    "joke": "Why are pirates so mean? They just arrrr!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 208,
    "joke": "Who says nothing is impossible. I've been doing nothing for years.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 209,
    "joke": "Why do women make better soldiers? Because they can bleed for a week and not die. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 210,
    "joke": "My wife is so negative. I remembered the car seat, the stroller, even the diaper bag. But all she can talk about is how I forgot the baby.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 211,
    "joke": "What's the difference between an oral and a rectal thermometer? -- The taste!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 212,
    "joke": "Hard work pays off in the future, laziness pays off now.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 213,
    "joke": "Why are horses always so fit? Because they're on a stable diet.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 214,
    "joke": "Where do horses go shopping? Old-neighvy",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 215,
    "joke": "Nothing makes me more productive than the last minute.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 216,
    "joke": "What should you give a man who has everything? A woman to show him how everything works.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 217,
    "joke": "For Christmas, I want Santa's list of naughty girls.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 218,
    "joke": "I don't have an attitude problem. You have a perception problem.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 219,
    "joke": "I work hard because millions on welfare depend on me.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 220,
    "joke": "I always arrive late to work, but I make up for it by leaving early.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 221,
    "joke": "How do males exercise on the beach? By sucking in their stomachs every time they see a bikini. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 222,
    "joke": "When my boss told me this is the fifth time I'm late, I smiled and thought to myself, it's Friday!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 223,
    "joke": "Speak the truth, but leave immediately after.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 224,
    "joke": "Do you know why you are supposed to bury a politician 100 feet down? Because deep down they are really good people.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 225,
    "joke": "How do you make a tissue dance? You put a little boogie in it.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 226,
    "joke": "The first half of our lives is ruined by our parents, and the second half by our children.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 227,
    "joke": "What happened when the butcher backed into his meat grinder? -- He got a little behind in his work!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 228,
    "joke": "We never knew he was a drunk until he showed up to work sober.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 229,
    "joke": "Granddad, what's the best thing about being 100? -- No peer pressure",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 230,
    "joke": "What happens to a frogs car when it breaks down? It gets toad away.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 231,
    "joke": "Can fat people go skinny dipping?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 232,
    "joke": "What do your boss and a slinky have in common? -- They're both fun to watch tumble down the stairs.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 233,
    "joke": " Which side of a chicken has the most feathers? The outside.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 234,
    "joke": "A healthy nap not only makes you feel better, it also shortens the workday.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 235,
    "joke": "Irish diplomacy - the art of telling someone to go to hell in such a way they'll look forward to the trip.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 236,
    "joke": "Want to look thinner? Hang out with fat people.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 237,
    "joke": "What's a man's  idea of honesty in a relationship? Telling you his real name.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 238,
    "joke": "On the other hand, you have different fingers.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 239,
    "joke": "If we knew what we were doing it wouldn't be called research.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 240,
    "joke": "Why did the blonde think it was Sunday? The sun was out.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 241,
    "joke": "Why did the blonde run with the bike? It was going too fast for her to get on.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 242,
    "joke": "How can you kill an stupid person with a coin? Throw it in front of an oncoming bus.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 243,
    "joke": "Do not underestimate your abilities. That is your boss's job.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 244,
    "joke": "I'd like to have more self-esteem, but I don't deserve it.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 245,
    "joke": "How do you make a blonde's eyes sparkle? -- \nShine a light into her ear.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 246,
    "joke": "What did the big bucket say to the little bucket? -- You look a little pail!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 247,
    "joke": "I have a degree in liberal arts. Do you want fries with that?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 248,
    "joke": "This isn't an office. It's Hell with fluorescent lighting.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 249,
    "joke": "All I want is less to do, more time to do it, and higher pay for not getting it done.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 250,
    "joke": "Nostalgia ain't what it used to be.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 251,
    "joke": "Nothing ruins a Friday more than realizing that today is Tuesday.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 252,
    "joke": "If what you've done is stupid but it works, then it really isn't that stupid, is it?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 253,
    "joke": "A well-educated friend of mine with three advanced degrees can say “I’m unemployed” in six languages.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 254,
    "joke": "How do you drown a Hipster? In the mainstream.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 255,
    "joke": "Do you know how to save a drowning lawyer?\nTake your foot off his head.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 256,
    "joke": "What kind of horses go out after dusk? -- Nightmares!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 257,
    "joke": "If you don't work you don't have money to live, if you work, there's no time to live.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 258,
    "joke": "How long have I been working for the company? Ever since they threatened to fire me.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 259,
    "joke": "If you worked hard and didn't get anything in return, it means someone else got it.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 260,
    "joke": "Life is scary; at least the salary is funny.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 261,
    "joke": "What do you call a cow with two legs? Lean beef.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 262,
    "joke": "Only in American will you see \"poor\" fat people.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 263,
    "joke": "What's the difference between a lawyer and a vampire?\nA vampire only sucks blood at night. ",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 264,
    "joke": "What if there were no hypothetical situations?",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 265,
    "joke": "Make crime pay, become a lawyer.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 266,
    "joke": "You have to be flexible to work here. On many occasions, you'll be asked to bend over and grab your ankles.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 267,
    "joke": "The Irish gave the bagpipes to the Scots as a joke, but the Scots haven't got the joke yet.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 268,
    "joke": "Irish Blessing - As you slide down the banister of life, may the splinters never point the wrong way.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 269,
    "joke": "How does a man show that he's planning for the future? He buys two cases of beer instead of one.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 270,
    "joke": "Why'd they call it PMS? Cos Mad cow disease was already taken!",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 271,
    "joke": "It's better to do business with a drunk professional than a sober idiot.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 272,
    "joke": "People who do the world's real work don't wear ties.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 273,
    "joke": "Make it idiot-proof and someone will make a better idiot.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 274,
    "joke": "Tell your boss what you think of him, and the truth shall set you free.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 275,
    "joke": "Women do NOT want an honest answer to the question, 'How do I look?'",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 276,
    "joke": "Stop worrying about your job, you're not paid enough to worry.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 277,
    "joke": "Being an ugly girl is like being a man; you have to work for your money.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 278,
    "joke": "My job is secure. No one else wants it.",
    "dateLastRead": "2015-12-31T03:36:21.740Z"
  },
  {
    "id": 279,
    "joke": "How does Moses make tea? Hebrews it!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 280,
    "joke": "The fact that there is a highway to hell and a stairway to heaven says a lot about the anticipated traffic load.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 281,
    "joke": "Why are husbands like lawn mowers?\nThey're hard to get started, emit foul odors, and don't work half the time.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 282,
    "joke": "Why won't sharks attack lawyers?\nProfessional courtesy.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 283,
    "joke": "Don't be irreplaceable - if you can't be replaced, you can't be promoted.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 284,
    "joke": "I have plenty of talent and vision. I just don't care.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 285,
    "joke": "A bus station is where a bus stops. A train station is where a train stops. So now you know why they call this a workstation.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 286,
    "joke": "Hard work never killed anybody, but why take a chance?",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 287,
    "joke": "When a man tells you he got rich through hard work, ask him whose?",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 288,
    "joke": "Laziness is when a person doesn't fake that he's working.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 289,
    "joke": "What's the difference between a 16'' pizza and a musician? -- A 16\" pizza can feed a family of four.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 290,
    "joke": "Why did the blonde put lipstick on her forehead? Because she wanted to make up her mind. ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 291,
    "joke": "What do you call an Irishman who knows how to control a wife? -- A bachelor.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 292,
    "joke": "Q:Do you talk to your wife after sex? \nA:Depends, if I can find the phone!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 293,
    "joke": "What does a mathematician do when he's consitpated? -- He works it out with a pencil",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 294,
    "joke": "Friday is my second favorite F word.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 295,
    "joke": "What did the pirate say when he turned 80? Aye matey.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 296,
    "joke": "A cubicle is just a padded cell without a door.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 297,
    "joke": "A tidy desk is the sign of a sick mind.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 298,
    "joke": "The only thing wrong with doing nothing is that you never know when you're finished.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 299,
    "joke": "How to you wake Lady Gaga? Poke 'er face.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 300,
    "joke": "Why doesn't matter how often a married man changes his job?\t He still ends up with the same boss. ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 301,
    "joke": "I’m a recovering workaholic.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 302,
    "joke": "Failure is not an option—it comes bundled with the software.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 303,
    "joke": "What make a forum? -- A two-um plus a two-um",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 304,
    "joke": "Why didn't the blonde want a window seat on the plane? -- Because she just had her hair done!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 305,
    "joke": "My resume is just a list of things I hope I never get asked to do.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 306,
    "joke": "Procrastination on your part does not create an emergency on my part.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 307,
    "joke": "Too many people are ready to carry the stool when the piano needs to be moved.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 308,
    "joke": "I don't work weekends, or any other day that ends in Y.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 309,
    "joke": "Q. What's blue and fluffy\nA. Pink fluff holding it's breath",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 310,
    "joke": "Is this insecticide good for beetles. - No, it'll kill them!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 311,
    "joke": "George washington said \"We would have a black president when pigs fly!\" Swine flu?",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 312,
    "joke": "Monday is an awful way to spend 1/7th of your life.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 313,
    "joke": "Why is the ocean so salty? The land never waves back.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 314,
    "joke": "An expert is someone called in at the last minute to share the blame.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 315,
    "joke": "I can't be fired. Slaves are sold!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 316,
    "joke": "I owe, I owe, so it's off to work I go.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 317,
    "joke": "Why is Christmas just like a day at the office? You do all the work and the fat guy with the suit gets all the credit.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 318,
    "joke": "If you think your boss is stupid just remember that you wouldn't have a job if he was any smarter.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 319,
    "joke": "If you’re old, fat or ugly you’ll be told the position has been filled.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 320,
    "joke": "What's invisible and smells like carrots? Rabbit farts.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 321,
    "joke": "I've just torn up a note pad and wrapped it around my stomach; it was a waist of paper.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 322,
    "joke": "He works well when under constant supervision and cornered like a rat in a trap.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 323,
    "joke": "What do dim lamps and blondes have in common? They both tend to be hot, but not too bright. ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 324,
    "joke": "Q: Why do you always find things in the last place you look?\nA: Duh!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 325,
    "joke": "What did the cobbler say when a cat wandered into his shop? -- Shoe!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 326,
    "joke": "How can you tell when an engineer is an extrovert. He stares at YOUR shoes while he talks to you.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 327,
    "joke": "If something goes wrong at the office, blame the guy who can't speak English!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 328,
    "joke": "What do you call cows that have a sense of humor? Laughing stock.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 329,
    "joke": "If work is so great, why do they have to pay you to do it?",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 330,
    "joke": "A committee is a body that keeps minutes and wastes hours.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 331,
    "joke": "Drinking after work is great, but if you want to enjoy work, drink before work.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 332,
    "joke": "I do not like work even when someone else does it. ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 333,
    "joke": "For maximum attention, nothing beats a good mistake.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 334,
    "joke": "The reward for a job well done is more work.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 335,
    "joke": "Ambition is a poor excuse for not having enough sense to be lazy.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 336,
    "joke": "Any simple problem can be made insoluble if enough meetings are held to discuss it.\n",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 337,
    "joke": "The best way to appreciate your job is to imagine yourself without one.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 338,
    "joke": "Run your idea up the flagpole and see if anyone salutes it.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 339,
    "joke": "A meeting is an event at which the minutes are kept and the hours are lost.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 340,
    "joke": "A magician was driving down the road -- then he turned into a drive way.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 341,
    "joke": "Q. What did the cat say after eating two robins lying in the sun?\nA. I just love baskin' robins.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 342,
    "joke": "Morning is the time when everyone is jealous of unemployed.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 343,
    "joke": "If a job’s worth doing, it’s too hard.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 344,
    "joke": "Moaning about other people not working really makes the day fly by.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 345,
    "joke": "I've been trying to push the envelope at work, but it's still stationery.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 346,
    "joke": "Why should blondes not be given coffee breaks? It takes too long to retrain them.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 347,
    "joke": "What do your boss and a slinky have in common? They’re both fun to watch tumble down the stairs.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 348,
    "joke": "You can't kiss an Irish girl unexpectedly. You can only kiss her sooner than she thought you would.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 349,
    "joke": "The Irish way - Now don't be talking about yourself while you're here. We'll surely be doing that after you leave.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 350,
    "joke": "Why is the blonde's brain the size of a pea in the morning? -- It swells during the night!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 351,
    "joke": "What's the most common sleeping position of a man? Around. ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 352,
    "joke": "What do you call an Irishman who sits outside all night?\nPaddy O' Furniture",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 353,
    "joke": "Women never have anything to wear. Don't question the racks of clothes in the closet; you \"just don't understand\"",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 354,
    "joke": "The key to a good relationship is the key. Give me back the key!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 355,
    "joke": "What do you call a fat girl dancing in a club? Alone.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 356,
    "joke": "What do you get when a blonde blows in another blonde's ear? -- Data transfer.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 357,
    "joke": "He hit rock bottom and started to dig.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 358,
    "joke": "What's the difference between a man and a condom? Condoms have changed. They're no longer thick and insensitive! ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 359,
    "joke": "Q. What's pink and fluffy\nA. Pink fluff",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 360,
    "joke": "Beauty is in the eye of the beer holder.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 361,
    "joke": "A blonde walked into a bar --\nOUCHH!!!",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 362,
    "joke": "Q: What do you do when your wife's staggering?\nA: Shoot her again.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 363,
    "joke": "A man driving a car hits a woman. Whose fault is it? The man's. Why was he driving in the kitchen?",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 364,
    "joke": "What do you do if a bird shits on your car? -- Don't ask her out again.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 365,
    "joke": "How do you fix a woman's watch? You don't. There is a clock on the stove.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 366,
    "joke": "Why does the blonde throw breadcrumbs in the toilet every morning? -- To feed the toilet duck",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 367,
    "joke": "Why did the blonde wash her hair in the kitchen sink? Because that's where you wash vegetables.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 368,
    "joke": "Women love to shop. It is the one area of the world where they feel like they're actually in control. ",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 369,
    "joke": "What's the hardest part of a vegetable to eat? The wheelchair.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  },
  {
    "id": 370,
    "joke": "Women brush their hair before bed.",
    "dateLastRead": "2015-12-31T03:36:21.741Z"
  }
];

      collection.insert(jokesdb, {w:1}, function(err, result) {
        console.log('Result', result);

        db.close();
      });
      //
      /*
      collection.find({ id: randomJokeId }).limit(1).toArray(function (err, result) {
        
        callback('*' + result[0].joke + '*');

        db.close();
      });
      */
  });
};