import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useCartStore } from "../../store/cart";

const CheckoutForm = () => {
  const navigate = useNavigate();

  // after placing order is successfull
  // cart items which are selected must be removed and selectedId must be set to empty

  const placeItemsAfterStep = useCartStore(
    (state) => state.placeItemsAfterStep
  );

  const placeOrderHandler = () => {
    console.log("placing order");
    placeItemsAfterStep();
    navigate("/");
  };

  return (
    <div className="bg-white p-4 rounded-[5px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit
      et porro, laboriosam vitae sunt blanditiis praesentium minima assumenda
      expedita eveniet quaerat neque, ullam similique labore eaque magni, ipsa
      reiciendis voluptatibus adipisci consectetur! Cum eum obcaecati sint,
      quas, laborum porro accusamus voluptas soluta fugit sapiente, perferendis
      dolor sed expedita nobis. Et dolores tempora dolorum harum similique
      adipisci, aspernatur, aliquid minima aperiam nemo consectetur quam
      corporis id! Repudiandae quia nihil quas necessitatibus! Vitae ullam
      possimus aliquam, placeat voluptatibus incidunt fuga consectetur obcaecati
      eligendi illo assumenda doloribus fugiat accusantium omnis, animi ad
      ratione magni dignissimos repudiandae sequi! Unde accusamus incidunt
      quibusdam tempore! Temporibus magnam amet nesciunt quo. Velit eligendi,
      deleur odio, natus omnis tempora. Ullam, delectus in? Quidem quod atque
      nemo blanditiis, quaerat accusamus explicabo debitis quis est earum soluta
      magnam iusto similique officiis deserunt praesentium animi nihil.
      <Button onClick={placeOrderHandler} className="mt-5">
        Place order
      </Button>
    </div>
  );
};

export default CheckoutForm;
