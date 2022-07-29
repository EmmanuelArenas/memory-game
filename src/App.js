import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
const emojiList = [..."💣🧤🎩🌮🎱🌶🍕🦖"];

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  // Se guarda cual es el bloque seleccionado
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  // para que el usuario no haga click en mas bloques
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(
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

  const handleMemoClick = (memoBlock) => {
    let count
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
      console.log(selectedMemoBlock);
      count ++;
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1>Memory Game</h1>
      <button className="btn" onClick={() => window.location.reload()}>
        <span>Refresh</span>
      </button>
      <Board
        memoBlocks={shuffledMemoBlocks}
        animating={animating}
        handleMemoClick={handleMemoClick}
      />
    </div>
  );
};

export default App;
