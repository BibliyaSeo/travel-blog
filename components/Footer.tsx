export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto flex flex-wrap px-5 py-10 flex-col sm:flex-row items-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-cente text-gray-900">
            <span className="ml-3 text-xl my-english-font4 text-gray-700">Life, New</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 my-english-font3">
            © 2022 BibliyaSeo —
            <a
              href="https://www.instagram.com/only_yur/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @only_yur
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
