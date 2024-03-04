import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col bg-lime-500/25 backdrop-blur-sm">
      <hr className="border-lime-500 w-full" />

      <div className="flex items-center justify-between p-5">
        <span className="text-white font-vcr text-base">Tous droits réservés ©</span>
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com/ouest-lab" target="_blank">
            <Image
              className="hover:opacity-50 transition-all"
              width={20}
              height={20}
              src="/img/icon-x.svg"
              alt="bg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;