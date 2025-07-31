import { useState } from "react";

const Controlled = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name, formData.email);
  };

  return (
    <div>
      <h2 className="text-lg text-center text-white font-mono p-4">
        Form using Controlled Components
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-center justify-center"
        action=""
      >
        <input
          onChange={(e) => {
            setFormData({...formData, name: e.target.value });
            // console.log(formData);
          }}
          className="border-1 placeholder:text-white text-white px-4 py-2 border-amber-50 rounded-sm"
          placeholder="Enter name"
          type="text"
          
        />
        <input
          onChange={(e) => setFormData({...formData, email: e.target.value })}
          className="border-1 placeholder:text-white text-white px-4 py-2 border-amber-50 rounded-sm"
          type="email"
          placeholder="email"
        />
        <input
          type="submit"
          className="border-1 placeholder:text-white px-4 py-2 text-white border-amber-50 rounded-sm"
        />
      </form>
    </div>
  );
};

export default Controlled;
