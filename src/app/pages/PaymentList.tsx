const PaymentList = () => (
  <main className="order-section">
    <header className="flex-col-center mt-20">
      <h2 className="order-section__title">주문/결제</h2>
      <hr className="divide-line mt-20" />
    </header>

    <div className="flex">
      <section className="order-left-section">
        <h3 className="order-title">주문 상품(3건)</h3>
        <hr className="divide-line-gray mt-10" />
        <div className="order-container">
          <div className="flex gap-15 mt-10">
            <img className="w-144 h-144" src="./assets/images/product.png" alt="PET보틀-정사각(420ml)" />
            <div className="flex-col gap-15">
              <span className="order-name">PET보틀-정사각(420ml)</span>
              <span>수량: 3</span>
            </div>
          </div>
        </div>
        <hr className="divide-line-thin mt-10" />
        <div className="order-container">
          <div className="flex gap-15 mt-10">
            <img className="w-144 h-144" src="./assets/images/product.png" alt="PET보틀-정사각(420ml)" />
            <div className="flex-col gap-15">
              <span className="order-name">PET보틀-정사각(420ml)</span>
              <span>수량: 3</span>
            </div>
          </div>
        </div>
        <hr className="divide-line-thin mt-10" />
        <div className="order-container">
          <div className="flex gap-15 mt-10">
            <img className="w-144 h-144" src="./assets/images/product.png" alt="PET보틀-정사각(420ml)" />
            <div className="flex-col gap-15">
              <span className="order-name">PET보틀-정사각(420ml)</span>
              <span>수량: 3</span>
            </div>
          </div>
        </div>
        <hr className="divide-line-thin mt-10" />
      </section>
      <section className="order-right-section">
        <div className="order-right-section__top">
          <h3 className="order-title">결제금액</h3>
        </div>
        <hr className="divide-line-thin" />
        <div className="order-right-section__bottom">
          <div className="flex justify-between p-20 mt-20">
            <span className="highlight-text">총 결제금액</span>
            <span className="highlight-text">21,800원</span>
          </div>
          <div className="flex-center mt-30 mx-10">
            <button className="primary-button flex-center">21,800원 결제하기</button>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default PaymentList;
