import { Weapon } from './Weapon';

const BOW_DEFAULT_NAME = 'bow'

export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(BOW_DEFAULT_NAME, baseDamage, baseDurability, value, weight);
    }

    public polish() {
        if (this.getDurabilityModifier() < 1) {
            this.setDurabilityModifier(this.getDurabilityModifier() + this.MODIFIER_CHANGE_RATE);
        }
    }
}
