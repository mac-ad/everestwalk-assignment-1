import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useCartStore } from "../../store/cart";
import { useForm, Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import toast from "react-hot-toast";

const provinces = ["1", "2", "3", "4", "5"];

const inputClasses = "border border-black px-2 rounded-md py-1.5 w-full";
const formControlClass = "flex flex-col gap-2";

const schema = yup.object({
  full_name: yup.string().required("Full name is required"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must not exceed 15 characters"),
  shipping_address: yup.object().shape({
    province: yup.string().required("Province is required"),
    city: yup.string().required("State is required"),
    area: yup.string().required("Area is required"),
  }),
  billing_address: yup.object().shape({
    province: yup.string().required("Province is required"),
    city: yup.string().required("city is required"),
    area: yup.string().required("Area is required"),
  }),
});

const CheckoutForm = () => {
  const navigate = useNavigate();

  // after placing order is successfull
  // cart items which are selected must be removed and selectedId must be set to empty

  const placeItemsAfterStep = useCartStore(
    (state) => state.placeItemsAfterStep
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "",
      phone_number: "",
      shipping_address: {
        province: "",
        city: "",
        area: "",
      },
      billing_address: {
        province: "",
        city: "",
        area: "",
      },
      current_date: Date(),
    },
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    console.log(data);
    placeItemsAfterStep();
    navigate("/");
  };

  const placeOrderHandler = () => {
    // console.log("placing order");
  };

  return (
    <div className="bg-white py-4 rounded-[5px]">
      <form
        action=""
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-6 w-full "
      >
        <div className={formControlClass}>
          <label className="font-semibold" htmlFor="full_name">
            Full name
          </label>
          <input
            type="text"
            {...register("full_name")}
            placeholder="full name"
            className={inputClasses}
          />
          {errors?.full_name && (
            <small className="text-red-500">{errors.full_name.message}</small>
          )}
        </div>
        <div className={formControlClass}>
          <label className="font-semibold" htmlFor="full_name">
            Phone number
          </label>
          <input
            type="text"
            {...register("phone_number")}
            placeholder="Phone number"
            className={inputClasses}
          />
          {errors?.phone_number && (
            <small className="text-red-500">
              {errors.phone_number.message}
            </small>
          )}
        </div>
        <div className={formControlClass}>
          <label className="font-semibold" htmlFor="shipping address">
            Shipping Address
          </label>
          <div className="grid gap-2 grid-cols-3">
            <div>
              <select
                className={inputClasses}
                name="shipping_address.province"
                {...register("shipping_address.province")}
              >
                <option value="">Province</option>
                {provinces.map((province) => (
                  <option value={province}>{province}</option>
                ))}
              </select>

              {errors?.shipping_address?.province && (
                <small className="text-red-500">
                  {errors?.shipping_address?.province?.message}
                </small>
              )}
            </div>

            <div>
              <select
                className={inputClasses}
                name="shipping_address.city"
                {...register("shipping_address.city")}
              >
                <option value="">City</option>
                {cities.map((province) => (
                  <option value={province}>{province}</option>
                ))}
              </select>
              {errors?.shipping_address?.city && (
                <small className="text-red-500">
                  {errors?.shipping_address?.city?.message}
                </small>
              )}
            </div>
            <div>
              <input
                type="text"
                name="shipping_address.area"
                {...register("shipping_address.area")}
                placeholder="Area"
                className={inputClasses}
              />
              {errors?.shipping_address?.area && (
                <small className="text-red-500">
                  {errors?.shipping_address?.area?.message}
                </small>
              )}
            </div>
          </div>
        </div>
        <div className={formControlClass}>
          <label className="font-semibold" htmlFor="shipping address">
            Billing Address
          </label>
          <div className="grid gap-2 grid-cols-3">
            <div>
              <select
                className={inputClasses}
                name="billing_address.province"
                {...register("billing_address.province")}
              >
                <option value="">Province</option>
                {provinces.map((province) => (
                  <option value={province}>{province}</option>
                ))}
              </select>

              {errors?.billing_address?.province && (
                <small className="text-red-500">
                  {errors?.billing_address?.province?.message}
                </small>
              )}
            </div>

            <div>
              <select
                className={inputClasses}
                name="billing_address.city"
                {...register("billing_address.city")}
              >
                <option value="">City</option>
                {cities.map((province) => (
                  <option value={province}>{province}</option>
                ))}
              </select>
              {errors?.billing_address?.city && (
                <small className="text-red-500">
                  {errors?.billing_address?.city?.message}
                </small>
              )}
            </div>
            <div>
              <input
                type="text"
                name="billing_address.area"
                {...register("billing_address.area")}
                placeholder="Area"
                className={inputClasses}
              />
              {errors?.billing_address?.area && (
                <small className="text-red-500">
                  {errors?.billing_address?.area?.message}
                </small>
              )}
            </div>
          </div>
        </div>

        <Button className="mt-5" type="submit">
          Place order
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;

const cities = [
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Biratnagar",
  "Birganj",
  "Dharan",
  "Bharatpur",
  "Bhim Dutta",
  "Butwal",
  "Hetauda",
  "Bhaktapur",
  "Janakpur",
  "Dhangadhi",
  "Itahari",
  "Triyuga",
  "Siddharthanagar",
  "Nepalganj",
  "Madhyapur Thimi",
  "Mechinagar",
  "Ghorahi",
  "Lekhnath",
  "Kirtipur",
  "Birendranagar",
  "Gulariya",
  "Tikapur",
  "Ratnanagar",
  "Tulsipur",
  "kalaiya",
  "Kamalamai",
  "Damak",
  "Gorkha",
  "Rajbiraj",
  "Kapilvastu",
  "Byas",
  "Lahan",
  "Putalibazar",
  "Panauti",
  "Gaur",
  "Dipayal-Silgadhi",
  "Inaruwa",
  "Siraha",
  "Ramgram",
  "Jaleswar",
  "Baglung",
  "Tansen",
  "Khandbari",
  "Bhimeshwar",
  "Dhankuta",
  "Bidur",
  "Waling",
  "Narayan",
  "Malangwa",
  "Bhadrapur",
  "Amaragadhi",
  "Dasharathchand",
  "Ilam",
  "Banepa",
  "Dhulikhel",
];
