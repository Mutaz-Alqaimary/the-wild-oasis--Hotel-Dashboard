import { useState } from "react";
import styled from "styled-components";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";

import CreateBookingForm from "./CreateBookingForm";

const ButtonWrap = styled.div`
  @media (max-width: 37.5em) {
    width: 100%;
  }
`;

function AddBooking() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Row>
      <ButtonWrap>
        <Button type="button" onClick={() => setIsOpenModal((show) => !show)}>
          {isOpenModal ? "Close booking form" : "Add new booking"}
        </Button>
      </ButtonWrap>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateBookingForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </Row>
  );
}

export default AddBooking;
