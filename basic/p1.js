// if (condition1) {
//     statement 1;
// } else if (condition2) {
//     statement 2;
// } else if (condition3) {
//     statement 3;
// } else {
//     statementLast
// }

function checkData() {
    if (document.form1.threeChar.value.length === 3) {
        return true;
    } else {
        alert(
            `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`
        );
        return false;
    }
}


// switch (expression) {
//     case label1:
//         statement1;
//         break;
//     case label2:
//         statement2;
//         break;
//     default:
//         statementsDefault;
// }


for(let step=0; step<5; step++) {
    console.log("walking East one step");
    
}

function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
  });
 
  

  let i = 0
  do {
    i += 1;
    console.log(i);
    
  } while (i < 5);

  let n = 0;
  let x = 0;
  while (n<3) {
    n++;
    x += n;
    console.log(x);
  }
  

  function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>"
    return result;
    
  }


  function square(number) {
    return number * number;
  }

//   function expression
const square = function (number) {
    return number * number
}
  