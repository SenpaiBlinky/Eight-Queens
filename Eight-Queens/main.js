import './style.css'

var spans = document.getElementsByClassName("span")

var tiles = 1

var queenCount = 0

for (let i = 0; i < spans.length; i++) {

    if (i % 8 == 0) {
        tiles *= -1
    }
    if (tiles == -1) {
        if (i % 2 == 0) {

            spans[i].addEventListener("click", queenClickB)

        
        } else {

            spans[i].addEventListener("click", queenClickW)

        }
    } else {
        if (i % 2 == 0) {

            spans[i].addEventListener("click", queenClickW)

        
        } else {

            spans[i].addEventListener("click", queenClickB)

        }
    }
    

}


function queenClickB() {

    if (queenCount == 8) {
        if (this.innerHTML != ""){
            this.innerHTML = ""
            queenCount -= 1
            } else {
                swal.fire("No More Queens", {
                    buttons: false,
                  });
            }
    } else {
    
    if (this.innerHTML == "") {

        this.innerHTML = "<img src=\"black-queen.png\">" 
        queenCount += 1
    } else {
        this.innerHTML = ""
        queenCount -= 1
    }
}
}

function queenClickW() {
    
    if (queenCount == 8) {

        if (this.innerHTML != ""){
            this.innerHTML = ""
            queenCount -= 1
            } else {
                swal.fire("No More Queens", {
                    buttons: false,
                  }); //da
            }

    } else {

    if (this.innerHTML == "") {

        this.innerHTML = "<img src=\"white-queen.png\">" 
        queenCount += 1
    } else {
        this.innerHTML = ""
        queenCount -= 1
    }
}
}

const checkAnswer = document.getElementById("checkAnswer")

const refreshPage = document.getElementById("refreshPage")

refreshPage.addEventListener("click", reloadPage);

function reloadPage() {

location.reload();

}

checkAnswer.addEventListener("click", answerChecker);

var result = []

function da () {
    result = []

    spans = document.getElementsByClassName("span")

for (var i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML != "") {
        result.push(i % 8)
    }
}
return result
}


function answerChecker() {

    var arr;

    var arr = da()
    console.log(result)

    var error = 0

    if (arr.length <= 7) {
        swal.fire("Add More Queens", {
            buttons: false,
          });
        return
    }

    for (var i = 0; i < arr.length - 1; i++) {
        for (var k = i + 1; k < arr.length; k++) {
            error += Math.abs(arr[i] - arr[k]) == Math.abs(i - k) || arr[i] == arr[k] ? 1 : 0;
        }
    }

    if (error == 0) {
        swal.fire("Congrats You Got It!", {
            buttons: false,
          });
    } else {
        // alert("try again")
        swal.fire("Not Correct", {
            buttons: false,
          });
    }
    arr = []
    return error == 0;
}

