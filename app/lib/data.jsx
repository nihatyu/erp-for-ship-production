// Buradaki dataların tamamı fetch ile backend'den çekilebilir
export const projeler = ["NB001", "NB002"];
export const tipiSecenekleri = ["Klass", "Departman", "Armatör"];
export const konusuSecenekleri = [
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
export const yoneticiler = ["Ahmet", "Mehmet", "Niyazi"];
export const durumSecenekleri = [
  "Yazılmış",
  "Yayınlanmış",
  "Atanmış",
  "İşleme Alınmış",
  "Red Edilmiş",
  "Tamamlanmış",
  "Toplam",
];

// Eğer bir endpoint'e form data gönderilecek olsaydı bu şekilde yapılabilirdi
export const saveRemark = async (formData) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  const newRemark = {
    ...formData,
    numarasi: `${formData.projeAdi}-${formData.tipi}-${randomNum}`,
    olusturulmaTarihi: new Date().toLocaleDateString(),
  };

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
