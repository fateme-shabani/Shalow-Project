export default function LoginIllustration() {
  return (
    <div className="relative flex w-lg h-[544px] p-4">
      <img
        src="/images/login-illustration.png"
        alt=""
        className="max-w-full object-contain"
      />

      {/* Optional floating messages */}
      <div className="absolute right-10 top-32 rounded-full bg-white px-6 py-4 shadow-sm">
        ضمانت اصالت کالا
      </div>

      <div className="absolute bottom-32 left-10 rounded-full bg-white px-6 py-4 shadow-sm">
        ارسال سریع و رایگان
      </div>
    </div>
  );
}
