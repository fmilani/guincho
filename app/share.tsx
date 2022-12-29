"use client";
export default function Share() {
  return (
    <button
      className="bg-slate-500 text-white shadow-md rounded-lg px-4 py-2 text-sm"
      onClick={async () => {
        if (navigator.share) {
          await navigator.share({
            title: "Titulo aqui",
            text: "Texto aqui",
            url: "https://www.pelegoguincho.com.br",
          });
        } else {
          console.log("share not supported");
        }
      }}
    >
      COMPARTILHAR
    </button>
  );
}
