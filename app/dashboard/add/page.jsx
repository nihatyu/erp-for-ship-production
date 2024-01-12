"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  saveRemark,
  projeler,
  tipiSecenekleri,
  konusuSecenekleri,
  yoneticiler,
  durumSecenekleri,
} from "@/app/lib/data";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projeAdi: "",
    tipi: "Klass",
    konusu: "Dizayn",
    yoneticisi: "",
    yazari: "",
    basligi: "",
    aciklama: "",
    hedefTarih: "",
    durum: "",
    ekDosya: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    await saveRemark(formData);
    router.push("/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <h1 className="text-2xl font-bold">Remark Ekle</h1>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Proje Adı</label>
            <select
              name="projeAdi"
              className="w-full dark:text-black p-2 border rounded"
            >
              {projeler.map((proje, index) => (
                <option key={index} value={proje}>
                  {proje}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Tipi</label>
            <select
              name="tipi"
              className="w-full dark:text-black p-2 border rounded"
            >
              {tipiSecenekleri.map((tip, index) => (
                <option key={index} value={tip}>
                  {tip}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Konusu</label>
            <select
              name="konusu"
              className="w-full dark:text-black p-2 border rounded"
            >
              {konusuSecenekleri.map((konusu, index) => (
                <option key={index} value={konusu}>
                  {konusu}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Yönetici</label>
            <select
              name="yoneticisi"
              className="w-full dark:text-black p-2 border rounded"
            >
              {yoneticiler.map((yonetici, index) => (
                <option key={index} value={yonetici}>
                  {yonetici}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Yazarı</label>
            <input
              type="text"
              name="yazari"
              className="w-full dark:text-black p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label>Başlığı</label>
            <input
              type="text"
              name="basligi"
              className="w-full dark:text-black p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Açıklama</label>
            <input
              type="text"
              name="aciklama"
              className="w-full dark:text-black p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label>Hedef Tarih</label>
            <input
              type="date"
              name="hedefTarih"
              className="w-full dark:text-black p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Durum</label>
            <select
              name="durum"
              className="w-full dark:text-black p-2 border rounded"
            >
              {durumSecenekleri.map((durum) => (
                <option key={durum} value={durum}>
                  {durum}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Ek Dosya</label>
            <input
              type="file"
              name="ekDosya"
              className="w-full dark:bg-white dark:text-black p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
