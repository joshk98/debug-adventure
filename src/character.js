/* eslint-disable func-names */
function Character(config) {
  this.name = config.name;
  this.health = config.health;
  this.maxHealth = config.maxHealth;
  this.dialogue = config.dialogue;
}

Character.prototype = {
  get isAlive() {
    return this.health > 0;
  },
};

Character.prototype._takeDamage = function (damage) {
  this.health -= damage;
  if (this.health < 0) {
    this.health = 0;
  }
};

Character.prototype._heal = function (potion) {
  this.health += potion;
  if (this.health > this.maxHealth) {
    this.health = this.maxHealth;
  }
};

Character.prototype.speak = function () {
  return this.dialogue;
};

module.exports = Character;
