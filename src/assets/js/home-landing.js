const Typewriter = function(txtElement, words, wait = 1000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
    this.endWords = false;
}

//TYPE METHOD
Typewriter.prototype.type = function(){
    //CURRENT INDEX OF WORDS (IN MY CASE, I ONLY HAVE ONE WORD)'
    const current = this.wordIndex % this.words.length;
    
    //GET FULL TEXT OF CURRENT WORD
    let fulltxt = this.words[current];
    //CHECK IF DELETING
    if(this.isDeleting){
        //REMOVE A CHAR
        if(fulltxt[this.txt.length] == '<'){
            this.txt = fulltxt.substring(0, this.txt.length - 2);
        }else{
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        }
    }else{
        //ADD A CHAR

        if(fulltxt[this.txt.length] == '<'){
            this.txt = fulltxt.substring(0, this.txt.length + 2);
        }else{
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
    }
    //INSERT TXT INTO ELEMENT
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //TYPE SPEED
    let typeSpeed = 200;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    // IF WORD IS COMPLETE
    if(!this.isDeleting&&this.txt == fulltxt&&this.endWords){
        // MAKE PAUSE AT THE END
        typeSpeed = this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''&&this.endWords){
        this.isDeleting = false;
        typeSpeed = 500
    }else{
        fulltxt = this.words[current+1];
        this.endWords = true;
    }
    setTimeout(()=>this.type(),typeSpeed)
}

//INIT ON DOM LOAD
document.addEventListener('DOMContentLoaded', init);
//INIT APP
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words =  JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute("data-wait");
    //INIT TYPEWRITER
    new Typewriter(txtElement,words,wait);
}