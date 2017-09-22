const minusFunc = (x, y) => x - y;
const plusFunc = (x, y) => x + y;
const multiplyFunc = (x, y) => x * y;
const devideFunc = (x, y) => x / y;

const mathMySign = {
  '+': plusFunc,
  '-': minusFunc,
  '*': multiplyFunc,
  '/': devideFunc
};

const generateInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const getHumanLevel = (level) => {
  if (level < 50) {
    return 'Junior';
  } else if (level < 80) {
    return 'Middle'
  }
  return 'Senior';
}

const generateSign = (level) => {
  // TODO change complexity depending on the level valued passed in
  if (level < 30) {
    if (Math.random() > 0.4) {
      return '+';
    } else {
      return '-';
    }
  } else if (level < 50) {
    if (Math.random() > 0.5) {
      return '+';
    } else {
      return '-';
    }
  }

};

const generateBottomRange = (level) => {
  // TODO add some logic
  return 0;
};

const generateStateByLevel = (currentLevel, destination) => {
  let newLevel;
  if (destination == 'up') {
    newLevel = currentLevel + 1;
  } else if (destination == 'down') {
    newLevel = currentLevel - 1;
  }
  const bottomRange = generateBottomRange(currentLevel);
  return {
    level: newLevel,
    left: generateInteger(bottomRange, newLevel),
    right: generateInteger(bottomRange, newLevel),
    answer: ''
  };
};

export default {
  mathMySign,
  getHumanLevel,
  generateInteger,
  generateSign,
  generateStateByLevel
};
