import React, { useEffect, useState } from 'react';
import './typing-text.scss';

export interface TypingTextProps {
  messages: string[];
  loop: boolean;
  className: string;
}

enum Action {
  TYPING,
  DELETING,
  WAITING_BEFORE_DELETING,
  WAITING_BEFORE_TYPING,
}

const blinkWait = 500;
const typeWait = 150;
const deleteWait = 150;
const doneDeletingPause = 1000;
const doneTypingPause = 2200;

export function TypingText({ messages, loop, className }: TypingTextProps) {
  let [text, setText] = useState<string>('');
  let [showCursor, setShowCursor] = useState<boolean>(true);
  let charIndex = 0,
    phraseIndex = 0,
    pause = 0,
    currentAction = Action.TYPING,
    repeat = true;

  useEffect(() => {
    animateTyping();
  }, []);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const animateTyping = async () => {
    while (repeat) {
      let wait = animateNextStep();
      await sleep(wait);
    }
  };

  const animateNextStep = (): number => {
    let wait = 0;
    // When actively editing the text, the cursor should not be blinking
    if (currentAction === Action.TYPING) {
      // Add char to current text
      let tempChar = charIndex;
      let tempPhrase = phraseIndex;
      setText((text) => text + messages[tempPhrase][tempChar]);

      if (charIndex === messages[phraseIndex].length - 1) {
        // We're done typing the current phrase

        currentAction = Action.WAITING_BEFORE_DELETING;

        if (phraseIndex === messages.length - 1) {
          // The last phrase was typed completely
          setShowCursor(true);

          if (loop) {
            phraseIndex = -1;
            pause = doneDeletingPause;
            wait = blinkWait;
          } else {
            repeat = false;
          }
        } else {
          pause = doneTypingPause;
          wait = blinkWait;
        }
      } else {
        // Keep typing
        charIndex++;
        setShowCursor(true);
        wait = typeWait;
      }
    } else if (currentAction === Action.DELETING) {
      // Remove last char
      setText((text) => text.substring(0, text.length - 1));

      if (charIndex === 0) {
        // Phrase deletion completed

        currentAction = Action.WAITING_BEFORE_TYPING;
        pause = doneDeletingPause;
        wait = blinkWait;
      } else {
        // Keep deleting
        charIndex--;
        wait = deleteWait;
        setShowCursor(true);
      }
    } else {
      if (pause > blinkWait) {
        setShowCursor((showCursor) => !showCursor);
        wait = blinkWait;
        pause -= wait;
      } else {
        wait = pause;
        pause = 0;
        setShowCursor(true);
        if (currentAction === Action.WAITING_BEFORE_TYPING) {
          currentAction = Action.TYPING;
          phraseIndex++;
        } else if (currentAction === Action.WAITING_BEFORE_DELETING) {
          currentAction = Action.DELETING;
        }
      }
    }

    return wait;
  };

  return (
    <div className="inline typing-text-container noselect">
      <div className={`inline ${className}`}>{text}</div>
      <div className={`inline typing-text-cursor ${className}`}>{showCursor ? '|' : ''}</div>
    </div>
  );
}

export default TypingText;
