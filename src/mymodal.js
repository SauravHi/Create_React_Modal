import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const modalStyle = {
  content: {
    width: "60%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "none"
    // opacity: "0.9", // Opacity value (0.9 = 90% opacity)
  },
  overlay: {
    backgroundColor: "rgba(12, 12, 12, 0.5)" // Use rgba to set opacity for the overlay
  }
};

export default function MyModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="invoices">
      <div className="invoices-header">
        <h2>Creating a modal.</h2>
        <div
          className="invoices-sales"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        >
          Click to open the modal/pop up.
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="New Sales Invoice Modal"
        style={modalStyle}
        preventScroll={false}
      >
        <div>
          <h2>New Sales Invoice Modal</h2>
          <p>This is the content of the modal.</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
}
