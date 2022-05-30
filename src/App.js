import "./App.css";
import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
const emojiList = [..."⚽🌎🍇🎱👨‍💻📷🖥⏳🏝🍔🌧😎🌮🌯"];
const App = () => {
  const [shuffledMemoBlock, setShuffledMemoBlock] = useState([]);

  useEffect(() => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlock(
      shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false }))
    );
  }, []);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  return <Board memoBlocks={shuffledMemoBlock} />;
};

export default App;
