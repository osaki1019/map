import "./styles.css";

export default function App() {
  /*
  map関数
  mapメソッドは与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する
  */
  const list = [1, 2, 3, 4];
  return (
    <div className="App">
      <h1>mpa関数</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
    </div>
  );
}
