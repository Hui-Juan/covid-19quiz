var reference = new Firebase("https://klzfypproject-default-rtdb.firebaseio.com");

var quizDatabase = reference.child("user/");

function storeToLocal(){
  var userScoreLocal = userPoint;
  sessionStorage.test1 = userScoreLocal;
  console.log(sessionStorage.test1);
}


function writeData(){
  quizDatabase.push({
    "userName":document.getElementById('uname').value,
    "userEmail":document.getElementById('email').value,
    "userScore": sessionStorage.test1,
    "markDeducted" : parseInt(1000-sessionStorage.test1)

  });
  window.open('leaderboard.html');
}
