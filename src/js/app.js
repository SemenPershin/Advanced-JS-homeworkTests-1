// TODO: write your code here

 export function healthStatus (objCharacter) {
    if (objCharacter.health > 50) {
        return "healthy"
    };
    if (objCharacter.health <= 50 && objCharacter.health > 15) {
        return "wounded"
    };
    if (objCharacter.health <= 15) {
        return "critical"
    };
}


