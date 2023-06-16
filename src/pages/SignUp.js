import { useFormik } from "formik";
import { userSchema } from "../schemas/Validation.js";
import React, { useState } from "react";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";
import * as API from "../api/index";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "1234567896",
  confirmPassword: "",
};
const SignUp = () => {
  const [isEmail, setIsEmail] = useState(0);
  const [otp, setOtp] = useState("");
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        submitButton(values);
      },
    });

  console.log("otp", otp);

  const submitButton = async (values) => {
    Reflect.deleteProperty(values, "confirmPassword");
    console.log("values", values);
    const response = await API.user_registration(values);
    console.log("response", response);
    if (response.data.success === 1) {
      setIsEmail(1);
    }
  };

  return (
    <>
      <div class="registersec">
        <div class="row">
          <div class="ms_register_img">
            <img
              src="assets/images/register_img.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="ms_register_form">
            {isEmail === 0 ? (
              <>
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      class="form-control"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span class="form_icon">
                      <i class="fa_icon form-user" aria-hidden="true"></i>
                    </span>
                    {touched.name && errors.name ? (
                      <>
                        <p className="errorMess">{errors.name}</p>
                      </>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      class="form-control"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span class="form_icon">
                      <i class="fa_icon form-envelope" aria-hidden="true"></i>
                    </span>
                    {touched.email && errors.email ? (
                      <>
                        <p className="errorMess">{errors.email}</p>
                      </>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      class="form-control"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span class="form_icon">
                      <i class="fa_icon form-lock" aria-hidden="true"></i>
                    </span>
                    {touched.password && errors.password ? (
                      <>
                        <p className="errorMess">{errors.password}</p>
                      </>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      class="form-control"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span class="form_icon">
                      <i class=" fa_icon form-lock" aria-hidden="true"></i>
                    </span>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <>
                        <p className="errorMess">{errors.confirmPassword}</p>
                      </>
                    ) : null}
                  </div>
                  <button class="ms_btn">register now</button>
                </form>
                <p>
                  Already Have An Account?{" "}
                  <a
                    href="#myModal1"
                    data-toggle="modal"
                    class="ms_modal hideCurrentModel"
                  >
                    login here
                  </a>
                </p>
              </>
            ) : (
              <>
                <h2 className="mb-4">Email verification</h2>
                <span className="d-block">
                  Enter the code we just send on your Email
                </span>
                <div className="otpInput">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span className="dassh">-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <button class="ms_btn">Verify OTP</button>
                <p>
                  <span class="ms_modal resend">Resend OTP</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
