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
    const blinkTime = 450;
    const typeWait = 40;
    const deleteWait = 25;
    const emptySentenceWait = 300;
    const completeSentenceWait = 2000;

    let charIndex = 0;
    let deleting = false;
    let phraseIndex = 0;
    let repeat = true;
    let modifying = true;

    const updateCursor = () => {
      // When actively modifying the text, the cursor should not be blinking
      if (modifying) {
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
      let wait: number;
      modifying = true;

      if (deleting) {
        wait = deleteWait;

        // Remove last char
        this.text = this.text.substring(0, this.text.length - 1);

        if (charIndex === 0) {
          // Phrase deletion completed
          deleting = false;
          phraseIndex++;
          wait += emptySentenceWait;
          modifying = false;
        } else {
          charIndex--;
          this.showCursor = true;
        }
      } else {
        wait = typeWait;

        // Add char at the end
        this.text += phrases[phraseIndex][charIndex];

        if (charIndex === phrases[phraseIndex].length - 1) {
          // Phrase typing completed
          deleting = true;
          wait += completeSentenceWait;
          modifying = false;

          // If the last phrase was typed completely, stop loop
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
