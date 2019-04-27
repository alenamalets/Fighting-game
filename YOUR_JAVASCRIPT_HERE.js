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
    heroObj.name = name;
    input.value = null;
    if (!name) {
        alert('Name can not be empty!');
    } 
    this.displayStats(heroObj);
}

function fight(heroObj) {
    heroObj.health -= 2;
    this.displayStatsEnemy(heroObj);
}

displayStats(hero);
displayStatsEnemy(enemy);

