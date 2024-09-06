import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const { state } = useNavigation();
  console.log(state);
  const isSubmitting = state === "submitting";
  return (
    <>
      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="loading loading-spinner"></span>sending...
          </>
        ) : (
          text || "Submit"
        )}
      </button>
    </>
  );
};

export default SubmitButton;
