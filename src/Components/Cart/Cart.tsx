import './index.scss';
import React, { SetStateAction, useEffect, useState } from 'react';
import CartList from '../CartList/CartList';
import CartEmpty from '../CartEmpty/CartEmpty';
import CartSummary from '../CartSummary/CartSummary';
import { IProduct, ICartItem } from '../../types';

export default function Cart({ products, headerRender, setModalVisible }:
  { products: Array<IProduct>,
    headerRender: () => void,
    setModalVisible: React.Dispatch<SetStateAction<boolean>>
  }) {
  const storage: string | null = localStorage.getItem('cart_@vFKSQ');
  const cart: ICartItem[] = storage ? JSON.parse(storage) : [];

  const [currentCart, setCurrentCart] = useState<ICartItem[]>(cart);

  useEffect(() => {
    headerRender();
  }, [currentCart]);

  return (
    <div className="cart">
      {currentCart.length
        ? (
          <>
            <section className="cart__items ">
              <header className="cart__header">Products In Cart</header>
              <CartList
                currentCart={currentCart}
                setCurrentCart={setCurrentCart}
                products={products}
              />
            </section>
            <CartSummary currentCart={currentCart} setModalVisible={setModalVisible} />
          </>
        )
        : <CartEmpty />}
    </div>
  );
}
