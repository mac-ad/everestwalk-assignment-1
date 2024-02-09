import { useForm } from "react-hook-form";
import OrderSummary from "../cart/OrderSummary.";
import Button from "../../components/button/Button";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formFields = [
  {
    name: "name",
    title: "name",
    type: "text",
  },
  {
    name: "phone",
    title: "phone",
    type: "text",
  },
  {
    name: "shipping_address",
    title: "shipping address",
    type: "text",
  },
  {
    name: "billing_address",
    title: "billing address",
    type: "text",
  },
];

const checkoutFormSchema = object({
  name: string().required("name is required"),
  phone: string().required("phone is required"),
  shipping_address: string().required("shipping address is required"),
  billing_address: string().required("billing address is required"),
});

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutFormSchema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-10 max-w-[500px]">
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" {...register("phone")} />
        </div>
        <div className="form-control">
          <label htmlFor="shipping-address">Shipping address</label>
          <input
            type="text"
            id="shipping-address"
            {...register("shipping-address")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="billing-address">Billing address</label>
          <input
            type="text"
            id="billing-address"
            {...register("billing-address")}
          />
        </div> */}

        {formFields.map((field) => (
          <div
            className="form-control flex flex-col gap-2 mb-3"
            key={field.name}
          >
            <label htmlFor={field.name} className="capitalize">
              {field.title}
            </label>
            <input
              type="text"
              id={field.name}
              {...register(field.name)}
              className="border-black border w-full py-1 rounded-[3px] px-2"
            />
          </div>
        ))}

        <Button className="mt-8">
          <button type="submit">Checkout</button>
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
