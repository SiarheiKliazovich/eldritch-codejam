

const greenCards = [
  {
    id: 'green1',
    
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
   
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
   
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
   
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
   
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
   
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
   
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
   
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
   
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    
    difficulty: 'easy',
    color:'green'
  },
]
const brownCards = [
  {
    id: 'brown1',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
   
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
   
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
   
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
   
    difficulty: 'easy',
    color:'brown'
  },
]

const blueCards = [
  {
    id: 'blue1',
    
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
   
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
   
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
   
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
   
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
   
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
   
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
   
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    
    difficulty: 'normal',
    color:'blue'
  },
]
  
const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
    //    cardFace: Ancients.azathoth,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      // cardFace:'../ Ancients.cthulhu',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      // cardFace:'../Ancients.iogSothoth',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      // cardFace:'../Ancients.shubNiggurath',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]

const difficulties = [
    {
      id: 'easy',
      name: 'Низкая'
    },
    {
      id: 'normal',
      name: 'Средняя'
    },
    {
      id: 'hard',
      name: 'Высокая'
    },
  ]

const images = document.querySelectorAll('.ancient-card')

let difficulty = {};
let ancient = {};
let cards = {};
let mainCardDesk = [];

let firstStage = [];
let secondStage = [];
let thirdStage = [] ;
 

images.forEach(image => {
  image.addEventListener('click', function() {
    ancient = {};
    document.getElementsByClassName('difficulty-btn-section')[0].classList.add('difficulty-btn-section--activ');
    ancient = ancientsData.find(item => item.id === image.id )
    images.forEach(item => item.classList.remove('active'))
    image.classList.add('active');
   
    document.querySelector('.round-section').classList.remove('round-section--active')
    document.querySelector('.CardBackground').classList.remove('CardBackground--active')   
    document.querySelector( '.last-card ').classList.remove('last-card--active')

    
  })  
}) 

const difBtns = document.querySelectorAll('.dif-btn');

difBtns.forEach(difBtn => {
  difBtn.addEventListener('click', () =>{ 
    document.querySelector('.btn-random').classList.add('btn-random--active');
    difficulty = difficulties.find(x => x.id === difBtn.id)
    difBtns.forEach(d => d.classList.remove('active'))
    difBtn.classList.add('active');   
    mainCardDesk = [];
    firstStage = [];
    secondStage = [];
    thirdStage = [] 
    document.querySelector('.round-section').classList.remove('round-section--active')
    document.querySelector('.CardBackground').classList.remove('CardBackground--active')   
    document.querySelector( '.last-card ').classList.remove('last-card--active')
    
  }) 
})


  const randomBtn = document.querySelector('.btn-random');

  const parentsFS = document.querySelector('.firstStage');
  const childFsGr = parentsFS.querySelector('.dot-gr');
  const childFsR = parentsFS.querySelector('.dot-red');
  const childfFsB = parentsFS.querySelector('.dot-blue');

  const parentSs = document.querySelector('.secondStage');
  const childSsGr = parentSs.querySelector('.dot-gr');
  const childSsR = parentSs.querySelector('.dot-red');
  const childSsB = parentSs.querySelector('.dot-blue');

  const parentTs = document.querySelector('.thirdStage');
  const childTsGr = parentTs.querySelector('.dot-gr');
  const childTsR = parentTs.querySelector('.dot-red');
  const childTsB = parentTs.querySelector('.dot-blue');


