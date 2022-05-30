import "./MemoBlock.css";

const MemoBlock = ({ memoBlock }) => {
  <div class="memo-block">
    <div
      className={`memo-block-inner ${
        memoBlock.flipped && "memo-block-flipped"
      }`}
    >
      <div class="memo-block-front"></div>
      <div class="memo-block-back">{memoBlock.emoji}</div>
    </div>
  </div>;
};

export default MemoBlock;
