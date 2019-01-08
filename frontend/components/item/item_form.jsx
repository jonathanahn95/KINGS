import React from "react";
import HeaderContainer from "../header/header_container";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    // if (this.props.match.params.itemId) {
    //   this.props.fetchItem(this.props.match.params.itemId);
    // }
  }
  //
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ uploadedFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);
    formData.append("user_id", this.props.currentUser.id);
    if (this.state.uploadedFile) {
      formData.append("photo", this.state.uploadedFile);
    }

    if (this.state.id) {
      formData.append("id", this.state.id);
    }

    this.props.processItemForm(formData).then(railsitem => {
      this.props.history.push(`/items/${railsitem.payload.item.id}`);
    });
  }

  updateField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { item, formType, formTitle } = this.props;

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
                <h2>Photos</h2>
                <p>Please Add One Photo per Item</p>
              </div>
              <div className="file-upload">
                <input type="file" onChange={this.handleFile} />
                <div className="uploaded-picture">{preview}</div>
              </div>
            </section>

            <section className="item-form-details">
              <h2 className="item-form-details-title">Item Details</h2>
              <ul className="details-list">
                <li>
                  <label className="item-form-title">Title</label>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.updateField("title")}
                    required
                  />
                </li>
                <li>
                  <label className="item-form-description">Description</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.updateField("description")}
                    required
                  />
                </li>
                <li>
                  <label className="item-form-price">
                    Price
                    <input
                      type="number"
                      value={this.state.price}
                      onChange={this.updateField("price")}
                      required
                    />
                  </label>
                </li>
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
