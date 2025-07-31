import { useForm } from "react-hook-form";

const Hooks = () => {
  const { register, handleSubmit } = useForm();
  // console.log(register())

  return (
    <div>
      <h2 className="text-lg text-center text-white font-mono p-4">
        Form using ReactForm
      </h2>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex gap-4 flex-col items-center"
        action=""
      >
        <input
          {...register("name")}
          type="text"
          placeholder="name"
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 "
        />
        <input
          {...register("email")}
          type="age"
          placeholder="age"
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 "
        />
        <input
          className="border-2 text-teal-400 border-white rounded-sm  cursor-pointer px-4 py-2 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default Hooks;

{
  /* 
from react hook form we get useForm() which gives us register.
the register have four values byDefault name, onblur(), onchange() and ref.

we need to pass the register to every input field with name to use its properties.
ex :  <input {...register('name')}
          type="age"
          placeholder="age"
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 "
        />

        useForm also have handleSubmit() function. This can be used on form and it gives us the values of the forms.
        ex :
        
          <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex gap-4 flex-col items-center"
        action=""
       / >


*/
}
