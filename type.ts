export interface Products {
  _id: string;
  productName: string;
  images: string[];
  productBrand: string;
  productPrice: string;
  discountedPersentage: string;
  productDescription: string;
  productCategory: string;
  reviews?: Review[];
}

export interface Review {
  review: string;
  name: string;
  image: string;
  date: Date;
}
