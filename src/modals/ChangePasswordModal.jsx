import React, { useRef, useState } from "react";
import AppModal from "../components/Modal/AppModal";
import { Field, Form, Formik } from "formik";
import {
  ComboSelect,
  Input,
  Password,
  PinInput,
  TextArea,
} from "../components/Fields";
import Button from "../components/bits/Button";
import * as Yup from "yup";

export default function ChangePasswordModal({ modal, closeModal }) {
  const formRef = useRef();
  const [error, setError] = useState();
  const [pin, setPin] = useState();

  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };

  const validateSchema = Yup.object().shape({
    old_password: Yup.string().required("Password is required!"),
    new_password: Yup.string()
      .required("Password is required!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: Yup.string()
      .required("Password is required!")
      .oneOf([Yup.ref("new_password")], "Passwords do not match"),
  });

  return (
    <AppModal
      modalState={modal}
      heading="Change Password"
      desc="PProvide the required info below to change 
      your password"
      closeModal={closeModal}
      walletBalance={false}
    >
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={() => {}}
      >
        {({ isSubmitting, isValid }) => (
          <div className="flex-[1] py-[0]">
            <Form className="mt-10">
              <Password
                error={error}
                showError={error}
                label="Enter Old Password"
                placeHolder="Enter Old Password"
                name="old_password"
              />

              <Password
                error={error}
                showError={error}
                label="Enter New Password"
                placeHolder="Enter New Password"
                name="new_password"
              />

              <Password
                error={error}
                showError={error}
                label="Confirm New Password"
                placeHolder="Confirm New Password"
                name="confirm_password"
              />

              <Button
                text="UPDATE"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse", marginTop: "4rem" }}
                height="50px"
                fontSize="13px"
              />
            </Form>
          </div>
        )}
      </Formik>
    </AppModal>
  );
}
