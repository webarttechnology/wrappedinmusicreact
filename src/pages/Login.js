import { useFormik } from "formik";
import { userSchema } from "../schemas/Validation.js";
import React from "react";
import { toast } from "react-toastify";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Login = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        submitButton(values);
      },
    });

  const submitButton = async (values) => {
    console.log("values", values);
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
            <h2>Register / Sign Up</h2>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
