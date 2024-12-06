import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onsubmit = async (data) => {
    //simulating/faking api response
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "ml 3" },
            maxLength: { value: 6, message: "ml 6" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label>Middle Name</label>
        <input {...register("middleName")} />
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
      </div>

      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  );
}

export default App;
