import React from "react";

class FeatureCard extends React.Component {
  render() {
    return (
      <div className="animate__animated animate__fadeInDownBig p-6 mx-auto bg-white rounded-xl shadow-md flex flex-grow max-w-max items-center space-x-4">
        <div>
          <img
            className="rounded-xl"
            src={this.props.img}
            alt={this.props.alt}
          />
          <div className="text-xl font-medium text-black">
            {this.props.title}
          </div>
          <p className="text-gray-500">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
