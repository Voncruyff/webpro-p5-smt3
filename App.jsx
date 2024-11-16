// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white hover:bg-black`}
      type="submit"
    >
      {children}
    </button>
  );
};


export default function App() {
  return (
    <div className="text-2xl flex justify-center bg-gray-200 min-h-screen items-center">
      <div className="flex gap-x-4">
        <Button variant="bg-red-500">Belanja</Button>
        <Button variant="bg-blue-500">Login</Button>
        <Button variant="bg-green-500">Daftar</Button>
        <Button variant="bg-yellow-500">Profil</Button>
        <Button variant="bg-slate-500">Keluar</Button>
      </div>
    </div>
  );
}
