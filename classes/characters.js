import { rolld20 } from "../utils/dices";

class Base_char {
    constructor(name,strength, wisdom, speed, social, hp, xp) {
        this.name = name;
        this.strength = strength;
        this.wisdom = wisdom;
        this.speed = speed;
        this.social = social;
        this.hp = hp;
        this.xp = xp;
       
    }
    run() { 
        alert(""+ this.name+" Is running!");    
    }
    negotiate(opponent_social, opponent_negotiation_modifier) {
        if ((this.social+this.wisdom/10+rolld20(1))>(opponent_social+opponent_negotiation_modifier+rolld20))
            {alert("success");}
        else if ((this.social+this.wisdom/10+rolld20(1))==(opponent_social+opponent_negotiation_modifier+rolld20))
        {
            alert("even, stalled negototiations")
        }
        else {alert("failed, opponent advantage!")}
    }

}