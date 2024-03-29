"use client";
export default function Share({ destination }: { destination: string }) {
  return (
    <button
      className="bg-red-800 text-white shadow-md rounded-lg px-4 py-2 text-sm"
      onClick={async () => {
        if (navigator.share) {
          await navigator.share({
            title: `Guincho para ${decodeURI(destination)}`,
            text: `Valor do frete de um guincho para ${decodeURI(destination)}`,
            url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/${destination}`,
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
