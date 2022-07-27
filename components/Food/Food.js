import React, { useState, useEffect } from "react";
const Food = ({ auto, valuess }) => {
  const [Click, setClick] = useState([]);
  const handleClick = (value) => {
    if (value !== "none") {
      const index = Click.indexOf(value);
      if (index > -1) {
        Click.splice(index, 1);
        setClick([...Click]);
      } else {
        const none = Click.indexOf("none");
        if (none > -1) {
          Click.splice(none, 1);
        }
        setClick([...Click, value]);
      }
    } else {
      const none = Click.indexOf("none");
      if (none > -1) {
        Click.splice(none, 1);
        setClick([...Click]);
      } else {
        setClick(["none"]);
      }
    }
  };
  useEffect(() => {
    valuess(Click);
  }, [Click]);
  const style = {
    wrapper: "mx-auto",
    container: "flex flex-wrap gap-4",
    item: `px-4 py-1 transition duration-[200ms] border-2 border-transparent 
    ${
      auto
        ? "bg-neutral-900 text-gray-500"
        : "hover:border-orange-600  hover:bg-neutral-700 cursor-pointer bg-neutral-700 text-gray-200"
    } ${Click.includes("")} `,
    heading: "text-3xl text-gray-200 my-8",
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Veggies</h2>
      <div className={style.container}>
        <p
          className={
            style.item +
            `${Click.includes("1") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("1")}
        >
          Broccoli
        </p>
        <p
          className={
            style.item +
            `${Click.includes("2") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("2")}
        >
          Cauliflower
        </p>
        <p
          className={
            style.item +
            `${Click.includes("3") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("3")}
        >
          Onion
        </p>
        <p
          className={
            style.item +
            `${Click.includes("4") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("4")}
        >
          Bell pepper
        </p>
        <p
          className={
            style.item +
            `${Click.includes("5") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("5")}
        >
          Eggplant
        </p>
        <p
          className={
            style.item +
            `${Click.includes("6") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("6")}
        >
          Cabbage
        </p>
        <p
          className={
            style.item +
            `${Click.includes("7") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("7")}
        >
          Asparagus
        </p>
        <p
          className={
            style.item +
            `${Click.includes("8") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("8")}
        >
          Spinach
        </p>
        <p
          className={
            style.item +
            `${Click.includes("9") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("9")}
        >
          Cucumber
        </p>
        <p
          className={
            style.item +
            `${Click.includes("10") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("10")}
        >
          Tomato
        </p>
      </div>
      <h2 className={style.heading}>Cereals</h2>
      <div className={style.container}>
        <p
          className={
            style.item +
            `${Click.includes("11") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("11")}
        >
          Rice
        </p>
        <p
          className={
            style.item +
            `${Click.includes("12") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("12")}
        >
          Quinoa
        </p>
        <p
          className={
            style.item +
            `${Click.includes("13") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("13")}
        >
          Couscous
        </p>
        <p
          className={
            style.item +
            `${Click.includes("14") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("14")}
        >
          Buckwheat
        </p>
        <p
          className={
            style.item +
            `${Click.includes("15") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("15")}
        >
          Millet groats
        </p>
        <p
          className={
            style.item +
            `${Click.includes("16") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("16")}
        >
          Amaranth
        </p>
        <p
          className={
            style.item +
            `${Click.includes("17") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("17")}
        >
          Semolina
        </p>
        <p
          className={
            style.item +
            `${Click.includes("18") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("18")}
        >
          Cornmeal
        </p>
        <p
          className={
            style.item +
            `${Click.includes("19") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("19")}
        >
          Bulgur
        </p>
      </div>
      <h2 className={style.heading}>Ingredients</h2>
      <div className={style.container}>
        <p
          className={
            style.item +
            `${Click.includes("20") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("20")}
        >
          Avocado
        </p>
        <p
          className={
            style.item +
            `${Click.includes("21") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("21")}
        >
          Beans
        </p>
        <p
          className={
            style.item +
            `${Click.includes("22") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("22")}
        >
          Eggs
        </p>
        <p
          className={
            style.item +
            `${Click.includes("23") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("23")}
        >
          Mushrooms
        </p>
        <p
          className={
            style.item +
            `${Click.includes("24") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("24")}
        >
          Cottage cheese
        </p>
        <p
          className={
            style.item +
            `${Click.includes("25") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("25")}
        >
          Milk
        </p>
        <p
          className={
            style.item +
            `${Click.includes("26") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("26")}
        >
          Tofu
        </p>
        <p
          className={
            style.item +
            `${Click.includes("27") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("27")}
        >
          Hummus
        </p>
        <p
          className={
            style.item +
            `${Click.includes("28") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("28")}
        >
          Plant milk
        </p>
        <p
          className={
            style.item +
            `${Click.includes("29") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("29")}
        >
          Protein powder
        </p>
      </div>
      <h2 className={style.heading}>Meat & Fish (Optional)</h2>
      <div className={style.container}>
        <p
          className={
            style.item +
            `${Click.includes("30") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("30")}
        >
          Beef
        </p>
        <p
          className={
            style.item +
            `${Click.includes("31") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("31")}
        >
          Turkey
        </p>
        <p
          className={
            style.item +
            `${Click.includes("32") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("32")}
        >
          Chicken
        </p>
        <p
          className={
            style.item +
            `${Click.includes("33") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("33")}
        >
          Seafood
        </p>
        <p
          className={
            style.item +
            `${Click.includes("34") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("34")}
        >
          Fish
        </p>
      </div>
      <h2 className={style.heading}>Fruit & Berries (Optional)</h2>
      <div className={style.container}>
        <p
          className={
            style.item +
            `${Click.includes("35") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("35")}
        >
          Сitrus
        </p>
        <p
          className={
            style.item +
            `${Click.includes("36") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("36")}
        >
          Apple
        </p>
        <p
          className={
            style.item +
            `${Click.includes("37") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("37")}
        >
          Pear
        </p>
        <p
          className={
            style.item +
            `${Click.includes("38") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("38")}
        >
          Kiwi
        </p>
        <p
          className={
            style.item +
            `${Click.includes("39") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("39")}
        >
          Bananas
        </p>
        <p
          className={
            style.item +
            `${Click.includes("40") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("40")}
        >
          Persimmon
        </p>
        <p
          className={
            style.item +
            `${Click.includes("41") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("41")}
        >
          Peach
        </p>
        <p
          className={
            style.item +
            `${Click.includes("42") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("42")}
        >
          Berries
        </p>
        <p
          className={
            style.item +
            `${Click.includes("43") && "border-orange-600 bg-neutral-700"}`
          }
          onClick={() => handleClick("43")}
        >
          Grape
        </p>
      </div>
    </div>
  );
};

export default Food;
