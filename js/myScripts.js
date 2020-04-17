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

        for (var i = 0; i < this.crust.length; i++) {
            if (this.crust[i] === "thin") {
                bei += 50
            }

            if (this.crust[i] === "thick") {
                bei += 100
            }

            if (this.crust[i] === "deep") {
                bei += 150
            }

            if (this.crust[i] === "mozzarella filled") {
                bei += 200
            }

            if (this.crust[i] === "stuffed") {
                bei += 100
            }

            if(this.crust[i] === "glutten free") {
                bei += 50
            }
        }
    }
    return bei;
 }

 $(document).ready(function(){
    $("#sizeButton").click(funtion(){
        var size = $("input [name = pitzaSize]:checked").val();

        if (!size) {
            alert("Hujachagua size yako bwana!");
        } else {
            $(".toppings").slideDown();
            $(".size").slideUp();

        }
        
    })
});

$(document).ready(function(){
    $("#toppingsButton").click(function(){
        var toppings =$("input [name = pitzaToppings]:checked").val();

        if (!toppings) {
            alert("Hujachagua toppings bwana!");
        } else {
            $(".crust").slideDown();
            $(".toppings").slideUp();
        }
    });

$(document).ready(function() {
    $("#crust").click(function() {
        var crust = $("input [name = pitzaCrust]:checked").val();

        if (!crust) {
            alert("Hujachagua crust bwana!");

         } else {
             $(".quantity").slideDown();
             $(".crust").slideUp();
         }
    })
});

$("#deLiver").click(function() {
    var deliver = $("input [name = deliveryOptions]:selected").val();

    if (!deliver) {
        alert("Unataka sasa ikufikie aje mtu wangu!");
    } else {
        $("#d1").text(deliver);
        $("#d2").show();
        $(".deliver").slideUp();
    }
})

