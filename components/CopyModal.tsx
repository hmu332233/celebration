import React from 'react';

type ButtonProps = {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return (
    <label htmlFor="copy-modal" className="btn btn-block mt-4" onClick={onClick}>Copy Link</label>
  );
}

function Modal() {
  return (
    <>
      <input type="checkbox" id="copy-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Link has been copied!</h3>
            <p className="py-4">
              Share the copied link to your friends!<br />
              When the link is too long, try <a className="link" href="https://bitly.com" target="_blank" rel="noreferrer">https://bitly.com</a>
            </p>
          <div className="modal-action">
            <label htmlFor="copy-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </>
  );
}

const CopyModal = {
  Modal,
  Button,
};

export default CopyModal;