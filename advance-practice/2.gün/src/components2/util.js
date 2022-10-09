const paginate = (datadanGelen) => {
  const sayfadakiObjeSayisi = 10;
  const sayfaSayisi = Math.ceil(datadanGelen.length / sayfadakiObjeSayisi);

  const yerlesecekObjeler = Array.from({ length: sayfaSayisi }, (_, index) => {
    const baslangicAraligi = index * sayfadakiObjeSayisi;
    return datadanGelen.slice(
      baslangicAraligi,
      baslangicAraligi + sayfadakiObjeSayisi
    );
  });
  return yerlesecekObjeler;
};
export default paginate;

/* 
oluşacak yapı:

[
  {a0,a1,a2,a3,a4,a5,a6,a7,a8,a9},
  {a10,a11,a12,a13,a14,a15,a16,a17,a18,a19},
  {a20,a21,a22,a23,a24,a25,a26,a27,a28,a29},
  {a30,a31,a32,a33,a34,a35,a36,a37,a38,a39},
  {a40,a41,a42,a43,a44,a45,a46,a47,a48,a49},
  {a50,a51,a52,a53,a54,a55,a56,a57,a58,a59},
  {a60,a61,a62,a63,a64,a65,a66,a67,a68,a69},
  {a70,a71,a72,a73,a74,a75,a76,a77,a78,a79},
  {a80,a81,a82,a83,a84,a85,a86,a87,a88,a89},
  {a90,a91,a92,a93,a94,a95,a96,a97,a98,a99}
]

*/
