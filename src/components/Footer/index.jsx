export const Footer = () => {
  return (
    <footer className="bg-primary text-[#eaeaea]">
      {/* Top */}
      <div className="container">
        <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Logo */}
          <div className="">
            <img src="/images/NS_Logo2.svg" alt="Logo" className="w-35" />
          </div>

          {/* Về chúng tôi */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Về chúng tôi
            </h4>
            <ul className="space-y-2 text-sm text-[#cfcfcf]">
              <li className="cursor-pointer hover:text-white">Giới thiệu</li>
              <li className="cursor-pointer hover:text-white">
                Tầm nhìn & Sứ mệnh
              </li>
              <li className="cursor-pointer hover:text-white">Đội ngũ</li>
            </ul>
          </div>

          {/* Bất động sản */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Bất động sản
            </h4>
            <ul className="space-y-2 text-sm text-[#cfcfcf]">
              <li className="cursor-pointer hover:text-white">
                Exotel Yen Bay
              </li>
              <li className="cursor-pointer hover:text-white">
                Yen Bay Retreat
              </li>
            </ul>
          </div>

          {/* Dịch vụ ăn uống */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Dịch vụ ăn uống
            </h4>
            <ul className="space-y-2 text-sm text-[#cfcfcf]">
              <li className="cursor-pointer hover:text-white">Saigon Marina</li>
              <li className="cursor-pointer hover:text-white">Trai Mát</li>
              <li className="cursor-pointer hover:text-white">KingClam</li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Liên hệ
            </h4>
            <ul className="space-y-4 text-sm text-[#cfcfcf]">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="whitespace-nowrap">
                  Cam Lập, Tp. Cam Ranh, Khánh Hòa
                </span>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <span className="whitespace-nowrap">nsgroup@gmail.com</span>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="whitespace-nowrap">0778 727 894</span>
              </div>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#555] hover:border-white">
                {/* Instagram */}
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 7.4A2.9 2.9 0 119.1 12 2.9 2.9 0 0112 14.9zM17.3 6.7a1 1 0 11-1-1 1 1 0 011 1z" />
                </svg>
              </div>

              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#555] hover:border-white">
                {/* Facebook */}
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
                </svg>
              </div>

              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#555] hover:border-white">
                {/* X */}
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.2 2H21l-6.4 7.3L22 22h-6.9l-5.4-6.8L4 22H1.2l6.9-7.9L2 2h7l4.9 6.2L18.2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 border-t border-[#444] py-6 text-center text-sm text-[#bdbdbd]">
          © {new Date().getFullYear()} — Bản quyền thuộc về{" "}
          <span className="text-white">Ngoc Suong Group</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
