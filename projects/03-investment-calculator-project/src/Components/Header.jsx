export default function Header({ text , img }) {
  return (
    <div>
      <header id="header">
        <img src= {img} alt="Investment Calculator Logo"/>
        <h1>{text}</h1>
      </header>
    </div>
  );
}