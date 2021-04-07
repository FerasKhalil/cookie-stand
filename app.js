'use strict';
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let stores = [];
function MakingTables(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.cookieAverage = [];
  this.total = 0;
  stores.push(this);
}
MakingTables.prototype.multiply = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookieAverage.push(Math.floor(randomNumber(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
    this.total += Math.floor(this.cookieAverage[i]);
  }
};
//shopeRow = tableRow, nameTd=tableData, tdRow=dataRow, totalTd=totalData
MakingTables.prototype.render = function () {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
      let dataRow = document.createElement('td');
      tableRow.appendChild(dataRow);
      dataRow.textContent = `${this.cookieAverage[i]}`;
    }
    let totalData = document.createElement('td');
    tableRow.appendChild(totalData);
    totalData.textContent = `${this.total}`;
  };
let seattle = new MakingTables('seattle', 23, 65, 6.3);
let tokyo = new MakingTables('tokyo', 3, 24, 1.2);
let dubai = new MakingTables('dubai', 11, 38, 3.7);
let paris = new MakingTables('paris', 20, 38, 2.3);
let lima = new MakingTables('lima', 2, 16, 4.6);

let main = document.getElementById('tablers');
let table = document.createElement('th');
main.appendChild(table);

function headerMaker() {
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableH = document.createElement('th');
  tableRow.appendChild(tableH);
  tableH.textContent = 'name';

  for (let i = 0; i < hours.length; i++) {
    tableH = document.createElement('th');
    tableRow.appendChild(tableH);
    tableH.textContent = hours[i];

  }
  let tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent = 'branch total';
}



function footerMaker() {
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);
  tableHead.textContent = 'time total';
  let totalHours;
  let theTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    totalHours = 0;
    for (let j = 0; j < stores.length; j++) {
      totalHours+= stores[j].cookieAverage[i];
      theTotal+=stores[j].cookieAverage[i];
    }
    let footerHead=document.createElement('th');
    tableRow.appendChild(footerHead);
    footerHead.textContent=totalHours;
  }
  let lastTableTotal=document.createElement('th');
  tableRow.appendChild(lastTableTotal);
  lastTableTotal.textContent=theTotal;
}
headerMaker();
for (let i = 0; i < stores.length; i++) {
  stores[i].multiply();
  stores[i].render();
}
footerMaker();

















/*
let stores=[];
function MakingTables(name, minCustomer, maxCustomer, avgCookieSale)
{
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.array=[];
    
    this.total=0;
    
    stores.push(this);

}

MakingTables.prototype.randomCustomer= function ()
{
    for (let i = 0; i < hours.length; i++)
    {
        this.randomCustomer.push(randomNumber(this.minCustomer, this.maxCustomer));
    }
    
};
MakingTables.prototype.avgCookies= function ()
{
    for (let i = 0; i < this.randomCustomer.length; i++)
    {   let multiply= this.randomCustomer[i]*this.avgCookieSale;
        multiply=Math.floor(multiply);
        this.randomAverage.push(multiply);
        this.total=this.total+this.randomAverage[i];
    } 
    
};
MakingTables.prototype.render= function()
{
    let theRow = document.createElement('tr');
    table.appendChild(theRow);
    let tableData = document.createElement('td');
    theRow.appendChild(tableData);
    tableData.textContent = this.name;
  
    for (let i = 0; i < hour.length; i++) {
      let tableData2 = document.createElement('td');
      shopeRow.appendChild(tableData2);
  
      tableData2.textContent = `${this.array[i]}`;
  
    }
    let totalTable = document.createElement('td');
    theRow.appendChild(totalTable);
    totalTable.textContent = `${this.total}`;
  };

let main = document.getElementById('tablers');
let table = document.createElement('table');
main.appendChild(table);

function headerMaker() {
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent = 'name';

  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent = hours[i];

  }
  let totalHeader = document.createElement('th');
  tableRow.appendChild(totalHeader);
  totalHeader.textContent = 'location total';
}

// function Table()
// {   
//     let theTable = document.createElement('table');
//     parent.appendChild(theTable);
//     let headRow=document.createElement('tableRow');
//     theTable.appendChild(headRow);
//     for(let i=0; i<hours.length;i++)
//     {
//         let tableHead=document.createElement("tableHeader");
//         headRow.appendChild(theTable);
//         tableHead.textContent=hours[i];
//     }
// }


function makingFoter() {
    let foterRow = document.createElement('tr');
    table.appendChild(foterRow);
    let fTh = document.createElement('th');
    foterRow.appendChild(fTh);
    fTh.textContent = 'Total';
    let totalEachHour;
    let finaltotal = 0;
    for (let i = 0; i < hours.length; i++) {
      totalEachHour = 0;
      for (let j = 0; j < stores.length; j++) {
        totalEachHour+= branches[j].perHourArray[i];
        finaltotal+=branches[j].perHourArray[i];
        
      }
      let foterTh=document.createElement('th');
      foterRow.appendChild(foterTh);
      foterTh.textContent=totalEachHour;
      
    }
    let allTotalTh=document.createElement('th');
    foterRow.appendChild(allTotalTh);
    allTotalTh.textContent=finaltotal;
    
    
  }
  headerMaker();
  for (let i = 0; i < stores.length; i++) {
    stores[i].perHour();
  
    stores[i].render();
  }
  makingFoter();
  



  headerMaker();
  for (let i = 0; i < stores.length; i++) {
    stores[i].perHour();
  
    stores[i].render();
  }
  makingFoter();


let seatle= new MakingTables('seatle',23,65,6.3);
let tokyo= new MakingTables('tokyo',3,24,1.2);
let dubai= new MakingTables('dubai',11,38,3.7);
let paris= new MakingTables('paris',20,38,2.3);
let lima= new MakingTables('lima',2,16,4.6);
console.log(stores);




*/

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
            this.total=this.total+this.randomAverage[i];
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
            listItem.textContent=`${hours[i]} : ${this.randomAverage[i]} : cookies`;
            
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
            this.total=this.total+this.randomAverage[i];
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
            listItem.textContent=(`${hours[i]} : ${this.randomAverage[i]} : cookies`);
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
            this.total=this.total+this.randomAverage[i];
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
            listItem.textContent=`${hours[i]} : ${this.randomAverage[i]} : cookies`;
            
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
    avgCookieSale: 2.3, 
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
            this.total=this.total+this.randomAverage[i];
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
            listItem.textContent=(`${hours[i]} : ${this.randomAverage[i]} : cookies`);
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
            this.total=this.total+this.randomAverage[i];
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