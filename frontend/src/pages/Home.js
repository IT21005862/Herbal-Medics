import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import ProductPreview from "../components/ProductPreview";
import "../CSS/Home.css";
import { Carousel } from "react-bootstrap";

//IT21013300
function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:9001/product/getallProducts");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  let filteredProducts = products.filter((product) => {
    return (
      product.productname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="search-container">
            <h2>HERBAL MEDICS🌿🌿🌿</h2>
            <input type="text" placeholder="Search Products" onChange={handleSearch} />
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <br />
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "400px" }}
          src="https://images.squarespace-cdn.com/content/v1/5684f3d0c21b861848cff4d6/c36338ba-9a33-49c4-9d0e-9c108bec5b1c/SB+Tea_Groups_Full_Angled-Transparent_For+Web.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Herbal Medics</h3>
          <p>Samada Herbal Samada Suwen🌿🌿</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "400px" }}
          src="https://www.herbalblooms.lk/wp-content/uploads/revslider/web-new.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Herbal Medics</h3>
          <p>Samada Herbal Samada Suwen🌿🌿</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "400px" }}
          src="https://jamaicahospital.org/newsletter/wp-content/uploads/2014/08/herbal-remedies3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Herbal Medics</h3>
          <p>Samada Herbal Samada Suwen🌿🌿</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </Col>
      </Row>
      <Row>
        {loading ? (
          <Loading />
        ) : filteredProducts.length ? (
          filteredProducts.map((product) => {
            return (
              <Col key={product.id} md={3}>
                <ProductPreview
                  _id={product._id}
                  productname={product.productname}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                  Stocks={product.Stocks}
                  image={product.image}
                  user={product.user}
                  date={product.date}
                />
              </Col>
            );
          })
        ) : (
          <Col>
            <h2>No Products Found</h2>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Home;
