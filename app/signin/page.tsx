export default function Signin() {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg">
          <div className="px-10">
            <div className="text-3xl font-extrabold">Sign in</div>
          </div>
          <div className="pt-2">
            <LabelledInput label="Username" placeholder="test@gmail.com" />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="mt-8 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
}
