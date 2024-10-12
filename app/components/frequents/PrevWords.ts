const PrevWords = (event: any) => {
  const key = event.key;
  if (key.match(/[a-zA-Z]/)) {
    event.preventDefault();
  }
};

export default PrevWords;