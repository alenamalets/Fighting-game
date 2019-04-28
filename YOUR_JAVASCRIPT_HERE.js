// Write your JS here

const hero = {
    name: 'Samurai',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type:'dagger',
        damage: 2
    }
};

const enemy = {
    name: 'Enemy',
    heroic: false,
    inventory: [],
    health: 10,
    weapon: {
        type:'sword',
        damage: 2
    }
};

function rest(heroObj) {
    if (heroObj.health === 10) {
        alert('Health property of that object already has the value 10!');
    }
    else {
        heroObj.health = 10
    }
    return heroObj;
}

function pickUpItem(heroObj, weaponObj) {
    heroObj.inventory.push(weaponObj);
}

function equipWeapon(heroObj) {
    if(heroObj.inventory.length === 0) {
        return null;
    }
    else {
        heroObj.weapon = heroObj.inventory[0];
    }
}

function displayStats(heroObj) {
    const name = `<b>Name:</b> ${heroObj.name}`;
    const health = `<b>Health:</b> ${heroObj.health}`;
    const type = `<b>Weapon type:</b> ${heroObj.weapon.type}`;
    const damage = `<b>Weapon damage:</b> ${heroObj.weapon.damage}`;
    const div = document.getElementById('hero-block');
    div.innerHTML = `${name}<br>${health}<br>${type}<br>${damage}`;
    
}
function displayStatsEnemy(heroObj) {
    const name = `<b>Name:</b> ${heroObj.name}`;
    const health = `<b>Health:</b> ${heroObj.health}`;
    const type = `<b>Weapon type:</b> ${heroObj.weapon.type}`;
    const damage = `<b>Weapon damage:</b> ${heroObj.weapon.damage}`;
    const div = document.getElementById('enemy-info');
    div.innerHTML = `${name}<br>${health}<br>${type}<br>${damage}`;
    
}

function changeName(heroObj) {
    const input = document.getElementById('name');  
    const name = input.value;
    
    input.value = null;
    if (!name) {
        alert('Name can not be empty!');
        return null;
    } 
    if (name.length >25) {
        alert('Name is too long!');
        return null;
    } 
    heroObj.name = name;
    this.displayStats(heroObj);
}

// function fight(heroObj) {
//     heroObj.health -= 2;
//     if(heroObj.health < 0) {
//         alert("Enemy is dead!");
//         return null;
//     }
//     this.displayStatsEnemy(heroObj);
    
// }

function randomNumber() {
    const arr = [];
    for (let i = 0; i < 2; i++) {
        const random = Math.floor(Math.random()*3);
        arr.push(random);
    }
    return arr;   
}

function fourArr() {
    if (hero.health === 0 || enemy.health === 0) {
        return null;
    }
    const myKicks = randomNumber();
    const enemyBlocks = randomNumber();
    const enemyKicks = randomNumber();
    const myBlocks = randomNumber();
    const fightResult = document.getElementById('fight-result');
    fightResult.innerHTML = ''; 
    for (let i = 0; i < myKicks.length; i++) {
        const p = document.createElement('p');
        fightResult.appendChild(p);
        if (myKicks[i] === enemyBlocks[i]) {
            p.innerHTML = `<span style="color: red;">Kick ${returnBodyPart(myKicks[i])} &#x2192; Block ${returnBodyPart(enemyBlocks[i])}</span>`;
        }
        else { 
            p.innerHTML = `<span style="color: green;">Kick ${returnBodyPart(myKicks[i])} &#x2192; Block ${returnBodyPart(enemyBlocks[i])}</span>`;
            enemy.health -=2;
            if ( enemy.health < 0) {
                enemy.health = 0;
            }
           
        }
    }   
    for (let i = 0; i < enemyKicks.length; i++) {
        const p = document.createElement('p');
        fightResult.appendChild(p);
        if (enemyKicks[i] === myBlocks[i]) {
            p.innerHTML = `<span style="color: red;">Block ${returnBodyPart(myBlocks[i])} &#x2190; Kick ${returnBodyPart(enemyKicks[i])}</span>`;
        }
        else { 
            p.innerHTML = `<span style="color: green;">Block ${returnBodyPart(myBlocks[i])} &#x2190; Kick ${returnBodyPart(enemyKicks[i])}</span>`;
            hero.health -=2;
            if ( hero.health < 0) {
                hero.health = 0;
            }
            

        }
    } 
    const heroFight = document.getElementById('hero-fight');
    const enemyFight = document.getElementById('enemy-fight');
    displayStatsEnemy(enemy);
    displayStats(hero);

    if (hero.health === 0 && enemy.health === 0) {
        heroFight.setAttribute("style", "background-color: #E0665E;");
        enemyFight.setAttribute("style", "background-color: #E0665E;");
        // alert('Draw');
        return null;
       
    }
    else if (hero.health === 0) {
        heroFight.setAttribute("style", "background-color: #E0665E;");
        // alert('Enemy win');
        return null;
    }
    else if (enemy.health === 0) {
        enemyFight.setAttribute("style", "background-color: #E0665E;");
        // alert('You win');
        return null;
    }
    
}

function returnBodyPart(i) {
    switch (i) {
        case 0:
            return 'head';
            break;
        case 1:
            return 'body';
            break;
        case 2:
            return 'legs';
            break;
        default:
            break;
    }
}

displayStats(hero);
displayStatsEnemy(enemy);



