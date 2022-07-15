import React, { useState, useMemo } from 'react';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QnA from './QnA/QuestionList';
import Ratings from './Ratings/Ratings';
import IdContext from './Context';

function App() {
  const [productId, setProductId] = useState(40350);

  const providerIdValue = useMemo(() => ({ productId, setProductId }), [productId, setProductId]);

  return (
    <div>
      <header>This is App</header>
      {/* <h4>
        We use product:
        { productId }
      </h4> */}
      <IdContext.Provider value={providerIdValue}>
        <Overview />
        <RelatedProducts />
        <QnA />
        <Ratings />
      </IdContext.Provider>
    </div>
  );
}

export default App;
