Pitza.prototype.calculateBei = function () {
    var bei;
    if (this.size === "small") {
        bei = 400;
    }

    if (this.size === "medium") {
        bei = 600
    }

    if (this.size === "large") {
        bei = 800
    }

    if (this.size === "xtra-large") {
        bei = 1200
    }
    
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] === "pepperoni") {
            bei += 100;
        }

        if (this.toppings[i] === "mushrooms") {
            bei += 150
        }

        if (this.toppings[i] === "onions") {
            bei += 50
        }

        if (this.toppings[i] === "bacon") {
            bei += 120
        }

        if (this.toppings[i] === "xtra-cheese") {
            bei += 150
        }

        if (this.toppings[i] === "green pepppers") {
            bei += 100
        }
    }
    return bei;
 }

 