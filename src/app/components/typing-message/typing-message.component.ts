import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-message',
  templateUrl: './typing-message.component.html',
  styleUrls: ['./typing-message.component.scss'],
})
export class TypingMessageComponent {
  constructor() {}

  text = '';
  showCursor = true;

  ngAfterContentInit() {
    const phrases = [
      'Welcome to my website!',
      'Stick around to learn more about me.',
      'Take care of yourself now. :)',
    ];

    const cursorBlinkTime = 400;
    const cursorCheckTime = cursorBlinkTime / 2;

    let charIndex = 0;
    let deleting = false;
    let phraseIndex = 0;
    let repeat = true;
    let cursorTimer = cursorBlinkTime;

    const updateCursor = () => {
      cursorTimer -= cursorCheckTime;
      console.log(this.showCursor);
      if (cursorTimer <= 0) {
        this.showCursor = !this.showCursor;
        cursorTimer = cursorBlinkTime;
      }
      setTimeout(() => updateCursor(), cursorCheckTime);
    };

    const updateText = () => {
      let wait = 25 + 75 * Math.random();

      if (deleting) {
        this.text = this.text.substring(0, this.text.length - 1);
        if (charIndex === 0) {
          deleting = !deleting;
          phraseIndex++;
          wait += 500;
        } else {
          charIndex--;
          cursorTimer = cursorBlinkTime;
          this.showCursor = true;
        }
      } else {
        this.text += phrases[phraseIndex][charIndex];
        if (charIndex === phrases[phraseIndex].length - 1) {
          deleting = !deleting;
          wait += 1500;
          if (phraseIndex == phrases.length - 1) {
            repeat = false;
          }
        } else {
          charIndex++;
          cursorTimer = cursorBlinkTime;
          this.showCursor = true;
        }
      }

      if (repeat) {
        setTimeout(() => updateText(), wait);
      }
    };

    updateCursor();
    updateText();
  }
}
