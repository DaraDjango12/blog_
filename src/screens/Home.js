import React from "react";
import HomePage from "../component/HomePage";

// import Modal from "../component/Modal/Modal";
// import Form from "../component/Form/Form";

const Home = () => {
  // const [formodal, setFormModal] = useState(false);

  // const toggleModal = () => {
  //   setFormModal(true);
  // };

  return (
    <div>
      <HomePage />
      {/* {formodal && (
        <Modal>
          <Form closeModal={setFormModal} />
        </Modal>
      )} */}
    </div>
  );
};

export default Home;
