import { executeApiRequest } from "../../app/universal";


export const Main = () => {

  (async () => {
    try {
      const productsData = await executeApiRequest({
        endpoint: "product-projections",
        query: { limit: '2' },
      });
      
     
      console.log("Товары:", productsData.results); 
      const products = productsData.results;

      const formattedProducts = products.map(product => ({
        id: product.id,
        key: product.key,
        name: product.name,
        price: product.masterVariant.prices?.[0]?.value.centAmount / 100 || 0, 
        image: product.masterVariant.images?.[0]?.url || null,
        attributes: product.masterVariant.attributes?.reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {}) || {}
      }));
      
      console.log("Форматированные товары:", formattedProducts);
      
    } catch (error) {
      console.error("Ошибка:", error);
    }
  })();
    
 

  return (
    <div className="catalog">
      <h2> Catalog </h2>
      <div className="dummy" style={{ backgroundImage: "url('img/back.png')" }}>
        <p>Page is not available yet.</p>
        <p>
          We are doing our best to get it up and running as soon as possible
        </p>
        {/* <Viewer/> */}
      </div>
    </div>
  );
};
