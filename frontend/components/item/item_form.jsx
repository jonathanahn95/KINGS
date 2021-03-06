import React from "react";
import HeaderContainer from "../header/header_container";
import ItemFormHtml from "./item_form_html";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  categorySection() {
    return Object.values(this.props.categories).map((category, idx) => {
      return (
        <li className="item-category-li" key={idx}>
          {category.category_name}
          <input
            type="radio"
            name="category"
            value={category.id}
            onClick={this.updateField("category_id")}
          />
        </li>
      );
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ uploadedFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      for (let i = 0; i < file.length; i++) {
        fileReader.readAsDataURL(file[i]);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product[title]", this.state.title);
    formData.append("product[description]", this.state.description);
    formData.append("product[price]", this.state.price);
    formData.append("product[user_id]", this.props.currentUser.id);
    formData.append("product[category_id]", this.state.category_id);
    formData.append("product[location]", this.state.location);
    formData.append("product[shipping]", this.state.shipping);
    formData.append("product[style]", this.state.style);
    let arr = [];

    if (this.state.uploadedFile) {
      for (var i = 0; i < this.state.uploadedFile.length; i++) {
        formData.append("product[photos]", this.state.uploadedFile[i]);
      }
      formData.append("product[photos]", formData.get("product[photos]"));
    }

    this.props.processItemForm(formData).then(railsitem => {
      this.props.history.push(`/product/${railsitem.payload.product.id}`);
    });
  }

  updateField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { item, formType, formTitle } = this.props;
    const categoryInput = this.categorySection();
    const preview = this.state.imageUrl ? (
      <img src={this.state.imageUrl} />
    ) : null;
    return (
      <div className="item-form">
        <HeaderContainer id={"cart-container-header"} />

        <div className="form-header">
          <h1>{this.props.formTitle}</h1>
        </div>

        <div>
          <form onSubmit={this.handleSubmit} className="item-form-container">
            <section>
              <div className="file-upload-title">
                <h2 className="item-photos">Photos</h2>
                <p>Please Add One Photo per Item</p>
              </div>
              <div className="file-upload">
                <input
                  className="file"
                  type="file"
                  onChange={this.handleFile}
                />
                <div className="uploaded-picture">{preview}</div>
              </div>
            </section>

            <section className="item-form-details">
              <h2 className="item-form-details-title">Item Details</h2>
              <ul className="details-list">
                <li className="single-item-detail">
                  <label className="item-form-title">Title:</label>
                  <input
                    className="item-att"
                    type="text"
                    value={this.state.title}
                    onChange={this.updateField("title")}
                    required
                  />
                </li>
                <li className="single-item-detail">
                  <label className="item-form-description">Description:</label>
                  <textarea
                    className="item-att-description"
                    value={this.state.description}
                    onChange={this.updateField("description")}
                    required
                  />
                </li>
                <li className="single-item-detail">
                  <label className="item-form-price">Price:</label>
                  <input
                    className="item-att"
                    type="number"
                    value={this.state.price}
                    onChange={this.updateField("price")}
                    required
                  />
                </li>
                <div className="single-item-detail2">
                  <label className="item-form-category">Category:</label>
                  <ul className="category-radio">{categoryInput}</ul>
                </div>
                <ItemFormHtml updateField={this.updateField} />
              </ul>
            </section>
            <div className="item-form-footer">
              <input
                className="item-form-submit"
                type="submit"
                value="Submit Item"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ItemForm;
