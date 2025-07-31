### Notes

on submitting form react got reloaded which is not right approach as we dont want to reload our page if we are using react.

There are three ways to handle forms in react these are :

1. useRef
2. controlled components.
3. REACT HOOK FORM (Most used way.)

### useRef

```
In this method we select each input and take their values when form is submitted.

by useRef we can select any html input.

ex :

```

```
import { use, useRef } from "react";

const UseRef = () => {
  //   const elem = useRef(null); // we pass null to useRef to create a reference
  //     console.log(elem); // this will log the current value of the ref, which is null initially.

  const name = useRef(null); // create a ref for the name input
  const age = useRef(null); // create a ref for the age input
  const email = useRef(null); // create a ref for the email input

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission
    console.log(name.current.value); // access the value of the name input
    console.log(age.current.value); // access the value of the age input
    console.log(email.current.value); // access the value of the email input
  };
  return (
    <div>
      <h2 className="text-lg text-center text-white font-mono p-4">
        Form using UseRef Hook
      </h2>
      <form
        action=""
        className="flex gap-4 flex-col items-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 "
          type="text"
          placeholder="name"
          ref={name}
        />
        <input
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 "
          type="text"
          placeholder="age"
          ref={age}
        />
        <input
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 "
          type="email"
          placeholder="email"
          ref={age}
        />
        <input
          className="border-2 text-teal-400 border-white rounded-sm  placeholder:text-white px-4 py-2 cursor-pointer "
          type="submit"
        />
      </form>
    </div>
  );
};

export default UseRef;
// useRef run first before the dom load, so we cant pass any element to it therefore we pass null.
// useRef is used to access the DOM element directly without using state.
// we can save useref in a constant value.
// then by using ref we can connect it to the element we want to access.
//  it will first give null value.
//  there for we can't use it directly in the element. So we use it onClick or onChange or any other event on the div.
// Here we are directly accessing the DOM element using useRef, and its initial value is null, therefore we will get null in the console log.
// useRef give us a reference to the DOM element, so we can access it directly without using state.

//

// we have something called current in useRef, which is used to access the current value of the ref. and to acess the value of the input we use name.current.value or age.current.value.

// we can use useRef to access the value of the input directly without using state.


```

## Controlled components

whatever we write update data throgh useState in real time.

Ex :

```
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


```

### React hook form

```
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


```
