export const CardSGM = () => {
  return (
    <div className="group relative cursor-pointer overflow-hidden">
      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Bếp Ngọc Sương"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex w-full flex-col justify-end text-white">
        <div className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {/* TITLE + ARROW (FLEX + BG) */}
          <div className="mb-4 flex w-full items-center gap-4 bg-black/60 px-4 py-3">
            <h3 className="text-sm leading-snug font-semibold tracking-wide uppercase">
              BẾP NGỌC SƯƠNG ĐƯỢC NÂNG CẤP
            </h3>
          </div>

          {/* LIST */}
          <ul className="space-y-2 p-2 text-sm text-white">
            <li>Menu individual</li>
            <li>Phong cách trình bày hiện đại</li>
            <li>Chọn lọc các món đặc sắc từ bếp NS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
