import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public baseUrl: string = '../assets/img';
  public leftDice: string = `${this.baseUrl}/dice1.png`;
  public rightDice: string = `${this.baseUrl}/dice2.png`;
  public isRolling: boolean = false;
  public isPair: boolean = false;

  public rollDice(): void {
    let stop = 1;
    this.isRolling = true;

    const interval = setInterval(() => {
      const num1 = Math.floor(Math.random() * 6) + 1;
      const num2 = Math.floor(Math.random() * 6) + 1;
      this.leftDice = `${this.baseUrl}/dice${num1}.png`;
      this.rightDice = `${this.baseUrl}/dice${num2}.png`;
      stop++;
      if (stop > 10) {
        clearInterval(interval);
        this.isRolling = false;
        this.isPair = num1 === num2;
      }
    }, 200);
  }
}
