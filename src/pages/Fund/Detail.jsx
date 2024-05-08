export default function Detail() {
  return (
    <div className="flex justify-center">
      <div className="max-w-primary m-4 w-full sm:m-6">
        <ul className="list-inside list-disc">
          <li>Judul: Donasi Kwek wek</li>
          <li>Terkumpul: 7000</li>
          <li>Target: 10000</li>
          <li>Progress: 70%</li>
        </ul>
        <div className="mt-4">Donatur:</div>
        <ol className="list-inside list-decimal">
          <li>Sariffudin, 0x22xxxx, 26/11/24, 20ETH</li>
          <li>Asep, 0x33xxxx, 25/11/24, 11ETH</li>
          <li>Jokoting, 0x23xxxx, 02/10/24, 73ETH</li>
        </ol>
      </div>
    </div>
  );
}
