import React from "react";
import ReactDOM from "react-dom";

// Define the props type
interface DropdownProps {
  title: string;
  children: React.ReactNode; // React children type
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        borderRadius: "5px",
      }}
    >
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {title}
      </button>
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "5px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;

class ReactDropdownWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Render React component into the shadow DOM
    this.renderReactComponent();
  }

  disconnectedCallback() {
    // Clean up React when the element is removed from the DOM
    if (this.shadowRoot) {
      ReactDOM.unmountComponentAtNode(this.shadowRoot);
    }
  }

  renderReactComponent() {
    const title = this.getAttribute("title") || "Default Title";

    ReactDOM.render(
      <Dropdown title={title}>Hello from React inside Web Component!</Dropdown>,
      this.shadowRoot
    );
  }
}

// Define the custom element (Web Component)
customElements.define("react-dropdown", ReactDropdownWebComponent);
export { ReactDropdownWebComponent };
