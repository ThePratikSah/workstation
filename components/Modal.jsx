import React from "react";

function Modal() {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-6">
          Just share your email with us.
        </h3>
        <div>
          <form method="dialog">
            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">And we will contact you!</span>
              </div>
              <input
                type="text"
                placeholder="hello@user.mail"
                className="input input-bordered w-full"
              />
            </label>
            <button className="btn btn-neutral">Submit</button>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
