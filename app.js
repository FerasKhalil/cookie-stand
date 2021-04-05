'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];





/*
let seatle = {
    name:'seatle',
    minCustomer: 23, 
    maxCustomer: 65,
    avgCookieSale: 6.3, 
    randomCustomer: [],    
    randomAverage: [],
    total:0,
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer));
        }
        
    },
    avgCookies: function ()
    {
        for (let i = 0; i < this.randomCustomer.length; i++)
        {   let multiply= this.randomCustomer[i]*this.avgCookieSale;
            multiply=Math.floor(multiply);
            this.randomAverage.push(multiply);
            this.total=this.total+this.randomCustomer[i];
        //this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        
    },
    render: function()
    {
        let parent=document.getElementById('parent');
        console.log(parent);
        let header3=document.createElement('h3');
        parent.appendChild(header3);
        header3.textContent=this.name;
        let unorderedL=document.createElement('ul');
        parent.appendChild(unorderedL);
        for( let i=0; i<hours.length; i++)
        {
            let listItem=document.createElement('li');
            unorderedL.appendChild(listItem);
            listItem.textContent=`${hours[i]} : ${this.randomCustomer[i]} : cookies`;
            
        }
        let totalOfLi=document.createElement('li');
        unorderedL.appendChild(totalOfLi);
        totalOfLi.textContent=`total : ${this.total}`;
    }
};

//  +' the average is: ' +randomNumber(Math.floor(this.minCustomer*this.avgCookieSale),Math.floor(this.maxCustomer*this.avgCookieSale)
seatle.customerRandom();
seatle.avgCookies();
seatle.render();
// seatle.seatleTotal();

let tokyo = {
    name:'tokyo',
    minCustomer: 3, 
    maxCustomer: 24,
    avgCookieSale: 1.2, 
    randomCustomer: [], 
    randomAverage: [],
    total: 0,
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer));
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < this.randomCustomer.length; i++)
        {   let multiply= this.randomCustomer[i]*this.avgCookieSale;
            multiply=Math.floor(multiply);
            this.randomAverage.push(multiply);
            this.total=this.total+this.randomCustomer[i];
        //this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        
    },
    
    render:function()
    {
        let parent=document.getElementById('parent');
        console.log(parent);
        let header3=document.createElement('h3');
        parent.appendChild(header3);
        header3.textContent=this.name;
        let unorderedL=document.createElement('ul');
        parent.appendChild(unorderedL);
        for( let i=0;i<hours.length;i++)
        {
            let listItem=document.createElement('li');
            unorderedL.appendChild(listItem);
            listItem.textContent=(`${hours[i]} : ${this.randomCustomer[i]} : cookies`);
            console.log(listItem);
        }
        let totalOfLi=document.createElement('li');
        unorderedL.appendChild(totalOfLi);
        totalOfLi.textContent=(`total:${this.total}`);
    }
}

//  +' the average is: ' +randomNumber(Math.floor(this.minCustomer*this.avgCookieSale),Math.floor(this.maxCustomer*this.avgCookieSale)
tokyo.customerRandom();
tokyo.avgCookies();
tokyo.render();


let dubai = {
    name:'dubai',
    minCustomer: 11, 
    maxCustomer: 38,
    avgCookieSale: 3.7, 
    randomCustomer: [],    
    randomAverage: [],
    total:0,
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer));
        }
        
    },
    avgCookies: function ()
    {
        for (let i = 0; i < this.randomCustomer.length; i++)
        {   let multiply= this.randomCustomer[i]*this.avgCookieSale;
            multiply=Math.floor(multiply);
            this.randomAverage.push(multiply);
            this.total=this.total+this.randomCustomer[i];
        //this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        
    },
    render: function()
    {
        let parent=document.getElementById('parent');
        console.log(parent);
        let header3=document.createElement('h3');
        parent.appendChild(header3);
        header3.textContent=this.name;
        let unorderedL=document.createElement('ul');
        parent.appendChild(unorderedL);
        for( let i=0; i<hours.length; i++)
        {
            let listItem=document.createElement('li');
            unorderedL.appendChild(listItem);
            listItem.textContent=`${hours[i]} : ${this.randomCustomer[i]} : cookies`;
            
        }
        let totalOfLi=document.createElement('li');
        unorderedL.appendChild(totalOfLi);
        totalOfLi.textContent=`total : ${this.total}`;
    }
};

//  +' the average is: ' +randomNumber(Math.floor(this.minCustomer*this.avgCookieSale),Math.floor(this.maxCustomer*this.avgCookieSale)
dubai.customerRandom();
dubai.avgCookies();
dubai.render();
// seatle.seatleTotal();

let paris = {
    name:'paris',
    minCustomer: 20, 
    maxCustomer: 38,
    avgCookieSale: 23, 
    randomCustomer: [], 
    randomAverage: [],
    total: 0,
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer));
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < this.randomCustomer.length; i++)
        {   let multiply= this.randomCustomer[i]*this.avgCookieSale;
            multiply=Math.floor(multiply);
            this.randomAverage.push(multiply);
            this.total=this.total+this.randomCustomer[i];
        //this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        
    },
    
    render:function()
    {
        let parent=document.getElementById('parent');
        console.log(parent);
        let header3=document.createElement('h3');
        parent.appendChild(header3);
        header3.textContent=this.name;
        let unorderedL=document.createElement('ul');
        parent.appendChild(unorderedL);
        for( let i=0;i<hours.length;i++)
        {
            let listItem=document.createElement('li');
            unorderedL.appendChild(listItem);
            listItem.textContent=(`${hours[i]} : ${this.randomCustomer[i]} : cookies`);
            console.log(listItem);
        }
        let totalOfLi=document.createElement('li');
        unorderedL.appendChild(totalOfLi);
        totalOfLi.textContent=(`total:${this.total}`);
    }
}

//  +' the average is: ' +randomNumber(Math.floor(this.minCustomer*this.avgCookieSale),Math.floor(this.maxCustomer*this.avgCookieSale)
paris.customerRandom();
paris.avgCookies();
paris.render();

let lima = {
    name:'lima',
    minCustomer: 20, 
    maxCustomer: 38,
    avgCookieSale: 23, 
    randomCustomer: [], 
    randomAverage: [],
    total: 0,
    customerRandom: function ()
    {
        for (let i = 0; i < hours.length; i++)
        {
            this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer));
        }
        console.log(this.randomCustomer);
    },
    avgCookies: function ()
    {
        for (let i = 0; i < this.randomCustomer.length; i++)
        {   let multiply= this.randomCustomer[i]*this.avgCookieSale;
            multiply=Math.floor(multiply);
            this.randomAverage.push(multiply);
            this.total=this.total+this.randomCustomer[i];
        //this.randomAverage.push(' the average is: ' + randomNumber(Math.floor(this.minCustomer * this.avgCookieSale), Math.floor(this.maxCustomer * this.avgCookieSale)));
        } 
        
    },
    
    render:function()
    {
        let parent=document.getElementById('parent');
        console.log(parent);
        let header3=document.createElement('h3');
        parent.appendChild(header3);
        header3.textContent=this.name;
        let unorderedL=document.createElement('ul');
        parent.appendChild(unorderedL);
        for( let i=0;i<hours.length;i++)
        {
            let listItem=document.createElement('li');
            unorderedL.appendChild(listItem);
            listItem.textContent=(`${hours[i]} : ${this.randomCustomer[i]} : cookies`);
            console.log(listItem);
        }
        let totalOfLi=document.createElement('li');
        unorderedL.appendChild(totalOfLi);
        totalOfLi.textContent=(`total:${this.total}`);
    }
}

//  +' the average is: ' +randomNumber(Math.floor(this.minCustomer*this.avgCookieSale),Math.floor(this.maxCustomer*this.avgCookieSale)
lima.customerRandom();
lima.avgCookies();
lima.render();
// seatle.seatleTotal();
*/

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