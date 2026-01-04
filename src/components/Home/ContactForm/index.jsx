import React from "react";

export const ContactForm = () => {
  return (
    <div className="max-w-xl">
      <h3 className="text-primary mb-2 text-center text-2xl font-semibold">
        KẾT NỐI & CHIA SẺ
      </h3>

      <p className="text-primary/60 mb-6 text-center">
        Mỗi hành trình đều bắt đầu từ một cuộc trò chuyện. Nếu bạn có thắc mắc
        hoặc hứng thú với những câu chuyện của Ngọc Sương, hãy để lại lời nhắn —
        chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
      </p>

      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="text-primary mb-1 block text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="bg-primary border-CTA w-full border-2 px-4 py-3 text-sm text-white outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-primary mb-1 block text-sm font-semibold">
            Số điện thoại (optional)
          </label>
          <input
            type="text"
            placeholder="0123 456 789"
            className="bg-primary border-CTA w-full border px-4 py-3 text-sm text-white outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-primary mb-1 block text-sm font-semibold">
            Nội dung
          </label>
          <textarea
            rows={4}
            placeholder="Chia sẻ nhu cầu hoặc ý tưởng hợp tác của bạn..."
            className="bg-primary border-CTA w-full resize-none border px-4 py-3 text-sm text-white outline-none"
          />
        </div>

        {/* Button */}
        <center>
          <button
            type="button"
            className="bg-CTA l mt-4 w-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Gửi thông tin
          </button>
        </center>
      </form>
    </div>
  );
};
