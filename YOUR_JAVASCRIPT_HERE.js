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
