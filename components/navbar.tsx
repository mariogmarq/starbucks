export default function Navbar() {
  return (
    <div class="w-screen border-b-2 border-gray-400 border-opacity-50">
      <div class="my-6 flex content-center">
        <div class="ml-24 mr-3">
          <img src="logo.svg" class="w-[51px] h-[51px]" />
        </div>

        <div class="flex w-[1440px] items-center text-sm">
          <div class="flex">
            <p class="mx-2 font-bold hover:text-[#006241] hover:cursor-pointer">
              <strong>MENU</strong>
            </p>
            <p class="mx-2 font-bold hover:text-[#006241] hover:cursor-pointer">
              <strong>REWARDS</strong>
            </p>
            <p class="mx-2 font-bold hover:text-[#006241] hover:cursor-pointer">
              <strong>GIFT CARD</strong>
            </p>
          </div>

          <div class="flex items-center ml-auto hover:text-[#006241] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="fill-current"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              style="width:32px;height:32px;overflow:visible;fill:currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5">
              </path>
            </svg>
            <p class="ml-2">Find a store</p>
          </div>

          <p class="ml-5 px-3 py-1 border-black border-1 rounded-2xl font-bold hover:cursor-pointer hover:bg-gray-100">
            Sign In
          </p>
          <p class="ml-5 px-3 py-1 border-black border-1 rounded-2xl font-bold text-white bg-black hover:cursor-pointer hover:bg-gray-800">
            Join Now
          </p>
        </div>
      </div>
    </div>
  );
}
