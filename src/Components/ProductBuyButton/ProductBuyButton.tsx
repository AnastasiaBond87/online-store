import './index.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import React, { SetStateAction } from 'react';

export default function ProductBuyButton(
  {
    headerRender,
    addItem,
    productInCart,
    setModalVisible,
  }:
  {
    headerRender: () => void,
    addItem: () => void,
    productInCart: boolean
    setModalVisible: React.Dispatch<SetStateAction<boolean>>
  },
) {
  const navigate: NavigateFunction = useNavigate();

  function goToCart():void {
    if (!productInCart) {
      addItem();
      headerRender();
    }
    setTimeout(():void => setModalVisible(true), 500);
    navigate('/shopping-cart');
  }
  return (
    <button type="button" className="btns-card__buy-now" onClick={():void => goToCart()}>
      Buy now
    </button>
  );
}
