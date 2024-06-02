import store from "./store";
import { setBasicSalary, setDeductions, setEarnings } from "@/reducers/itemsSlice";

export const addAllEarnings = (earnings) => {
    store.dispatch(setEarnings(earnings));
};
export const addBasicSalary = (basicSalary) => {
    store.dispatch(setBasicSalary(basicSalary));
};
export const addDeductions = (deduction) => {
    store.dispatch(setDeductions(deduction));
};

