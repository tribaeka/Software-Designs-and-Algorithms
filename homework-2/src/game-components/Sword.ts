import { Weapon } from './Weapon';

const SWORD_DEFAULT_NAME = 'sword'

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(SWORD_DEFAULT_NAME, baseDamage, baseDurability, value, weight);
    }

    public polish() {
        if (this.getDamageModifier() < 0.25) {
            this.setDamageModifier(this.getDamageModifier() + this.MODIFIER_CHANGE_RATE);
        }
    }
}
