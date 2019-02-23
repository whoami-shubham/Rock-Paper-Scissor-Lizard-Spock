var epoch = 0;
var wins = 0;
var loses = 0;
var user_move = null;
var pc_move = null;
var PlayButton = document.getElementById('play');
var PlayGround = document.getElementById('playground');
var Rock = document.getElementById('rock');
var Paper = document.getElementById('paper');
var Scissor = document.getElementById('scissor');
var Spock = document.getElementById('spock');
var Lizard = document.getElementById('lizard');
var User = document.getElementById('user');
var Pc = document.getElementById('pc');
var Instruction = document.getElementById('instruction');
var PlayAgain = document.getElementById('play_again');
var Images = ['rock.jpg','paper.jpg','scissor.jpg','spock.jpg','lizard.jpg']
var pc_img = document.getElementById('pc_img');
var user_img = document.getElementById('user_img');
var Won = document.getElementById('won');
var Loose = document.getElementById('loose');
var Tie  = document.getElementById('tie');
var ScoreBoard = document.getElementById('scoreboard');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

PlayButton.addEventListener('click',hideButton);
Rock.addEventListener('click',_Rock);
Paper.addEventListener('click',_Paper);
Scissor.addEventListener('click',_Scissor);
Spock.addEventListener('click',_Spock);
Lizard.addEventListener('click',_Lizard);
PlayAgain.addEventListener('click',startAgain)

function hideButton(){
	  console.log("clicked .");
      PlayButton.style.display="none";
      PlayGround.style.display="block";
}

function Update(){
	epoch++;
	var index = Math.floor(Math.random()*Math.floor(5));
	pc_move = index;
    if (epoch>0){
        Instruction.style.display="none";
    }
    pc_img.src = Images[index];
    let who = Who_Won();
    if(who === 'usr'){
       set_label()
       Won.style.display="block"
       wins++;
    }
    else if(who === 'pc'){
    	set_label()
    	Loose.style.display="block"
    	loses++;
    }
    else{
    	set_label()
    	Tie.style.display="block"
    }
    user_img.style.visibility = "visible";
    pc_img.style.visibility = "visible";
    PlayAgain.style.display="block";
    if(epoch%3==0 && epoch!=0){
    	show_sore();
    }
    else{
        ScoreBoard.style.display="none";
    }

    console.log(epoch)

}

function _Rock(){
	  user_move = 0;
      user_img.src = Images[0];
      Update();
}

function _Paper(){
	user_move = 1;
	user_img.src = Images[1];
      Update();
}

function _Scissor(){
	user_move = 2;
	user_img.src = Images[2];
      Update();
}
function _Spock(){
	user_move = 3;
	user_img.src = Images[3];
      Update();
}
function _Lizard(){
	user_move = 4;
	user_img.src = Images[4];
      Update();

}

function set_label(){
	Won.style.display="none"
	Loose.style.display="none"
	Tie.style.display="none"
}

function startAgain(){
	set_label()
	Instruction.style.display="block";
	PlayAgain.style.display="none";
	Pc.style.display="block";
	user_img.style.visibility="hidden"
	pc_img.style.visibility="hidden"
}

function Who_Won(){

	if (user_move == pc_move){
		return 'no one';
	}
	else if (user_move==0 && pc_move == 1){
		return 'pc'
	}
	else if (user_move==0 && pc_move == 2){
		return 'usr'
	}
	else if (user_move==0 && pc_move == 4){
		return 'usr'
	}
	else if (user_move==0 && pc_move == 3){
		return 'pc'
	}
	else if (user_move==1 && pc_move == 2){
		return 'pc'
	}
	else if (user_move==1 && pc_move == 4){
		return 'pc'
	}
	else if (user_move==1 && pc_move == 3){
		return 'usr'
	}
	else if (user_move==2 && pc_move == 4){
		return 'usr'
	}
	else if (user_move==2 && pc_move == 3){
		return 'pc'
	}
	else if (user_move==4 && pc_move == 3){
		return 'usr'
	}
    else{
    	return 'pc'
    }

}




function show_sore(){
  ScoreBoard.style.display="block";
  score1.innerHTML = wins;
  score2.innerHTML = loses;
}