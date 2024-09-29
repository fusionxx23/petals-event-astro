import { createSignal } from "solid-js";

export default function MobileMenu() {
  const [open, setOpen] = createSignal(false);
  const toggleMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <svg
        class="cursor-pointer md:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setOpen(true)}
      >
        <path
          d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
          fill="black"
        ></path>
      </svg>
      {open() && (
        <div class="fixed top-0 left-0 w-full h-full bg-[#F2B5D4] text-black z-50">
          <div
            class="flex justify-between p-2 px-4 items-center bg-[#F2B5D4]"
            id="nav"
          >
            <img
              src="https://i.ibb.co/7rRH8P1/image.png"
              class="w-28"
              alt="Petal Logo"
            />
            <button onClick={toggleMenu} class="text-black text-2xl">
              ✕
            </button>
          </div>
          <div class="flex flex-col items-center space-y-6 mt-10">
            <a href="#home" onClick={toggleMenu} class="text-xl">
              Home
            </a>
            <a href="#features" onClick={toggleMenu} class="text-xl">
              Features
            </a>
            <a href="#pricing" onClick={toggleMenu} class="text-xl">
              Pricing
            </a>
            <a href="#faq" onClick={toggleMenu} class="text-xl">
              FAQ
            </a>
            <button class="bg-[#4A051C] font-normal text-white w-[80%] py-3 rounded-xl">
              Message Us
            </button>
          </div>
        </div>
      )}
    </>
  );
}
