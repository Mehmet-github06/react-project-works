
const Color = ({hex, setHex}) => {

  const randomHex = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setHex(randomColor);
  };
  const copy = ()=>{
    navigator.clipboard.writeText(hex)
    alert("value copied")
  }

  return (
    <div className='App'>
      <h1>{hex}</h1>
      <button onClick={randomHex}>Click for new background</button>
      <button onClick={copy}>Copy the hex value</button>
    </div>
  );
};

export default Color;
