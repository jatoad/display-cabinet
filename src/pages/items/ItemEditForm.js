import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
 
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Image } from "react-bootstrap";

import styles from "../../styles/ItemCreateEditForm.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory, useParams } from "react-router";

import test_item from '../../test/test_item.json'

function ItemEditForm(props) {

  const { setShowEditForm } = props;

  const [errors, setErrors] = useState({});

  const [itemData, setItemData] = useState({
    description: "",
    image: "",
  });
  const {description, image } = itemData;
  const history = useHistory();
  const { id } = useParams();
  // Image save location
  const imageInput = useRef(null);
  
  let testMode = true

  useEffect(() => {
    const handleMount = async () => {
      if (testMode) {
        const { description, image, is_owner } = test_item;
        is_owner ? setItemData({ description, image }) : history.push("/");
      } else {
        try {
            const { data } = await axiosReq.get(`/items/${id}/`);
            const { description, image, is_owner } = data;

            is_owner ? setItemData({ description, image }) : history.push("/");
        } catch (err) {
            console.log(err);
        }
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setItemData({
      ...itemData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      // Clear browser reference to prev file  
      URL.revokeObjectURL(image);
      setItemData({
        ...itemData,
        // Create a local path to the file passed in
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", description);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      // Put will update the existing drawer
      await axiosReq.put(`/items/${id}/`, formData);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => setShowEditForm(false)}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );}

export default ItemEditForm;
