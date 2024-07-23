var numSelected=null;
var tileSelected=null;
var error=0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload=function(){
    setGame();
}

function setGame(){


    for(let i=1;i<=9;i++){

        number=document.createElement("div");

        number.id=i;
        number.innerText=i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);

    }
    
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){

            tile=document.createElement('div');
            tile.id=i.toString()+'-'+j.toString();
            tile.classList.add("tile");
            
            tile.addEventListener("click",selectTile);
            document.getElementById("board").appendChild(tile);
            if(i==2 || i==5){
                tile.classList.add("horizontal-line");


            }
            if(j==2 || j==5){
                tile.classList.add("vertical-line");
            }
            
            if(board[i][j]=='-'){
                continue;
            }
            tile.innerText=board[i][j];
            tile.style.backgroundColor="yellow";
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function selectTile(){
    tileSelected=this;
    let row=tileSelected.id[0];
    let col=tileSelected.id[2];
    if (this.innerText!=""){
        return;
    } 
    if (solution[row][col]==numSelected.innerText){
        tileSelected.innerText=numSelected.innerText;
    }
    else{
        error=error+1;
        document.getElementById("errors").innerText=error;
    }
    






}
