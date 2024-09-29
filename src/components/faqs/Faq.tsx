import { createSignal } from "solid-js";

export default function Faq({ faq }: { faq: string }) {
  const [isOpen, setIsOpen] = createSignal(false);
  console.log(isOpen());
  return (
    <div
      onClick={() => {
        console.log("ClICKED");
        setIsOpen(!isOpen());
      }}
      class="border border-[#4A051C] bg-[#F7D6E0]/20 p-4 rounded-2xl cursor-pointer"
    >
      <div class="flex justify-between items-center">
        <h3 class="text-black font-medium">{faq}</h3>
        {isOpen() ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <g clip-path="url(#clip0_5_266)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3708 3.38892L10 12.3727L0.650833 3.38892L0 3.77579L10 13.3889L20 3.76954L19.3708 3.38892Z"
                fill="#2F5244"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_266">
                <rect
                  width="15"
                  height="20"
                  fill="white"
                  transform="matrix(0 1 -1 0 20 0.888916)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <g clip-path="url(#clip0_5_266)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3708 3.38892L10 12.3727L0.650833 3.38892L0 3.77579L10 13.3889L20 3.76954L19.3708 3.38892Z"
                fill="#2F5244"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_266">
                <rect
                  width="15"
                  height="20"
                  fill="white"
                  transform="matrix(0 1 -1 0 20 0.888916)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      {isOpen() && (
        <div class="mt-4 text-left text-gray-700">
          {/* Placeholder text, you can replace it with actual content */}
          <p>
            This is where the answer to the question will be placed. You can
            provide as detailed an answer as necessary.
          </p>
        </div>
      )}
    </div>
  );
}