randomBtn.addEventListener('click', () => {
  mainCardDesk = [];
  document.querySelector('.round-section').classList.add('round-section--active');
  document.querySelector('.CardBackground').classList.add('CardBackground--active');
  document.querySelector('.btn-random').classList.remove('btn-random--active');
  childspanFS.classList.remove('span-text--active');
  childspanSs.classList.remove('span-text--active');
  childspanTs.classList.remove('span-text--active')
  document.getElementsByClassName('difficulty-btn-section')[0].classList.add('difficulty-btn-section--activ');
  

  childFsR.textContent = ancient.firstStage.brownCards ;
  childfFsB.textContent = ancient.firstStage.blueCards ;
  childFsGr.textContent = ancient.firstStage.greenCards ;

  childSsGr.textContent = ancient.secondStage.greenCards ;
  childSsR.textContent = ancient.secondStage.brownCards ;
  childSsB.textContent = ancient.secondStage.blueCards ;

  childTsGr.textContent = ancient.thirdStage.greenCards ;
  childTsR.textContent = ancient.thirdStage.brownCards ;
  childTsB.textContent = ancient.thirdStage.blueCards ;

  const carsDesk = {
    firstStage: ancient.firstStage,
    secondStage: ancient.secondStage,
    thirdStage: ancient.thirdStage,
  }

  cards = Object.keys(carsDesk).reduce((previous, current) => {
    return {
      blueCards: previous.blueCards + ancient[current].blueCards,
      greenCards: previous.greenCards + ancient[current].greenCards,
      brownCards: previous.brownCards + ancient[current].brownCards,
    }
  }, { blueCards: 0, greenCards: 0, brownCards: 0 })
 
  
  const blCards = blueCards.filter(card => card.difficulty === difficulty.id )
  const brCards = brownCards.filter(card => card.difficulty === difficulty.id )
  const grCards = greenCards.filter(card => card.difficulty === difficulty.id ) 


  let brCardsToPush;
  let grCardsToPush;
  let blCardsToPush;
  if (cards.brownCards > brCards.length) {
    const brCardsOther = brownCards.filter(card => card.difficulty !== difficulty.id);
    const diff = cards.brownCards - brCards.length;
    brCardsToPush = brCardsOther.sort(() => .5 - Math.random()).slice(0, diff);
    mainCardDesk.push(...brCards)
   
   } else {
    brCardsToPush = brCards.sort(() => .5 - Math.random()).slice(0, cards.brownCards);
    
   }
   if (cards.greenCards > grCards.length) {
    const grCardsOther = greenCards.filter(card => card.difficulty !== difficulty.id )
    const diff = cards.greenCards - grCards.length;
    grCardsToPush = grCardsOther.sort(() => .5 - Math.random()).slice(0, diff);
    mainCardDesk.push(...grCards)
   
    } else {
      grCardsToPush = grCards.sort(() => .5 - Math.random()).slice(0, cards.greenCards);
     
   }
   if(cards.blueCards > blCards.length) {
    const blCardsOther = blueCards.filter(card => card.difficulty !== difficulty.id);
    const diff = cards.blueCards - blCards.length;
    blCardsToPush = blCardsOther.sort(() => .5 - Math.random()).slice(0, diff);
    mainCardDesk.push(...blCards)
   } else {
    blCardsToPush = blCards.sort(() => .5 - Math.random()).slice(0, cards.blueCards);
    
   }
  mainCardDesk.push(...brCardsToPush, ...grCardsToPush, ...blCardsToPush)
  let blue = mainCardDesk.filter((el, key) => el.color === 'blue')
  let green = mainCardDesk.filter((el, key) => el.color === 'green')
  let brown = mainCardDesk.filter((el, key) => el.color === 'brown')

  const blueFirstStage = blue.sort(() => .5 - Math.random()).slice(0, ancient.firstStage.blueCards);
  blue = blueFirstStage.map(card => blue.filter(el => el.id !== card.id)).flat();
  firstStage.push(...blueFirstStage)
  
  const blueSecondStage = blue.sort(() => .5 - Math.random()).slice(0, ancient.secondStage.blueCards);
  blue = blueSecondStage.map(card => blue.filter(el => el.id !== card.id)).flat();
  secondStage.push(...blueSecondStage)
 
  const blueThirdStage = blue.sort(() => .5 - Math.random()).slice(0, ancient.thirdStage.blueCards);
  blue = blueThirdStage.map(card => blue.filter(el => el.id !== card.id)).flat();
  thirdStage.push(...blueThirdStage)
  


  
  const greenFirstStage = green.sort(() => .5 - Math.random()).slice(0, ancient.firstStage.greenCards);
  green = greenFirstStage.map(card => green.filter(el => el.id !== card.id)).flat();
  firstStage.push(...greenFirstStage)
  
  const greenSecondStage = green.sort(() => .5 - Math.random()).slice(0, ancient.secondStage.greenCards);
  green = greenSecondStage.map(card => green.filter(el => el.id !== card.id)).flat();
  secondStage.push(...greenSecondStage)
  
  const greenThirdStage = green.sort(() => .5 - Math.random()).slice(0, ancient.thirdStage.greenCards);
  green = greenThirdStage.map(card => green.filter(el => el.id !== card.id)).flat();
  thirdStage.push(...greenThirdStage)
  

  const brownFirstStage = brown.sort(() => .5 - Math.random()).slice(0, ancient.firstStage.brownCards);
  brown = brownFirstStage.map(card => brown.filter(el => el.id !== card.id)).flat();
  firstStage.push(...brownFirstStage)
  

  const brownSecondStage = brown.sort(() => .5 - Math.random()).slice(0, ancient.secondStage.brownCards);
  brown = brownSecondStage.map(card => brown.filter(el => el.id !== card.id)).flat();
  secondStage.push(...brownSecondStage)
 

  const brownThirdStage = brown.sort(() => .5 - Math.random()).slice(0, ancient.thirdStage.brownCards);
  brown = brownThirdStage.map(card => brown.filter(el => el.id !== card.id)).flat();
  thirdStage.push(...brownThirdStage)

})


