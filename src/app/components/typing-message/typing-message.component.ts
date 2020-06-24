import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-typing-message',
  templateUrl: './typing-message.component.html',
  styleUrls: ['./typing-message.component.scss'],
})
export class TypingMessageComponent implements AfterContentInit {
  constructor() {}

  text = '';
  showCursor = true;

  ngAfterContentInit() {
    const phrases = [
      'Welcome to my website!',
      "I hope you're doing okay in these hard times.",
      'Take care of yourself now. :)',
    ];
    const blinkTime = 400;

    let charIndex = 0;
    let deleting = false;
    let phraseIndex = 0;
    let repeat = true;
    let typing = true;

    const updateCursor = () => {
      if (typing) {
        this.showCursor = true;
      } else {
        this.showCursor = !this.showCursor;
      }
      if (repeat) {
        setTimeout(() => updateCursor(), blinkTime);
      } else {
        this.showCursor = false;
      }
    };

    const updateText = () => {
      let wait = 20 + 60 * Math.random();
      typing = true;

      if (deleting) {
        // Remove last char
        this.text = this.text.substring(0, this.text.length - 1);

        // Phrase deleted
        if (charIndex === 0) {
          deleting = !deleting;
          phraseIndex++;
          wait += 300;
          typing = false;
        } else {
          charIndex--;
          this.showCursor = true;
        }
      } else {
        // Add char at the end
        this.text += phrases[phraseIndex][charIndex];

        // Phrase typed out completely
        if (charIndex === phrases[phraseIndex].length - 1) {
          deleting = !deleting;
          wait += 1500;
          typing = false;

          // If the last phrase was typed completely, stop
          if (phraseIndex === phrases.length - 1) {
            repeat = false;
          }
        } else {
          charIndex++;
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
