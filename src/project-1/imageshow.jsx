import axios from "axios";
import { Component } from "react";

class DisplayCards extends Component {
  state = {
    products: [],
    error: false,
    selectproduct: null, 
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      this.setState({
        products: response.data.products,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: true,
      });
    }
  };

  selectProduct = (product) => {
    this.setState({ selectproduct: product });
  };

  render() {
    const { products, error, selectproduct } = this.state;
    
    if (error) {
      return <h1>Failed to load the content</h1>;
    }
    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        height: "100vh", 
        overflow: "hidden",
      };
  
  

    const productListStyle = {
        border: "1px solid black",
        width: "40vw",
        height: "100%", 
        overflowY: "auto", 
      };
  
      const productStyle = {
        border: "1px solid black",
        width: "20vw",
        height: "40vh",
        margin: "10px",
        cursor: "pointer",
      };
  
      const sidePanelStyle = {
        width: "45vw",
        height: "80%", 
        border: "1px solid black",
        marginRight: "20px",
        overflow: "hidden", 
        padding: "10px",
      };
      return (
      <div style={containerStyle}>

        <div style={productListStyle}>
          {products.length > 0 ? (
            products.map((each) => (
              <div key={each.id} style={productStyle} onClick={() => this.selectProduct(each)} >
                <div>
                  <p>{each.title}</p>
                  <img src={each.images} height={"160px"}width={"160px"} style={{ margin: "10px" }} alt={each.name} />
                </div>
              </div>
            ))
          ) : (
            <h1>Loading.....</h1>
          )}
        </div>

        {selectproduct && (
          <div style={sidePanelStyle}>
            <p>{selectproduct.title}</p>
            <img
              src={selectproduct.images}
              height={"80%"}
              width={"80%"}
              alt={selectproduct.title}
            />
            <p> Products name : { selectproduct.title}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayCards;
