"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";
import { remarks } from "@/app/placeholder-data";

const pageSize = 10; // Sayfa başına kaç eleman gösterileceği

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredRemarks = remarks.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <div className="container mx-auto my-8 dark:text-black">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Remark Listesi
      </h1>

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
              <th className="py-2 px-4 border-r border-b">Yazarı</th>
              <th className="py-2 px-4 border-r border-b">Başlığı</th>
              <th className="py-2 px-4 border-r border-b">Açıklama</th>
              <th className="py-2 px-4 border-r border-b">Oluşturma Tarihi</th>
              <th className="py-2 px-4 border-r border-b">Hedef Tarih</th>
              <th className="py-2 px-4 border-r border-b">Durum</th>
            </tr>
          </thead>
          <tbody>
            {filteredRemarks.map((remark, index) => (
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
      <ReactPaginate
        className="flex flex-row justify-center items-center"
        previousLabel={"Önceki"}
        nextLabel={"Sonraki"}
        breakLabel={"..."}
        pageCount={Math.ceil(remarks.length / pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex space-x-2"}
        previousLinkClassName={"p-3 mx-2 my-5 bg-blue-500 text-white rounded"}
        nextLinkClassName={"p-3 mx-2 my-5 bg-blue-500 text-white rounded"}
        pageClassName={"p-3 mx-1 my-5 bg-gray-300 text-black rounded"}
        breakClassName={"p-3 mx-2 my-5 bg-gray-300 text-black rounded"}
        activeClassName={"p-3 mx-2 my-5 bg-green-500 text-white rounded"}
      />
    </div>
  );
}
