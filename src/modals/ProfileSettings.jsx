import React, { useRef, useState } from "react";
import AppModal from "../components/Modal/AppModal";
import { Field, Form, Formik } from "formik";
import { ComboSelect, Input, PinInput, TextArea } from "../components/Fields";
import Button from "../components/bits/Button";
import * as Yup from "yup";

export default function ProfileSettingsModal({ modal, closeModal }) {
  const formRef = useRef();
  const [error, setError] = useState();
  const [pin, setPin] = useState();

  const initialValues = {
    amount: "",
    beneficiary: "",
    account: "",
  };

  const validateSchema = Yup.object().shape({
    amount: Yup.string().required("Amount is required!"),
    beneficiary: Yup.string().required("Beneficiary Number is required!"),
    account: Yup.string().required("Account is required!"),
  });

  return (
    <AppModal
      modalState={modal}
      heading="Update Profile"
      desc="Provide the required info below to update
      your profile"
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
              <Input
                error={error}
                showError={error}
                label="Enter Full Name"
                type="text"
                name="name"
                placeHolder="Enter Full Name"
              />

              <Input
                error={error}
                showError={error}
                label="Enter Email Address"
                type="email"
                name="account"
                placeHolder="Enter Email"
              />

              <Input
                error={error}
                showError={error}
                label="Enter Phone Number"
                type="number"
                name="number"
                placeHolder="Enter Phone Number"
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
