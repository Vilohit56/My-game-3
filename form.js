class Form {

    constructor() {  
    this.title = createElement('h3');
    this.line = createElement('h3');
    this.textone = createElement('h3');
    this.texttwo = createElement('h4');
    this.textthree = createElement('h4');
    this.textfour = createElement('h4');
    this.textfive = createElement('h3');
    }

    hide(){
    this.title.hide();
    this.line.hide();
    this.textone.hide();
    this.texttwo.hide();
    this.textthree.hide();
    this.textfour.hide();
    this.textfive.hide();
    };
  
    display(){
    this.title.html("Key Escape");
    this.title.position(1090, 50);
  
    this.line.html("________________________________________")
    this.line.position(911, 60);
    
    this.textone.html("How To Play")
    this.textone.position(1085, 95);

    this.texttwo.html("Use the Arrow keys to navigate around the maze")
    this.texttwo.position(970, 155);

    this.textthree.html("Collect keys to open doors and progress through the maze")
    this.textthree.position(920, 185);

    this.textfour.html("Don't get caught by the zombie")
    this.textfour.position(1070, 215);

    this.textfive.html("Press Space to start")
    this.textfive.position(1055, 280);
      };
  
    }
