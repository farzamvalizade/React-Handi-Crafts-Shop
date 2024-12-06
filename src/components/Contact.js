import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <div className="container mx-auto py-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-purple-700 tracking-tight drop-shadow-md">
            ارتباط با ما
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
            سوالی دارید؟ از طریق فرم زیر با ما در ارتباط باشید یا از راه‌های دیگر پیام بدهید.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <form className=" p-8 rounded-3xl  space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">نام شما</label>
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">ایمیل</label>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">پیام</label>
              <textarea
                placeholder="پیام خود را بنویسید"
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-purple-700 transition-all duration-300"
            >
              ارسال پیام
            </button>
          </form>

          {/* اطلاعات تماس */}
          <div className="space-y-8 text-right">
            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-purple-500 text-3xl"></i>
              <div>
                <h3 className="text-lg font-bold">شماره تماس</h3>
                <p className="text-gray-600" dir="ltr">+98 912 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-purple-500 text-3xl"></i>
              <div>
                <h3 className="text-lg font-bold">ایمیل</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-map-marker-alt text-purple-500 text-3xl"></i>
              <div>
                <h3 className="text-lg font-bold">آدرس</h3>
                <p className="text-gray-600">ایران</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 space-x-reverse">
              <a
                href="/"
                className="text-purple-500 text-3xl hover:text-purple-700 transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="/"
                className="text-purple-500 text-3xl hover:text-purple-700 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="/"
                className="text-purple-500 text-3xl hover:text-purple-700 transition-all duration-300"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
