import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useState, useMemo } from "react";

import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";
import { products as allProducts } from "../assets/data/products"

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filter function
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((product) => {
        const productCategory = product.category?.toLowerCase() || "";
        const selectedCat = selectedCategory.toLowerCase();
        return productCategory.includes(selectedCat);
      });
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter((product) => {
        const productName = product.productName?.toLowerCase() || "";
        const category = product.category?.toLowerCase() || "";

        return (
          productName.includes(lowerCaseSearch) ||
          category.includes(lowerCaseSearch)
        );
      });
    }

    // Sort products
    if (sortBy === "ascending") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "descending") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, products]);

  return (
    <Helmet title="Tienda">
      <CommonSection title="Productos" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select 
                  value={selectedCategory}
                  onChange={
                    (e) => {setSelectedCategory(e.target.value)}
                  }
                  id="category"
                  >
                  <option value="">Filtrar por categoría</option>
                  <option value="Hidrosembradoras">Hidrosembradoras</option>
                  <option value="Insumos">Insumos</option>
                  <option value="Floculante">Floculante</option>
                  <option value="Enmienda biotica">Enmienda biotica</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select value={sortBy} onChange={(e) => {setSortBy(e.target.value)}}>
                  <option value="">Ordenar</option>
                  <option value="ascending">Ascendente</option>
                  <option value="descending">Descendente</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Buscar por nombre o categoría..."
                  value={searchTerm}
                  onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {filteredProducts.length === 0 ? (
              <h1 className="text-center fs-4">No se encontraron productos!</h1>
            ) : (
              <ProductsList data={filteredProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
