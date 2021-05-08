import React, { Component } from "react";

export default class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      page: 1,
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.apiCall(page, 8);
  }

  apiCall = (pageNo, limit) => {
    const { images } = this.state;
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ images: [...images, ...data] });
      });
  };

  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      const { page } = this.state;
      this.apiCall(page, 5);
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <div className="parent-tiles">
          {images.map((el) => {
            return (
              <div key={el.id} className="tiles-div">
                <img src={el.download_url} alt="tiles" />
              </div>
            );
          })}
        </div>
        <div className="previous-next">
          <span onClick={this.onLoadMore}>LOAD MORE</span>
        </div>
      </div>
    );
  }
}
