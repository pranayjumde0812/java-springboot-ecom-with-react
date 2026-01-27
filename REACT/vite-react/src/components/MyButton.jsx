function MyButton({ actionName, onClick }) {
  return (
    <>
      <button onClick={onClick}>{actionName}</button>
    </>
  );
}

export default MyButton;
