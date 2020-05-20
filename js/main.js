const onLoad = () => {
  const inputOne = document.getElementById("challenge-1");
  inputOne.addEventListener('click', challengeOne);

  const inputTwo = document.getElementById("challenge-2");
  inputTwo.addEventListener('click', challengeTwo);

  const inputThree = document.getElementById("challenge-3");
  inputThree.addEventListener('click', challengeThree);

  const inputFour = document.getElementById("challenge-4");
  inputFour.addEventListener('click', challengeFour);
}

window.addEventListener('load', onLoad);

const challengeOne = () => {
  let output = document.getElementById("challenge-1-output")
  let input1 = document.getElementById("challenge-1-input-1");
  let inputValue1 = parseInt(input1.value);

  let input2 = document.getElementById("challenge-1-input-2");
  let inputValue2 = parseInt(input2.value);

  let input3 = document.getElementById("challenge-1-input-3");
  let inputValue3 = parseInt(input3.value);

  output.innerHTML = ((inputValue1) + (inputValue2 * 2) + (inputValue3 * 3 )) >= 10 ? "Happy" : "Sad";

}

const challengeTwo = () => {
  let output = document.getElementById("challenge-2-output")
  let input1 = document.getElementById("challenge-2-input-1");
  let limit = parseInt(input1.value);

  let input2 = document.getElementById("challenge-2-input-2");
  let initial_pool = parseInt(input2.value);

  let input3 = document.getElementById("challenge-2-input-3");
  let infection_rate = parseInt(input3.value);

  let day = 0;
  let current_total = initial_pool;
  let delay_total = initial_pool * infection_rate;
  while(limit > current_total) {
    day++;
    current_total = delay_total;
    delay_total = current_total * infection_rate;
  }
  output.innerHTML = `It would take ${day} days for the infected persons to surpass ${limit}`;

}

const challengeThree = () => {
  let output = document.getElementById("challenge-3-output")
  let input1 = document.getElementById("challenge-3-input-1");
  let splits = (input1.value).split('\n');
  let length = parseInt(splits[0]);

  let maxX = minX = splits[1].split(',')[0];
  let maxY = minY = splits[1].split(',')[1];

  for(let i = 2; i <= length; i++)
  {
    let input = splits[i];
    let xy = input.split(",");
    let x = parseInt(xy[0]);
    let y = parseInt(xy[1]);
    if(x > maxX){
      maxX = x;
    } else if (x < minX) {
      minX = x;
    }
    if(y > maxY){
      maxY = y;
    } else if (y < minY) {
      minY = y;
    }
  }

  let minPoint = `${minX},${minY}`
  let maxPoint = `${maxX},${maxY}`


  output.innerHTML = `The Output bondaries are: Min: ${minPoint} Max: ${maxPoint}`;

}

const challengeFour = () => {
  let output = document.getElementById("challenge-4-output")
  let input1 = document.getElementById("challenge-4-input-1");
  const splits = (input1.value).split('\n');
  let answer = 'no';
  let s = splits[1];

  let t = splits[0];

  let s_shifts = [];
  let s1;
  let s2;

  for(let i = 0; i < s.length; i++) {
    s1 = s.slice(0, i);
    s2 = s.slice(i);
    s_shifts.push(s2.concat(s1));
  }

  for(let i = 0; i < s_shifts.length; i++) {
    if(t.includes(s_shifts[i])) {
      answer = 'yes'
    }
  }



  output.innerHTML = `Does the string: ${t} contain a cyclic shift of ${s} ? ${answer}`;

}
