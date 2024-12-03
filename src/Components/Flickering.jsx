import { useEffect, useState } from "react";

const Flickering = ({ initial, chars, mainPause, subPause }) => {
  const [flickeringText, setFlickeringText] = useState(initial); // Initial text is 'D'

  useEffect(() => {
    let timeoutId;

    // Function to change text
    const changeText = (currentText) => {
      const currentIndex = chars.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % chars.length;
      return chars[nextIndex];
    };

    // Handle text flickering logic
    const startFlickering = () => {
      if (flickeringText === initial) {
        timeoutId = setTimeout(() => {
          setFlickeringText(changeText(flickeringText));
          startFlickering(); // Continue the flickering
        }, mainPause); // "D" stays for 1 second
      } else {
        timeoutId = setTimeout(() => {
          setFlickeringText(changeText(flickeringText));
          startFlickering(); // Continue the flickering
        }, subPause); // Other characters stay for 100ms
      }
    };

    startFlickering();

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, [flickeringText]);

  return <span className="main-font">{flickeringText}</span>;
};

export default Flickering;