const parentsstagefs = document.querySelector('.firstStage');
const childspanFS = parentsstagefs.querySelector('.span-text');
const parentsstagess = document.querySelector('.secondStage');
const childspanSs = parentsstagess.querySelector('.span-text');
const parentsstagets = document.querySelector('.thirdStage');
const childspanTs = parentsstagets.querySelector('.span-text');

let cardRun = document.querySelector('.CardBackground')
const lastCard = document.querySelector('.last-card');
cardRun.addEventListener('click', () => {
  lastCard.classList.add('last-card--active');
  
  if (firstStage.length > 0) {
    const random = Math.round(Math.random() * firstStage.length)
    const elem = random === 0 ? firstStage[random] : firstStage[random - 1];
    lastCard.style.backgroundImage = `url("/assets/MythicCards/${elem.color}/${elem.id}.png")`
    const updatedDesk = firstStage.filter((el, key) => el.id !== elem.id);
    firstStage = updatedDesk;
    

    const bl = firstStage.filter((el, key) => el.color === 'blue');
    childfFsB.textContent = bl.length;

    const gr = firstStage.filter((el, key) => el.color === 'green');
    childFsGr.textContent = gr.length;

    const br = firstStage.filter((el, key) => el.color === 'brown');
    childFsR.textContent = br.length;
    
  }
  else if (secondStage.length > 0) {
    const random = Math.round(Math.random() * secondStage.length)
    const elem = random === 0 ? secondStage[random] : secondStage[random - 1];
    lastCard.style.backgroundImage = `url("/assets/MythicCards/${elem.color}/${elem.id}.png")`
    const updatedDesk = secondStage.filter((el, key) => el.id !== elem.id);
    secondStage = updatedDesk;
    

    const bl = secondStage.filter((el, key) => el.color === 'blue');
    childSsB.textContent = bl.length;

    const gr = secondStage.filter((el, key) => el.color === 'green');
    childSsGr.textContent = gr.length;

    const br = secondStage.filter((el, key) => el.color === 'brown');
    childSsR.textContent = br.length;
  }

  else if (thirdStage.length > 0) {
    const random = Math.round(Math.random() * thirdStage.length)
    const elem = random === 0 ? thirdStage[random] : thirdStage[random - 1];
    lastCard.style.backgroundImage = `url("/assets/MythicCards/${elem.color}/${elem.id}.png")`
    const updatedDesk = thirdStage.filter((el, key) => el.id !== elem.id);
    thirdStage = updatedDesk;
   
    const bl = thirdStage.filter((el, key) => el.color === 'blue');
    childTsB.textContent = bl.length;

    const gr = thirdStage.filter((el, key) => el.color === 'green');
    childTsGr.textContent = gr.length;

    const br = thirdStage.filter((el, key) => el.color === 'brown');
    childTsR.textContent = br.length;
  }

  if (firstStage.length === 0 && secondStage.length === 0 && thirdStage.length === 0) {
    cardRun.classList.remove('CardBackground--active');
   
   if (firstStage.length === 0 ) {
   childspanFS.classList.add('span-text--active');
   }
    if (secondStage.length === 0 ) {
     childspanSs.classList.add('span-text--active');
    }
   if (thirdStage.length === 0 ) {
    childspanTs.classList.add('span-text--active');
   }
  }
})





