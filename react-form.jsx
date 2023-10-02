import { useForm } from "formbold-react";

function Form() {
  const [state, handleSubmit] = useForm("Form_ID");

  if (state.succeeded) {
    return <div>Form submitted successfully</div>;
  }

  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <textarea id="message" name="message" required />
        <button type="submit">Submit</button>

        <div>{state.error && state.error.message}</div>
      </form>
    </>
  );
}

export default Form;
