// 親コンポーネントから渡されるpropsの型を定義
interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

export default function Square(props: SquareProps) {
  const { value, onSquareClick } = props;

  //   const [value, setValue] = useState("");

  //   const onSquareClick = useCallback(() => {
  //     //...
  //   }, []);
  //   console.log(props);

  return (
    // <button className="square" onClick={handleClick}>
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
/* Note
    In React, it’s conventional to use "onSomething" names for props which represent events
    and "handleSomething" for the function definitions which handle those events.

*/
