// user panel
export type ID = string | number;
export type ActiveState  = "active" | "inactive"
export interface UserProps {
	id: ID, 
	firstName: string,
	lastName: string,
	email: string,
	phoneNumber: string,
	password: string,
	isActive?: boolean,
}
// product vem
export type status  = "active" | "inactive"
export interface ProductProps {
	id: number, 
	title: string,
	insurer: string,
	initialMain: number,
	accidentCover: number,
	annualYears: number,
	duration: number,
	imageUrl: string,
	status?: status,
}
function identity<T>(arg: T): T {
  return arg;
}
const products: ProductProps[] = identity<ProductProps[]>([
  {
    id: 1,
    title: "طرح کیمیا ۱ - بیمه البرز",
    insurer: "بیمه البرز",
    initialMain: 10000,
    annualYears: 500000,
    accidentCover: 5000,
    duration: 2,
    imageUrl: "/images/gold.png",
    status: "active",
  },
  {
    id: 2,
    title: "طرح کیمیا ۲ - بیمه البرز",
    insurer: "بیمه البرز",
    initialMain: 10000,
    annualYears: 500000,
    accidentCover: 5000,
    duration: 2,
    imageUrl: "/images/gold.png",
    status: "inactive",
  },
]);

