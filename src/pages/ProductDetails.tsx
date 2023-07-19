import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useGetProductQuery } from '@/redux/features/products/productApi';
import { IProduct } from '@/types/globalTypes';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const { data, isError } = useGetProductQuery(id);
  // const product = data?.find(
  //   (item: { _id: number }) => item._id === Number(id)
  // );

  //! Temporary code ends here

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={data?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.name}</h1>
          <p className="text-xl">Rating: {data?.rating}</p>
          <ul className="space-y-1 text-lg">
            {data?.features?.map(
              (
                feature:
                  | boolean
                  | Key
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | null
                  | undefined
              ) => (
                <li key={feature}>{feature}</li>
              )
            )}
          </ul>
          <Button>Add to cart</Button>
        </div>
      </div>
      <ProductReview />
    </>
  );
}
