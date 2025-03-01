import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Krishnaa Nair",
  description: "A special message for Krishnaa Nair",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0B4D1F] text-white">
      <div className="relative flex flex-col items-center max-w-2xl w-full text-center px-4 py-8">
        {/* Emerald Image */}
        <div className="relative w-32 h-32 mb-8">
          <Image src="/emerald.png" alt="Emerald" width={128} height={128} className="animate-shine" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">you are awesome,</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">krishnaa nair</h2>

        <div className="space-y-4 text-left bg-black/10 p-6 rounded-lg backdrop-blur-sm">
          <p>
            Aishuuuuuuuu, i know i messed up da. i screamed when i should have listened, and i hurt you when all you did
            was understand me. i&apos;m genuinely sorry.
          </p>

          <p>
            eda the small things you do, the way you smile, the way you care, reminds me why i fell for you and when we
            are apart and i&apos;m missing you i closed my eyes all i see is you sitting next to me in the car in a green
            kurti from kanchipuram.
          </p>

          <p>
            you have no idea how much you mean to me, if i could i would trade my bones for emerald stone coz green is
            your favourite color and you deserve everything you love.
          </p>

          <p>
            i regret not asking you out sooner, but i felt i needed to be in a place where i can genuinely give you all
            the love and stability and peace you deserve. but obvi it&apos;s not just about me being ready, it&apos;s about us,
            about you feeling ready too. because see when i say i want you, i mean forever, i don&apos;t want anyone else,
            but you.
          </p>

          <p>
            you matter more than my ego, more than my fears and insecurities. i never mean to be self-absorbed. if i
            have made you feel unheard, i promise to do better.
          </p>

          <p>you see things clearer than i do, and you make better decisions than me, and i admire that.</p>

          <p>
            all i can ask is that you forgive me, not just for yesterday but for any moment i made you feel like
            anything less than the incredible person you are.
          </p>

          <p className="font-bold">please come back.</p>
        </div>

        <p className="text-lg italic mt-8">by Rahul Babu K</p>
      </div>
    </main>
  );
}
