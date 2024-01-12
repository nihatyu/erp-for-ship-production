import { remarks } from "@/app/placeholder-data";

export default function Page() {
  return (
    <div className="container mx-auto my-8 dark:text-black">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Remark List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead className=" text-base font-bold bg-orange-200 justify-center text-center items-center ">
            <tr>
              <th className="py-2 px-4 border-l border-r border-b">
                Proje Adı
              </th>
              <th className="py-2 px-4 border-r border-b">Tipi</th>
              <th className="py-2 px-4 border-r border-b">Konusu</th>
              <th className="py-2 px-4 border-r border-b">Numarası</th>
              <th className="py-2 px-4 border-r border-b">Yöneticisi</th>
              <th className="py-2 px-4 border-r border-b">Yazari</th>
              <th className="py-2 px-4 border-r border-b">Başlığı</th>
              <th className="py-2 px-4 border-r border-b">Açıklama</th>
              <th className="py-2 px-4 border-r border-b">Oluşturma Tarihi</th>
              <th className="py-2 px-4 border-r border-b">Hedef Tarih</th>
              <th className="py-2 px-4 border-r border-b">Durum</th>
            </tr>
          </thead>
          <tbody>
            {remarks.map((remark, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-2 px-4 border-l border-r ">
                  {remark.projeAdi}
                </td>
                <td className="py-2 px-4 border-r">{remark.tipi}</td>
                <td className="py-2 px-4 border-r">{remark.konusu}</td>
                <td className="py-2 px-4 border-r">{remark.numarasi}</td>
                <td className="py-2 px-4 border-r">{remark.yoneticisi}</td>
                <td className="py-2 px-4 border-r">{remark.yazari}</td>
                <td className="py-2 px-4 border-r">{remark.basligi}</td>
                <td className="py-2 px-4 border-r">{remark.aciklama}</td>
                <td className="py-2 px-4 border-r">
                  {remark.olusturulmaTarihi}
                </td>
                <td className="py-2 px-4 border-r">{remark.hedefTarih}</td>
                <td className="py-2 px-4 border-r">{remark.durum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
