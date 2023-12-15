import React, { Component } from 'react';
import './css/bootstrap.min.css';
import Navigation from './common_component/Navigation';
import Footer from './common_component/Footer';

function Content() {
    return (
        <div>
  <form className="form-inline" id="search-form">
    <div className="form-group mx-sm-3 mb-2">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        style={{ marginTop: 30 }}
        name="id"
        type="text"
        className="form-control"
        id="search"
        placeholder="id"
      />
    </div>
    <button
      style={{ marginTop: 30 }}
      type="submit"
      className="btn btn-primary mb-2"
    >
      Search
    </button>
    <button
      style={{ marginLeft: 50, marginTop: 30 }}
      type="button"
      className="btn btn-success mb-2"
    >
      Add Product
    </button>
  </form>
  <table className="table" id="data-table">
    <thead className="thead-light">
      <tr>
        <th>id</th>
        <th>title</th>
        <th>price</th>
        <th>description</th>
        <th>category</th>
        <th>image</th>
        <th>rating</th>
        <th>actions</th> {/* Thêm cột actions */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
        <td>data4</td>
        <td>data5</td>
        <td>data6</td>
        <td>data0</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
      <tr>
        <td>data7</td>
        <td>data8</td>
        <td>data9</td>
        <td>data10</td>
        <td>data11</td>
        <td>data12</td>
        <td>data13</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    )
}

class Product extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Product;