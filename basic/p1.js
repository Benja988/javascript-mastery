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


switch (expression) {
    case label1:
        statement1;
        break;
    case label2:
        statement2;
        break;
    default:
        statementsDefault;
}