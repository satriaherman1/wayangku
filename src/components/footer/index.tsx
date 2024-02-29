import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer className={`${className} bg-slate-900 text-white pt-9 `}>
      <div className="container text-center mx-auto max-w-[480px] px-4">
        <h2 className="font-poppins text-2xl md:text-3xl">WayangKu</h2>
        <p className="mt-4 text-gray-400">
          WayangKu merupakan web untuk memperkenalkan budaya wayang kulit di
          Indonesia
        </p>

        <div className="flex mt-7 gap-x-6 justify-center">
          <a href="/" className="p-3 rounded-full border">
            <FaFacebookF />
          </a>
          <a href="/" className="p-3 rounded-full border">
            <FaInstagram />
          </a>
          <a href="/" className="p-3 rounded-full border">
            <FaTwitter />
          </a>
          <a href="/" className="p-3 rounded-full border">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="bg-slate-800 mt-16 font-poppins py-3 text-center">
        &copy; Copyright Satria Herman 2024
      </div>
    </footer>
  );
}
