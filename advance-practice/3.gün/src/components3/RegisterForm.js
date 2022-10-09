import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Form,
  Card,
  CardBody,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Button,
  Spinner,
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  /* http://bank-api-x.herokuapp.com/bank/api/ */
  /* {   
  "ssn": "163-12-2163",
  "firstName": "Mariam",
  "lastName": "Lose",
  "email": "mariam_employee@gmail.com",
  "password": "emp0",
  "address": "3279 Meadow Lane San Francisco California 94108",
  "mobilePhoneNumber": "(707) 334-5497"
} */

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    mobilePhoneNumber: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Lütfen ssn giriniz."),
    firstName: Yup.string().required("Lütfen isim giirniz."),
    lastName: Yup.string().required("Lütfen soyisim giirniz"),
    email: Yup.string().email().required("Lütfen email giriniz"),
    password: Yup.string().required("Lütfen sifre giriniz"),
    address: Yup.string().required("Lütfen adres giriniz"),
    mobilePhoneNumber: Yup.string().required("Lütfen telefon numarası giriniz"),
  });

  const onSubmit = (values) => {
    console.log(values);

    setLoading(true);
    axios
      .post("http://bank-api-x.herokuapp.com/bank/api/register", values)
      .then((resp) => {
        setLoading(false);
        console.log(resp.data);
        alert("başarılı");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Card>
      <CardBody>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label>ssn</Label>
            <Input
              type="text"
              {...formik.getFieldProps("ssn")}
              invalid={formik.errors.ssn && formik.touched.ssn}
              valid={!formik.errors.ssn}
            />
            <FormFeedback>{formik.errors.ssn}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>firstName</Label>
            <Input
              type="text"
              {...formik.getFieldProps("firstName")}
              invalid={formik.errors.firstName && formik.touched.firstName}
              valid={!formik.errors.firstName}
            />
            <FormFeedback>{formik.errors.firstName}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>lastName</Label>
            <Input
              type="text"
              {...formik.getFieldProps("lastName")}
              invalid={formik.errors.lastName && formik.touched.lastName}
              valid={!formik.errors.lastName}
            />
            <FormFeedback>{formik.errors.lastName}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>email</Label>
            <Input
              type="email"
              {...formik.getFieldProps("email")}
              invalid={formik.errors.email && formik.touched.email}
              valid={!formik.errors.email}
            />
            <FormFeedback>{formik.errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>password</Label>
            <Input
              type="password"
              {...formik.getFieldProps("password")}
              invalid={formik.errors.password && formik.touched.password}
              valid={!formik.errors.password}
            />
            <FormFeedback>{formik.errors.password}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>adres</Label>
            <Input
              type="text"
              {...formik.getFieldProps("address")}
              invalid={formik.errors.address && formik.touched.address}
              valid={!formik.errors.address}
            />
            <FormFeedback>{formik.errors.address}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>telefon</Label>
            <Input
              type="text"
              {...formik.getFieldProps("mobilePhoneNumber")}
              invalid={
                formik.errors.mobilePhoneNumber &&
                formik.touched.mobilePhoneNumber
              }
              valid={!formik.errors.mobilePhoneNumber}
            />
            <FormFeedback>{formik.errors.mobilePhoneNumber}</FormFeedback>
          </FormGroup>
          <Button type="submit">
            {loading && <Spinner size="sm" />}Register
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
