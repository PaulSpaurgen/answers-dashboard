import Button from "../../components/Button";
import Input from "../../components/Input";
import { assets } from "../../utills/assets";
import commonClasses from "../../utills/commonClasses";
import Label from "../../components/Label";
import { useState, useRef } from "react";
import { variableCategoriesInitial } from "../../utills/staticData";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "../../components/Accordian";

// Variable data structure

export default function HomeEditVariablesComponent() {
  const [variableCategories, setVariableCategories] = useState(
    variableCategoriesInitial
  );

  const [selectedVariableDiscription, setSelectedVariableDiscription] =
    useState({
      title: "",
      discription: "",
    });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectVariable = (categoryId: number, variableId: number) => {
    setVariableCategories(
      variableCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              variables: category.variables.map((variable) =>
                variable.id === variableId
                  ? { ...variable, isSelected: !variable.isSelected }
                  : variable
              ),
            }
          : category
      )
    );
  };

  const handleMouseEnter = (categoryId: number, variableId: number) => {
    const variable = variableCategories
      .find((category) => category.id === categoryId)
      ?.variables.find((variable) => variable.id === variableId);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSelectedVariableDiscription({
        title: variable?.name || "",
        discription: variable?.discription || "",
      });
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSelectedVariableDiscription({
      title: "",
      discription: "",
    });
  };

  return (
    <div className="w-full  mt-[30px] custom-scrollbar overflow-y-auto">
      <div className="flex gap-[10px] w-full">
        <div className="w-full">
          <Input
            name="search"
            placeholder="Search"
            type="text"
            value=""
            onChange={() => {}}
            icon={
              <img
                src={assets.search}
                alt="search"
                className="w-[16px] h-[16px] "
              />
            }
          />
        </div>
        <div className="min-w-fit">
          <Button
            variant="primary"
            size="medium"
            onClick={() => {}}
            className="px-[24px] py-[7.5px]"
            icon={
              <img
                src={assets.stars}
                alt="stars"
                className="w-[16px] h-[16px] icon-white"
              />
            }
          >
            Auto Fill
          </Button>
        </div>
        <div className="min-w-fit">
          <Button
            variant="tertiary"
            size="medium"
            className="px-[24px] py-[7.5px]"
            onClick={() => {}}
            icon={
              <img
                src={assets.reload}
                alt="reload"
                className="w-[16px] h-[16px] text-white-100 "
              />
            }
          >
            Rerun
          </Button>
        </div>
      </div>

      <motion.div
        className={`${commonClasses.boxClasses.common} mt-[20px] !bg-black-500 !p-0`}
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="h-[400px] overflow-y-auto p-[20px] custom-scrollbar">
          {variableCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={
                categoryIndex < variableCategories.length - 1 ? "mb-[30px]" : ""
              }
            >
              <h4 className="text-[15px] font-normal text-gray-400 mb-[20px]">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-[20px]">
                {category.variables.map((variable, index) => (
                  <Label
                    key={`${category.id}-${index}`}
                    text={variable.name}
                    isSelected={variable.isSelected}
                    onClick={() =>
                      handleSelectVariable(category.id, variable.id)
                    }
                    onMouseEnter={() =>
                      handleMouseEnter(category.id, variable.id)
                    }
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedVariableDiscription.title && (
            <motion.div
              className="border-t border-black-200 bg-black-600 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
            >
              <motion.div
                className="p-[20px]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="text-[20px] font-normal text-white mb-[25px]">
                  {selectedVariableDiscription.title}
                </div>
                <p className="text-[15px] font-normal text-[#BBBBBB] mb-[20px]">
                  {selectedVariableDiscription.discription}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="mt-[20px] flex flex-col gap-[18px]">
        <Accordion title="Primary Variables">
            <div className="text-[15px] font-normal text-white-100 p-[20px] text-center">
              <h1>Primary Variables</h1>
            </div>
          </Accordion>
        <Accordion title="Secondary Variables">
          <div className="text-[15px] font-normal text-white-100 p-[20px] text-center">
            <h1>Secondary Variables</h1>
          </div>
        </Accordion>

        {/* Tertiary Variables */}
      </div>
    </div>
  );
}
