'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seatle = {
    minCustomer: 23, maxCustomer: 65, avgCookieSale: 6.3, randomCustomer: [], randomAverage: [],
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer) + ' hourly customers');
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
             this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        console.log(this.randomAverage);
    },
    seatleTotal:function()
    {   let total=0;
        for (let i=0; i<hours.length;i++)
        {
            total=total+Math.floor(this.randomAverage[i]);
            console.log(hours+":"+total);
        }
        console.log('total='+this.total);
        
    }
}
//  +' the average is: ' +randomNumber(Math.floor(this.minCustomer*this.avgCookieSale),Math.floor(this.maxCustomer*this.avgCookieSale)
seatle.customerRandom();
seatle.avgCookies();
seatle.seatleTotal();


let tokyo = {
    minCustomer: 3, maxCustomer: 24, avgCookieSale: 1.2, randomCustomer: [], randomAverage: [],
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer) + ' hourly customers');
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
             this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        console.log(this.randomAverage);
    },
    seatleTotal:function()
    {   let total=0;
        for (let i=0; i<hours.length;i++)
        {
            total=total+Math.floor(this.randomAverage[i]);
            console.log(hours+":"+total);
        }
        console.log('total='+this.total);
        
    }
}
tokyo.customerRandom();
tokyo.avgCookies();
tokyo.seatleTotal();


let dubai = {
    minCustomer: 11, maxCustomer: 38, avgCookieSale: 3.7, randomCustomer: [], randomAverage: [],
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer) + ' hourly customers');
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
             this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        console.log(this.randomAverage);
    },
    seatleTotal:function()
    {   let total=0;
        for (let i=0; i<hours.length;i++)
        {
            total=total+Math.floor(this.randomAverage[i]);
            console.log(hours+":"+total);
        }
        console.log('total='+this.total);
        
    }
}
dubai.customerRandom();
dubai.avgCookies();
dubai.seatleTotal();


let paris = {
    minCustomer: 20, maxCustomer: 38, avgCookieSale: 2.3, randomCustomer: [], randomAverage: [],
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer) + ' hourly customers');
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
             this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        console.log(this.randomAverage);
    },
    seatleTotal:function()
    {   let total=0;
        for (let i=0; i<hours.length;i++)
        {
            total=total+Math.floor(this.randomAverage[i]);
            console.log(hours+":"+total);
        }
        console.log('total='+this.total);
        
    }
}
paris.customerRandom();
paris.avgCookies();
paris.seatleTotal();


let lima = {
    minCustomer: 2, maxCustomer: 16, avgCookieSale: 4.6, randomCustomer: [], randomAverage: [],
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer) + ' hourly customers');
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
             this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        console.log(this.randomAverage);
    },
    seatleTotal:function()
    {   let total=0;
        for (let i=0; i<hours.length;i++)
        {
            total=total+Math.floor(this.randomAverage[i]);
            console.log(hours+":"+total);
        }
        console.log('total='+this.total);
        
    }
}
lima.customerRandom();
lima.avgCookies();
lima.seatleTotal();

/*let tokyo = {
    minCustomer: 3, maxCustomer: 24, avgCookieSale: 1.2, randomCustomer: [], randomAverage: [],
    customerRandom: function () {
        for (let i = 0; i < hours.length; i++){
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer) + ' hourly customers');
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        console.log(this.randomAverage);
    }
}*/