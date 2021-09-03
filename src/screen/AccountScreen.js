export default function AccountScreen() {
  return (
    <div className="w-full mr-auto h-auto px-10">
      <div>
        <h3>Welcome Back 👋 </h3>
        <h4 className="text-4xl">As'ad Saleh Umar</h4>

        <h3 className="mt-2">Saldo</h3>
        <h4 className="">Rp 5.000.000.000</h4>

        <h3 className="mt-5">Pembelian Terakhir:</h3>
        <RiwayatPembelianCard />
        <RiwayatPembelianCard />
        <RiwayatPembelianCard />
      </div>
    </div>
  );
}

function RiwayatPembelianCard({ price, title, date }) {
  return (
    <div className="flex items-center justify-between p-4 m-1 shadow-lg rounded-xl">
      <div>
        <p className="">HG MEsser Type C 1/144 Scale Gunpla ModelKit</p>
        <p className="text-sm">21 Februari 2021</p>
      </div>
      <p>Rp340000</p>
    </div>
  );
}
