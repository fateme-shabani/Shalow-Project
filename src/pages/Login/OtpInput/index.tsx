import { useRef } from "react";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
};
export default function OtpInput({
  value,
  onChange,
  length = 6,
}: OtpInputProps) {
  const inputRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, inputValue: string) => {
    const digits = inputValue.replace(/\D/g, "");
    if (!digits) return;
    const otpArray = Array.from({ length }, (_, index) => value[index] ?? "");
    otpArray[index] = digits[digits.length - 1];
    const newOtp = otpArray.join("".slice(0, length));
    onChange(newOtp);
    if (index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    {
      if (event.key === "Backspace") {
        if (value[index]) {
          const otpArray = value.split("");

          otpArray[index] = "";

          onChange(otpArray.join(""));

          return;
        }

        if (index > 0) {
          inputRef.current[index - 1]?.focus();
        }
      }

      if (event.key === "ArrowLeft" && index > 0) {
        inputRef.current[index - 1]?.focus();
      }

      if (event.key === "ArrowRight" && index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }
  };
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pastedValue = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pastedValue) {
      return;
    }

    onChange(pastedValue);

    const nextIndex = Math.min(pastedValue.length, length - 1);

    inputRef.current[nextIndex]?.focus();
  };
  return (    <div
      className="flex justify-between gap-2"
      dir="ltr"
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRef.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] ?? ""}
          onChange={(event) =>
            handleChange(index, event.target.value)
          }
          onKeyDown={(event) =>
            handleKeyDown(index, event)
          }
          onPaste={handlePaste}
          className="h-12 w-12 rounded-lg border border-gray-200 text-center text-lg outline-none transition focus:border-gray-400"
          aria-label={`کد تأیید ${index + 1}`}
        />
      ))}
    </div>);
}
