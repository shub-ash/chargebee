/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Badge,
  Button,
  Checkbox,
  Input,
  Notification,
} from "global_components_assignment";
import { useState } from "react";

function App() {
  const [initialExpense, setInitialExpense] = useState<any>([
    { id: 1, expenseName: "Food", value: 200 },
    { id: 2, expenseName: "Clothes", value: 200 },
    { id: 3, expenseName: "Rent", value: 200 },
    { id: 4, expenseName: "Car", value: 200 },
    { id: 5, expenseName: "Accessories", value: 200 },
  ]);
  const [expneseInput, setExpenseInput] = useState("");
  const [expenseValInput, setExpensevalInput] = useState("");
  const [status, setStatus] = useState("credited");
  const [totalAmount, setTotalAmount] = useState<any>();
  const [creditedAmount, setCreditedAmount] = useState(2000);
  const [notificationStatus, setNotificationStatus] = useState({
    message: "",
    className: "",
    onClose: () => {},
    isOpen: false,
  });

  // TO GET-ALL EXPENSE LIST
  const addExpense = () => {
    if (expneseInput && expenseValInput !== null) {
      const currentId =
        initialExpense.length > 0
          ? Math.max(...initialExpense.map((x: any) => x.id))
          : 0;
      setInitialExpense([
        ...initialExpense,
        {
          expenseName: expneseInput,
          value: parseInt(expenseValInput),
          id: currentId + 1,
        },
      ]);
    }
    setExpenseInput("");
    setExpensevalInput("");
    setNotificationStatus({
      message: "Expense Added Successfully",
      className:
        "!absolute right-6 h-fit w-fit bg-green-500 top-8 p-4 rounded-md",
      onClose: () => {
        setNotificationStatus({
          ...notificationStatus,
          isOpen: false,
          message: "",
          className: "",
        });
      },
      isOpen: true,
    });
  };
  // TO FIND TOTAL EXPENSE VALUE
  const totalExpense = initialExpense?.map((x: any) => x.value);
  const totalVal = () => {
    let sum = 0;
    for (let i = 0; i <= totalExpense.length - 1; i++) {
      sum = sum + totalExpense[i];
    }
    return parseInt(sum as unknown as string);
  };
  // TO FIND THE TOTAL AMOUINT CREDITED
  const addAmount = () => {
    let amount = 0;
    amount = creditedAmount + parseInt(totalAmount);
    setCreditedAmount(amount);
    setTotalAmount("");
    setNotificationStatus({
      message: "Amount Added Successfully",
      className:
        "!absolute right-6 h-fit w-fit bg-green-500 top-8 p-4 rounded-md",
      onClose: () => {
        setNotificationStatus({
          ...notificationStatus,
          isOpen: false,
          message: "",
          className: "",
        });
      },
      isOpen: true,
    });
  };
  // TO RESET
  const resetAll = () => {
    setInitialExpense([]);
    setExpenseInput("");
    setExpensevalInput("");
    setStatus("credited");
    setTotalAmount("");
    setCreditedAmount(0);
  };

  return (
    <>
      <div className=" bg-[#EFEFEF] md:flex lg:h-screen overflow-auto">
        <aside className="md:block md:w-[20%]  bg-[#002B38] lg:text-center p-8">
          <i className="text-center text-2xl text-[#FF5001] font-black ">
            Chargebee
          </i>
        </aside>
        <div className="text-center w-full p-8 overflow-y-auto">
          <header className="flex flex-col">
            <p className="text-center text-2xl text-[#FF5001] font-black">
              EXPENSE MANAGER
            </p>
            <p className="text-[#002B38] text-xl relative font-semibold">
              Effortlessly track and manage your finances
            </p>
          </header>

          <div className="lg:flex py-12  justify-evenly text-[#002B38] text-lg flex-wrap w-full">
            <div className=" border-solid border-2 shadow-sm rounded-2xl  p-5 bg-[#002B38] text-[#e2e2e2] lg:w-1/3 font-bold">
              Amount Credited
              <p className="text-3xl py-4">{creditedAmount}</p>
            </div>
            <div className=" border-solid border-2 shadow-sm rounded-2xl  p-5 bg-[#002B38] text-[#e2e2e2] lg:w-1/3 font-bold">
              Available Balance
              <p className="text-3xl py-4">{creditedAmount - totalVal()}</p>
            </div>
            <div className=" border-solid border-2 shadow-sm rounded-2xl  p-5 bg-[#002B38] text-[#e2e2e2] lg:w-1/3 font-bold">
              Total Expenses
              <p className="text-3xl py-4">{totalVal()}</p>
            </div>
          </div>
          <div className="flex justify-evenly gap-4 flex-wrap lg:flex-nowrap ">
            <div className="rounded-md p-2 bg-[#D3D8DD] active:bg-white text-[#002B38] w-full flex justify-between">
              <Checkbox
                name="Credited"
                label="Credited"
                onChange={() => setStatus("credited")}
                value={status}
                checked={status === "credited"}
                className="flex justify-center items-center gap-4 "
              />
              <Checkbox
                name="Debited"
                label="Debited"
                onChange={() => setStatus("debited")}
                value={status}
                checked={status === "debited"}
                className="flex justify-center items-center gap-4"
              />
            </div>

            {status === "debited" ? (
              <>
                <div className="w-full">
                  <Input
                    name="expenseName"
                    type="text"
                    value={expneseInput}
                    placeholder={"Enter Your Expense Name"}
                    onChange={(e) => setExpenseInput(e.target.value)}
                    className="cursor-pointer rounded-md p-2  bg-[#D3D8DD] active:bg-white text-[#002B38] !w-full"
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="number"
                    name="expenseValue"
                    value={expenseValInput}
                    placeholder={"Enter Your Expense value"}
                    onChange={(e) => setExpensevalInput(e.target.value)}
                    className="cursor-pointer rounded-md p-2  bg-[#D3D8DD] active:bg-white text-[#002B38] !w-full"
                    min="0"
                  />
                </div>
                <Button
                  onClick={addExpense}
                  disabled={!expenseValInput || !expneseInput}
                  className="cursor-pointer rounded-2xl p-2  bg-[#002B38]  text-[#EFEFEF] !w-full disabled:opacity-[0.7] disabled:cursor-not-allowed"
                >
                  ADD YOUR EXPENSE
                </Button>
              </>
            ) : (
              <>
                <div className="w-full">
                  <Input
                    name="amount"
                    type="number"
                    value={totalAmount}
                    placeholder={"Enter Your Credited Amount"}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    className="cursor-pointer rounded-md p-2  bg-[#D3D8DD] active:bg-white text-[#002B38] !w-full"
                    min="0"
                  />
                </div>
                <Button
                  onClick={addAmount}
                  disabled={!totalAmount}
                  className="cursor-pointer rounded-2xl p-2  bg-[#002B38]  text-[#EFEFEF] !w-full disabled:opacity-[0.7] disabled:cursor-not-allowed"
                >
                  ADD YOUR AMOUNT
                </Button>
              </>
            )}
          </div>
          <div className="flex justify-end mt-10">
            <Button
              onClick={resetAll}
              className="cursor-pointer rounded-2xl p-2  bg-[#002B38]  text-[#EFEFEF] px-4"
            >
              Reset
            </Button>
          </div>

          <div className="mt-20 text-left">
            <div className="flex justify-between">
              <p className="text-[#FF5001] lg:text-2xl font-black">
                Your Expenses
              </p>
              <p className="text-[#FF5001] lg:text-2xl font-black">Amount</p>
            </div>
            {initialExpense?.length === 0 ? (
              <div className="flex justify-center items-center h-auto mt-24">
                <p>No Record Found</p>
              </div>
            ) : (
              initialExpense?.map((items: any) => (
                <div
                  key={items.id}
                  className="text-[#002B38] text-xl pt-3 flex justify-between border-b-2 mt-8 items-center font-semibold"
                >
                  <span> {items.expenseName} </span>
                  <Badge
                    text={items.value}
                    className="text-[#ffffff] bg-[#FF5001] px-2 rounded-xl mb-1"
                  />
                </div>
              ))
            )}
          </div>
        </div>
        {notificationStatus?.isOpen === true ? (
          <Notification
            message={notificationStatus?.message}
            className={notificationStatus?.className}
            onClose={notificationStatus?.onClose}
            icon={<></>}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
