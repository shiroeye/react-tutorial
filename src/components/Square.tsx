export default function Square(props: { value: number }) {
  console.log(props);

  return <button className="square">{props.value}</button>;
}
