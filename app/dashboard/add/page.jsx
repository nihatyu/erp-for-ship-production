"use client";

import { useState } from "react";

export default async function Page() {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const randomNum = Math.floor(Math.random() * 100) + 1;

    const newRemark = {
      ...formData,
      numarasi: `${formData.projeAdi}-${formData.tipi}-${randomNum}`,
      olusturulmaTarihi: new Date().toLocaleDateString(),
    };

    // API çağrısı yaparak veriyi sunucuya gönderin
    try {
      const response = await fetch("/api/saveRemark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRemark),
      });

      if (response.ok) {
        console.log("Remark başarıyla kaydedildi.");
        // İsteğe bağlı olarak başka bir işlem yapabilirsiniz.
      } else {
        console.error("Remark kaydedilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("API çağrısı sırasında bir hata oluştu:", error);
    }
  };

  const projeler = ["NB001", "NB002"];
  const tipiSecenekleri = ["Klass", "Departman", "Armatör"];
  const konusuSecenekleri = [
    "Dizayn",
    "Planlama",
    "İç Satınalma",
    "Teknik Satınalma",
    "Atölye",
    "Üretim Çelik",
    "Boru",
    "Üretim Elektrik",
    "Üretim Teçhizat",
    "Yaşam Mahali",
    "Departman",
    "İş Güvenliği",
  ];
  const yoneticiler = ["Ahmet", "Mehmet", "Niyazi"];
  const durumSecenekleri = [
    "Yazılmış",
    "Yayınlanmış",
    "Atanmış",
    "İşleme Alınmış",
    "Red Edilmiş",
    "Tamamlanmış",
    "Toplam",
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold">Remark Ekle</h1>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Proje Adı</label>
            <select name="projeAdi" className="w-full p-2 border rounded">
              {projeler.map((proje) => (
                <option key={proje} value={proje}>
                  {proje}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Tipi</label>
            <select name="tipi" className="w-full p-2 border rounded">
              {tipiSecenekleri.map((tip) => (
                <option key={tip} value={tip}>
                  {tip}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Konusu</label>
            <select name="konusu" className="w-full p-2 border rounded">
              {konusuSecenekleri.map((konusu) => (
                <option key={konusu} value={konusu}>
                  {konusu}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Yönetici</label>
            <select name="yoneticisi" className="w-full p-2 border rounded">
              {yoneticiler.map((yonetici) => (
                <option key={yonetici} value={yonetici}>
                  {yonetici}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Yazari</label>
            <input
              type="text"
              name="yazari"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label>Başlığı</label>
            <input
              type="text"
              name="basligi"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Açıklama</label>
            <input
              type="text"
              name="aciklama"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label>Hedef Tarih</label>
            <input
              type="text"
              name="hedefTarih"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label>Durum</label>
            <select name="durum" className="w-full p-2 border rounded">
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
              type="text"
              name="ekDosya"
              className="w-full p-2 border rounded"
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
