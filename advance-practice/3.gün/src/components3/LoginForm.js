import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import * as Yup from "yup";

const LoginForm = () => {
  /* http://bank-api-x.herokuapp.com/bank/api/ */
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    ssn: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Lütfen ssn giriniz"),
    password: Yup.string().required("lütfen şifre giriniz"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post("http://bank-api-x.herokuapp.com/bank/api/login", values)
      .then((resp) => {
        alert("giriş başarılı");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
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
            <Input type="text" {...formik.getFieldProps("ssn")} />
            <FormFeedback>{formik.errors.ssn}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input type="password" {...formik.getFieldProps("password")} />
            <FormFeedback>{formik.errors.password}</FormFeedback>
          </FormGroup>
          <Button type="submit">
            {loading && <Spinner size="sm" />}
            Login
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
