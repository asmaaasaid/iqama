export default function Countdown({ prayer, remainingTime }) {
  return (
    <div>
      <h3>Remains until the {prayer.name} prayer</h3>
      <span>{remainingTime}</span>
    </div>
  );
}