import { Link } from 'react-router-dom';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='nav-link' to={title}>
          <span className='title'>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((products) => (
            <ProductCard key={products.id} product={products} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;