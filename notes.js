// card
const scenario = [String]
const content = [String]
const explan = [String]

Cards(index) {
  contentIndex: int;
  selected: boolean;
  onClick: boolean;
  correct: boolean;
}

// game

Game(index) {
  scenarioIndex -> array of scenarios
  randomizer(scenarioIndex); // randomize cards based on scenario
  display(); // display cards
  touchScreen();
  go to -> checkScreen
}

randomizer(scenarioIndex) {
  int bigPicNumber = randomize big picture [0 - 2]
  if(bigPicNumber == 0) {
    randomize fix it [1 - 3]
    break;
  } else {
    randomize big picture [1 - 2]
    randomize fix it [0 - 3]
  }
}

// CheckScreen
for(int cardIndex = 0; cardIndex < card.length; cardIndex++) {
  if(card[cardIndex] == correct) {
    show explanation;
    if (onClick) {
      highlight GREEN;
    }
  }
  if(!correct && onClick) {
    highlight RED;
  }
  if(correct && !onClick) {
    highlight GREY;
  }
}
