import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/userOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, tip, addItem, removeItem, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          calculadoras de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 py-20 grid md: grid-cols-2">
        <div className="p-5">
          <menu className="text-4xl font-black">Menu</menu>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
