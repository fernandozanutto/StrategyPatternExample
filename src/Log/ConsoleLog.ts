import { LogStrategy } from ".";
import { ButtonInteraction } from "../ButtonInteraction";

export class ConsoleLog implements LogStrategy {

    logInformation(interaction: ButtonInteraction): void {
        const date = Date()
        console.log(`Log Date: [${date.substr(0, 24)}] - Button Action: [${interaction.actionStrategy}] - Button Log: [${interaction.logStrategy}]`)
    }

    public toString(): string {
        return "Console Log"
    }
    
}