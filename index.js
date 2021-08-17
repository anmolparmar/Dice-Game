var image1;
var image2;
var player_1_score = 0;
var player_2_score = 0;
function playGame() 
{
    function numbertostringConvert(num)
    {
        var number;
        switch (num) {
            case 1:
                number = '<i class="fas fa-dice-one fa-7x"></i>';
                break;
            case 2:
                number = '<i class="fas fa-dice-two fa-7x"></i>';
                break;
            case 3:
                number = '<i class="fas fa-dice-three fa-7x"></i>';
                break;
            case 4:
                number = '<i class="fas fa-dice-four fa-7x"></i>';
                break;
            case 5:
                number = '<i class="fas fa-dice-five fa-7x"></i>';
                break;
            case 6:
                number = '<i class="fas fa-dice-six fa-7x"></i>';
                break;
            default:
                number = '';
        }
        return number;
    }
    var number1 = Math.floor(Math.random() * 6) + 1;//1-6
    console.log(number1);
    numbertostring1=numbertostringConvert(number1);
    image1 = numbertostring1;
    var image11 = document.getElementById("img1");
    image11.innerHTML = image1;


    var number2 = Math.floor(Math.random() * 6) + 1;//1-6
    console.log(number2);
    numbertostring2 = numbertostringConvert(number2);
    image2 = numbertostring2;
    var image22 = document.getElementById("img2");
    image22.innerHTML = image2;

    //if player1 wins
    if (number1 > number2)
    {
        document.querySelector("h1").innerHTML = '🚩 Player 1 Wins!';
        player_1_score++;
    }
    else if (number1 < number2)
    {
        document.querySelector("h1").innerHTML = 'Player 2 Wins! 🚩';
        player_2_score++;
    }
    else
    {
        document.querySelector("h1").innerHTML = "Draw! ";
    }


    document.getElementById("player_1_score").innerHTML = "Player 1 Score is " + player_1_score;
    document.getElementById("player_2_score").innerHTML = "Player 2 Score is " + player_2_score;
}