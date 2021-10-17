import { Item } from './Item';

export abstract class Weapon extends Item {
    public readonly MODIFIER_CHANGE_RATE = 0.05;
    private damageModifier = 0;
    private durabilityModifier = 0;

    protected constructor(
        name: string,
        private baseDamage: number,
        private baseDurability: number,
        value: number,
        weight: number
    ) {
        super(value, name, weight);
    }

    public getDamageModifier(): number {
        return this.damageModifier;
    }

    public setDamageModifier(damageModifier: number): void {
        this.damageModifier = damageModifier;
    }

    public getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    public setDurabilityModifier(durabilityModifier: number) {
        this.durabilityModifier = durabilityModifier;
    }

    public getBaseDamage(): number {
        return this.baseDamage;
    }

    public setBaseDamage(baseDamage: number): void {
        this.baseDamage = baseDamage;
    }

    public getBaseDurability(): number {
        return this.baseDurability;
    }

    public setBaseDurability(baseDurability: number): void {
        this.baseDurability = baseDurability;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public polish(): void {}

    public use(): string {
        if (this.isWeaponBroken()) {
            return `You can\'t use the ${this.getName()}`
        }

        const damageMessage = `You use the ${this.getName()}, dealing ${this.getDamage()} point of damage.`;
        this.setBaseDurability(this.baseDurability - this.MODIFIER_CHANGE_RATE);

        if (this.isWeaponBroken()) {
            return `${damageMessage}\nThe ${this.getName()} breaks.`
        }

        return damageMessage;
    }

    public toString(): string {
        return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getBaseDurability()}%`;
    }

    private isWeaponBroken(): boolean {
        return this.getDurability() <= 0;
    }
}
