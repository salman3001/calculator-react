import React from "react";

export default function InstructionModal() {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="btn btn-sm btn-info">
        &#9432; Istructions
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  bg-info text-info-content ">
          <ol className="p-4 list-disc">
            <li>You can use this calculator with Mouse and keyboard</li>
            <li>Use C button or delete button keyboard to clear everything</li>
            <li>
              Use Del button or backspace on keyboard to delete charector one by
              one
            </li>
            <li>
              Use equal button or press enter on keyboard to get final result
            </li>
          </ol>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
